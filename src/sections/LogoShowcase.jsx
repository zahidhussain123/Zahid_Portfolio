import CategorySection from "../components/CategorySection";
import { techStack } from "../constants";
import { useEffect, useState } from "react";

const LogoShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen  py-16 relative overflow-hidden">
      {/* Enhanced Particles: More nodes, category-synced colors */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        {[
          { top: "10%", left: "10%", color: "bg-blue-400", delay: "0s" },
          { top: "30%", right: "15%", color: "bg-purple-400", delay: "1s" },
          { top: "60%", left: "20%", color: "bg-green-400", delay: "2s" },
          { top: "80%", right: "25%", color: "bg-orange-400", delay: "3s" },
          { bottom: "20%", left: "40%", color: "bg-blue-400", delay: "4s" },
          { bottom: "40%", right: "40%", color: "bg-purple-400", delay: "5s" },
        ].map((particle, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 ${particle.color} rounded-full animate-orbit`}
            style={{
              top: particle.top || 'auto',
              bottom: particle.bottom || 'auto',
              left: particle.left || 'auto',
              right: particle.right || 'auto',
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes orbit {
          0%, 100% { transform: rotate(0deg) translateX(50px) rotate(0deg); }
          50% { transform: rotate(180deg) translateX(50px) rotate(-180deg); }
        }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }
        @keyframes marquee-reverse { 0% { transform: translateX(-33.333%); } 100% { transform: translateX(0); } }
        .animate-marquee { animation: marquee 30s linear infinite; }
        .animate-marquee-reverse { animation: marquee-reverse 25s linear infinite; }
        .animate-marquee:hover, .animate-marquee-reverse:hover { animation-play-state: paused; }
        @keyframes glow-pulse { 0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); } 50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); } }
        .glow-pulse { animation: glow-pulse 2s ease-in-out infinite; }
        @keyframes entrance { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .stagger-enter { animation: entrance 0.6s ease-out forwards; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeIn' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Technologies & Tools
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            Powering modern web experiences with cutting-edge stack
          </p>
        </div>

        <div className="space-y-8 w-full">
          <CategorySection 
            title="Frontend Development" 
            techs={techStack.frontend}
            color="bg-blue-500"
            direction="forward"
            delay={0}
          />
          <CategorySection 
            title="UI/UX Design" 
            techs={techStack.uiDesign}
            color="bg-purple-500"
            direction="reverse"
            delay={0.2}
          />
          <CategorySection 
            title="Backend Development" 
            techs={techStack.backend}
            color="bg-green-500"
            direction="forward"
            delay={0.4}
          />
          <CategorySection 
            title="DevOps & Tools" 
            techs={techStack.devOps}
            color="bg-orange-500"
            direction="reverse"
            delay={0.6}
          />
        </div>
      </div>
    </div>
  );
};

export default LogoShowcase;