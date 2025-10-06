import { useState } from "react";

const LogoIcon = ({ tech }) => {
  const [showTooltip, setShowTooltip] = useState(false);

const getIconUrl = (tech) => {
    if (tech.name === "React Query") {
      return `https://api.iconify.design/logos:react-query-icon.svg?color=%23666666&height=64`; // Gray tint, sized to match
    }
    return `https://skillicons.dev/icons?i=${tech.icon}&theme=dark&pericon=gray`;
  };
  
  const iconUrl = getIconUrl(tech);

  
  return (
    <div 
      className="relative inline-block mx-4 group" // Increased mx for better spacing
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Fixed-size container for consistent icon scaling */}
      <div className="relative w-24 h-24 flex items-center justify-center bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-3 rounded-xl border border-gray-700/50 overflow-hidden group-hover:scale-110 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/30">
        {/* Shimmer overlay for stun */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        <img 
          src={iconUrl}
          alt={tech.name}
          className="w-16 h-16 object-contain" // Fixed inner size + object-contain to handle varying icon shapes/sizes
          loading="lazy"
        />
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
      </div>
      
      {showTooltip && (
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gray-900/95 backdrop-blur-sm border border-purple-500/30 px-3 py-2 rounded-lg whitespace-nowrap z-50 shadow-2xl animate-fadeIn">
          <p className="text-white text-sm font-medium">{tech.name}</p>
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900/95 border-l border-t border-purple-500/30 rotate-45" />
        </div>
      )}
    </div>
  );
};

export default LogoIcon;