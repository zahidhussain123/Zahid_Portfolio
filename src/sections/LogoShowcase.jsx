import CategorySection from "../components/CategorySection";
import { techStack } from "../constants";

const LogoShowcase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-16 relative overflow-hidden">
      {/* Subtle background particles for stun factor */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-green-400 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-orange-400 rounded-full animate-ping delay-3000"></div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 25s linear infinite;
        }
        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
        }
        .glow-pulse { animation: glow-pulse 2s ease-in-out infinite; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
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
          />
          
          <CategorySection 
            title="UI/UX Design" 
            techs={techStack.uiDesign}
            color="bg-purple-500"
            direction="reverse"
          />
          
          <CategorySection 
            title="Backend Development" 
            techs={techStack.backend}
            color="bg-green-500"
            direction="forward"
          />
          
          <CategorySection 
            title="DevOps & Tools" 
            techs={techStack.devOps}
            color="bg-orange-500"
            direction="reverse"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoShowcase;