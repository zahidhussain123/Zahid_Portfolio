// src/sections/ColorPalette.jsx - New section for interactive color swatches
import TitleHeader from "../components/TitleHeader"; // Assuming you have this; if not, replace with h1/h2
import { useColor } from "../context/colorContext";

const colors = [
  { hex: "#000000", name: "Midnight" },
  { hex: "#1a1a2e", name: "Deep Space" },
  { hex: "#16213e", name: "Ocean Abyss" },
  { hex: "#0f3460", name: "Sapphire Night" },
  { hex: "#e94560", name: "Crimson Glow" },
  { hex: "#533483", name: "Amethyst Mist" },
  { hex: "#2a9d8f", name: "Teal Wave" },
  { hex: "#e9c46a", name: "Golden Hour" },
];

const ColorPalette = () => {
  const { currentColor, setCurrentColor } = useColor();

  return (
    <section id="colors" className="flex-center section-padding bg-inherit relative overflow-hidden">
      {/* Subtle animated background particles for creativity */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="w-full h-full md:px-10 px-5 relative z-10">
        <TitleHeader
          title="Theme Palette"
          sub="✨ Click a color to immerse in a new vibe"
        />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-4xl mx-auto">
          {colors.map((colorObj, index) => {
            const isActive = currentColor === colorObj.hex;
            return (
              <button
                key={index}
                onClick={() => setCurrentColor(colorObj.hex)}
                className={`relative w-16 h-16 rounded-full border-2 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                  isActive
                    ? "border-white/50 scale-110 shadow-lg shadow-current/25"
                    : "border-white/20 hover:border-white/50"
                }`}
                style={{ backgroundColor: colorObj.hex }}
                aria-label={`Select ${colorObj.name} theme`}
              >
                {/* Creative inner glow/sparkle on active */}
                {isActive && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-transparent animate-ping" />
                )}
                {/* Subtle name tooltip on hover */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-white/80 bg-black/50 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {colorObj.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Creative flourish: Current color indicator */}
        <div className="mt-8 flex flex-col items-center">
          <p className="text-white-50 text-sm mb-2">Current Vibe:</p>
          <div
            className="w-8 h-8 rounded-full border-2 border-white/50 shadow-md"
            style={{ backgroundColor: currentColor }}
          />
        </div>
      </div>
    </section>
  );
};

export default ColorPalette;