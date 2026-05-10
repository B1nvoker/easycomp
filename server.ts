import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Helper to escape HTML characters for Telegram
  const escapeHtml = (text: string) => {
    return text.toString()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  };

  // API Route for sending leads to Telegram
  app.post("/api/send-lead", async (req, res) => {
    const { purpose, installment, budget, addons, name, phone } = req.body;
    
    const botToken = process.env.TELEGRAM_BOT_TOKEN?.trim();
    const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

    if (!botToken || !chatId) {
      console.error("Telegram credentials missing in environment");
      return res.status(500).json({ error: "Server configuration error" });
    }

    const safeName = escapeHtml(name || "Не указано");
    const safePhone = escapeHtml(phone || "Не указан");
    const safePurpose = escapeHtml(purpose || "Не указана");
    const safeBudget = escapeHtml(budget || "Не указан");
    const safeAddons = (addons || []).map((a: string) => escapeHtml(a)).join(", ") || "Нет";

    const text = [
      "<b>🆕 НОВАЯ ЗАЯВКА - PC BUILD</b>",
      "━━━━━━━━━━━━━━━━━━",
      `👤 <b>Имя:</b> ${safeName}`,
      `📞 <b>Телефон:</b> ${safePhone}`,
      "",
      `🎯 <b>Цель:</b> ${safePurpose}`,
      `💳 <b>Рассрочка:</b> ${installment ? "✅ Да" : "❌ Нет"}`,
      `💰 <b>Бюджет:</b> ${safeBudget}`,
      `🛠 <b>Доп. опции:</b> ${safeAddons}`,
      "━━━━━━━━━━━━━━━━━━"
    ].join("\n");

    try {
      // Robust Chat ID parsing: handle numbers, strings, and group IDs
      let formattedChatId: string | number = chatId;
      if (!chatId.startsWith('@')) {
        const numericMatch = chatId.match(/^-?\d+$/);
        if (numericMatch) {
          formattedChatId = Number(chatId);
        }
      }

      console.log(`[Telegram] Attempting send to: ${formattedChatId}`);

      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: formattedChatId,
        text: text,
        parse_mode: "HTML",
      });
      res.json({ success: true });
    } catch (error: any) {
      const tgError = error.response?.data;
      console.error("Telegram API Error:", JSON.stringify(tgError, null, 2));
      
      // Fallback: If HTML parsing failed, try sending as absolutely plain text
      if (tgError?.error_code === 400 && (tgError?.description?.includes('can\'t parse') || tgError?.description?.includes('entities'))) {
        try {
          // Remove all HTML tags and trim extra whitespace
          const cleanText = text.replace(/<[^>]*>/g, '').trim();
          await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            chat_id: chatId.trim(),
            text: cleanText,
          });
          return res.json({ success: true, warning: 'Sent as plain text' });
        } catch (innerError) {
          console.error("Telegram Fallback Failed:", innerError);
        }
      }

      const errorMessage = tgError?.description || error.message;
      res.status(500).json({ 
        error: "Telegram Error", 
        details: errorMessage 
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
