import { useRef } from "react";

export const ImpactCard = ({ card, index }) => {
  const cardRef = useRef(null);

  // Handle mouse move to rotate the glow effect
  const handleMouseMove = (e) => {
    const cardElement = cardRef.current;
    if (!cardElement) return;

    const rect = cardElement.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    cardElement.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="impact-card timeline-card rounded-xl bg-gradient-to-br from-orange-900/20 to-red-800/20 border border-orange-700/30 p-6 mb-5 card card-border" // Added 'card card-border' for consistency
    >
      <div className="glow"></div> {/* Glow effect layer */}
      <div className="relative z-10"> {/* Wrap content in relative z-10 to layer above glow */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400">{card.duration}</div>
            <div className="text-white-50 text-sm">Duration</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-400">{card.teamSize}</div>
            <div className="text-white-50 text-sm">Team Size</div>
          </div>
        </div>
        
        {/* Technologies Section */}
        <div className="mb-4">
          <h4 className="font-semibold text-orange-400 mb-2 text-sm">Tech Stack</h4>
          <div className="flex flex-wrap gap-1">
            {card.technologies?.slice(0, 4).map((tech, i) => (
              <span key={i} className="px-2 py-1 bg-orange-600/20 text-orange-300 rounded text-xs border border-orange-600/30">
                {tech}
              </span>
            ))}
            {card.technologies?.length > 4 && (
              <span className="px-2 py-1 bg-gray-600/20 text-gray-300 rounded text-xs">
                +{card.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Impact Section */}
        {card.impact && (
          <div className="pt-4 border-t border-orange-700/30">
            <h4 className="font-semibold text-orange-400 mb-2 text-sm">Key Impact</h4>
            <p className="text-white-50 text-sm">{card.impact}</p>
          </div>
        )}
      </div>
    </div>
  );
};