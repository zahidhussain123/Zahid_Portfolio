import { useState } from "react";

const LogoIcon = ({ tech, glowColor }) => {
  // Pass glowColor from category
  const [showTooltip, setShowTooltip] = useState(false);

 

  const getIconUrl = (tech) => {
    switch (tech.name.toLowerCase()) {
      case "react query":
        return "https://api.iconify.design/logos:react-query-icon.svg";
      // break;
      case "clerk":
        return "https://images.clerk.dev/static/logo-dark-mode.svg";
      // break;
      case "nextauth":
      case "nextauth.js":
        return "https://next-auth.js.org/img/logo/logo-sm.png";
      // break;
      default:
       return `https://skillicons.dev/icons?i=${tech.icon}&theme=dark&pericon=gray`;
    }
  };

  const iconUrl = getIconUrl(tech);

  // SVG Progress Ring (simple, customizable)
  const ProgressRing = ({ percentage, size = 40, strokeWidth = 3 }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;
    return (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="gray"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          className="opacity-50"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={glowColor || "#3B82F6"}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-300"
        />
      </svg>
    );
  };

  return (
    <div
      className="relative inline-block mx-4 group will-change-transform"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onTouchStart={() => setShowTooltip(true)} // Mobile touch support
    >
      <div className="relative w-24 h-24 flex items-center justify-center bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-3 rounded-xl border border-gray-700/50 overflow-hidden group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--glow-color)]">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
          style={{ "--glow-color": glowColor }}
        />
        <img
          src={iconUrl}
          alt={tech.name}
          className="w-18 h-18 object-contain z-10"
          loading="lazy"
        />
        <div
          className="absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
          style={{
            background: `linear-gradient(to bottom right, ${glowColor}20, ${glowColor}40)`,
          }}
        />
        {/* Spark on show */}
        {showTooltip && <div className="absolute inset-0 spark-burst" />}
      </div>

      {showTooltip && (
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gray-900/95 backdrop-blur-md border border-[${glowColor}]/30 px-4 py-3 rounded-xl whitespace-nowrap z-50 shadow-2xl animate-fadeIn flex items-center gap-2">
          <ProgressRing percentage={tech.proficiency} glowColor={glowColor} />
          <div>
            <p className="text-white text-sm font-semibold">{tech.name}</p>
            <p className="text-gray-400 text-xs">
              {tech.proficiency}% Proficiency
            </p>
          </div>
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900/95 border-l border-t border-[${glowColor}]/30 rotate-45" />
        </div>
      )}
    </div>
  );
};

export default LogoIcon;
