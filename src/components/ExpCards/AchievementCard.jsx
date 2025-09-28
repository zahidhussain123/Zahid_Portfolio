import { useRef } from "react";

export const AchievementCard = ({ card, index }) => {
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
      className="achievement-card timeline-card rounded-xl bg-gradient-to-br from-green-900/20 to-emerald-800/20 border border-green-700/30 p-6 mb-5 card card-border" // Added 'card card-border' for consistency
    >
      <div className="glow"></div> {/* Glow effect layer */}
      <div className="relative z-10"> {/* Wrap content in relative z-10 to layer above glow */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">🎯</span>
          </div>
          <h3 className="text-xl font-semibold text-green-400">Key Achievements</h3>
        </div>
        <ul className="space-y-2">
          {card.achievements?.map((achievement, i) => (
            <li key={i} className="flex items-start gap-2 text-white-50">
              <span className="text-green-400 mt-1">•</span>
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};