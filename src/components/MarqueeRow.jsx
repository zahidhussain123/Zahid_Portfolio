import LogoIcon from "./LogoIcon";

const MarqueeRow = ({ techs, direction = "forward" }) => (
  <div className="relative overflow-hidden py-6 bg-black/20 rounded-2xl border border-gray-700/30"> {/* Added subtle bg/border for depth */}
    <div className={`flex whitespace-nowrap ${direction === "reverse" ? "animate-marquee-reverse" : "animate-marquee"}`}>
      {[...techs, ...techs, ...techs].map((tech, index) => (
        <LogoIcon key={`tech-${index}`} tech={tech} />
      ))}
    </div>
    {/* Pause hint */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center text-xs text-gray-500">
      Hover to pause
    </div>
  </div>
);

export default MarqueeRow;