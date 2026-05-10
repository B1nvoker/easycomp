/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBlock from "./components/TrustBlock";
import Comparison from "./components/Comparison";
import Reviews from "./components/Reviews";
import PopularBuilds from "./components/PopularBuilds";
import Steps from "./components/Steps";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import StickyCTA from "./components/StickyCTA";
import ConsultationModal from "./components/ConsultationModal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen selection:bg-neon-blue/30 selection:text-black">
      <Navbar onConsultation={() => setIsModalOpen(true)} />
      
      <main>
        <Hero onStartQuiz={() => setIsModalOpen(true)} />
        
        <div className="bg-gradient-to-b from-dark-bg via-dark-bg to-zinc-950">
          <TrustBlock />
          <Comparison />
        </div>
        
        <div className="bg-dark-bg">
          <Reviews />
          <PopularBuilds />
          <Steps />
          <FAQ />
        </div>
        
        <div id="final-cta">
          <FinalCTA onStartQuiz={() => setIsModalOpen(true)} />
        </div>
      </main>

      <Footer />
      
      {/* Interactive Elements */}
      <StickyCTA onConsultation={() => setIsModalOpen(true)} />

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Global Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-50 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-neon-blue/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-neon-purple/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
}

