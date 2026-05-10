/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBlock from "./components/TrustBlock";
import Comparison from "./components/Comparison";
import Reviews from "./components/Reviews";
import Steps from "./components/Steps";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import StickyCTA from "./components/StickyCTA";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-neon-blue/30 selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="bg-gradient-to-b from-dark-bg via-dark-bg to-zinc-950">
          <TrustBlock />
          <Comparison />
        </div>
        
        <div className="bg-dark-bg">
          <Reviews />
          <Steps />
          <FAQ />
        </div>
        
        <div id="final-cta">
          <FinalCTA />
        </div>
      </main>

      <Footer />
      
      {/* Interactive Elements */}
      <StickyCTA />

      {/* Global Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-50 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-neon-blue/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-neon-purple/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
}

