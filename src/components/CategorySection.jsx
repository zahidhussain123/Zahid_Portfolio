import MarqueeRow from "./MarqueeRow";

const CategorySection = ({ title, techs, color, direction, delay }) => (
  <div 
    className="mb-12 group stagger-enter"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="flex items-center gap-3 mb-6 px-4">
      <div className={`h-2 w-20 ${color} rounded-full animate-glow`}></div>
      <h3 className="text-2xl md:text-3xl font-bold text-white bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
        {title}
      </h3>
    </div>
    <MarqueeRow techs={techs} direction={direction} glowColor={`var(--${color}-500)`} />
  </div>
);

export default CategorySection;