import LogoIcon from "./LogoIcon";

const MarqueeRow = ({ techs, direction = "forward", glowColor }) => (
  <div
    className="relative overflow-hidden py-6 bg-black/30 rounded-2xl border border-gray-700/40 group will-change-transform"
    onTouchStart={(e) =>
      (e.currentTarget.querySelector(".flex").style.animationPlayState =
        "paused")
    }
    onTouchEnd={(e) =>
      (e.currentTarget.querySelector(".flex").style.animationPlayState =
        "running")
    }
  >
    <div
      className={`flex whitespace-nowrap ${
        direction === "reverse" ? "animate-marquee-reverse" : "animate-marquee"
      }`}
    >
      {[...techs, ...techs, ...techs]?.map((tech, index) => (
        <LogoIcon key={`tech-${index}`} tech={tech} glowColor={glowColor} />
      ))}
    </div>
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center text-xs text-gray-400">
      ✨ Hover/Tap to Explore
    </div>
  </div>
);

export default MarqueeRow;
