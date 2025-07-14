import React from "react";
import FuturisticHeroBackground from "./components/FuturisticHeroBackground";

const HeroSection = () => {
  return (
    <section className="relative h-auto text-white ">
      {/* Background component */}
      <FuturisticHeroBackground />

      {/* Text content container - ensures text appears above background */}
      <div className="relative z-50  flex flex-col">
        {/* Navigation */}
        <nav className="pt-8 px-8 flex justify-between items-center">
          <div className="flex items-center justify-center space-x-2 text-2xl font-bold text-[#eee5f5]">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="#eee5f5" className="">
              <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 14 0h-2zm-5 7a1 1 0 0 0-1 1v2h2v-2a1 1 0 0 0-1-1z"/>
            </svg>
            <span className="font-stardos">SayFully</span>
          </div>
          <div className="text-[#c8bcde] md:flex space-x-8">
            <a href="#" className="cursor-pointer hover:text-purple-400 transition-colors">Features</a>
            <a href="#" className="cursor-pointer hover:text-purple-400 transition-colors">How It Works</a>
            <a href="#" className="cursor-pointer hover:text-purple-400 transition-colors">Testimonials</a>
            <a href="#" className="cursor-pointer hover:text-purple-400 transition-colors">Pricing</a>
            <a href="#" className="cursor-pointer hover:text-purple-400 transition-colors">FAQ</a>
          </div>
          <button className="relative bg-[#8028f3] hover:bg-purple-500 px-4 py-2 rounded-full transition-colors text-[#f7cfff] before:absolute before:inset-0 before:rounded-full before:border before:border-[#f7cfff] before:blur-[4px] before:opacity-70 before:animate-pulse before:z-[-1] cursor-pointer">
            Get Started Free
          </button>
        </nav>

        {/* Main hero content */}
        <div className="mt-[100px] flex-grow flex flex-col items-center justify-center text-center px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#3c0066] to-[#1c0a36] text-[#c8bcde] text-sm font-medium shadow-md">
            <svg fill="#eee5f5" width="24" height="24" viewBox="-25.6 -25.6 307.20 307.20" id="Flat" xmlns="http://www.w3.org/2000/svg" stroke="#eee5f5">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                <path d="M208.8584,144a15.85626,15.85626,0,0,1-10.46778,15.01367l-52.16015,19.2168-19.2168,52.16015a16.00075,16.00075,0,0,1-30.02734,0l-19.2168-52.16015-52.16015-19.2168a16.00075,16.00075,0,0,1,0-30.02734l52.16015-19.2168,19.2168-52.16015a16.00075,16.00075,0,0,1,30.02734,0l19.2168,52.16015,52.16015,19.2168A15.85626,15.85626,0,0,1,208.8584,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z"></path>
              </g>
            </svg>
            <span>New: Real-time feedback during practice sessions</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-Questrial font-bold mb-2 leading-tight mt-4">
            <span className="text-[#e9dbfb]">Ace Your Next</span> <span className="text-[#b588f3]">Interview</span><br /><span className="text-[#e9dbfb]">with AI-Powered Practice</span>
          </h1>

          <p className="text-lg md:text-xl text-[#c8bcde] max-w-2xl mx-auto mb-8">
            Get personalized feedback and improve your interview skills with our AI-powered platform.
          </p>
          <button className="bg-[#8028f3] hover:bg-purple-500 text-[#f7cfff] font-semibold text-lg py-3 px-8 rounded-full transition-all transform hover:scale-101 shadow-lg hover:shadow-purple-500/30 flex items-center cursor-pointer">
            Start Practicing Now <span className="ml-2">→</span>
          </button>

          <div className="  ">
            <img src="/db.png" alt="Dashboard" className="max-w-full h-auto mt-[80px]"/>
          </div>
        </div>

      </div>

    </section>
  );
};

export default HeroSection;
