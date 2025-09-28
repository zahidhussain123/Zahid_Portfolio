export const SkillsCard = ({ card, index }) => {
  return (
    <div className="skills-card timeline-card rounded-xl bg-gradient-to-br from-blue-900/20 to-indigo-800/20 border border-blue-700/30 p-6 mb-5">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold">⚡</span>
        </div>
        <h3 className="text-xl font-semibold text-blue-400">Technologies Used</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {card.technologies?.map((tech, i) => (
          <span key={i} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-600/30">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};