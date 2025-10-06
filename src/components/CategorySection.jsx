import MarqueeRow from "./MarqueeRow";

const CategorySection = ({ title, techs, color, direction }) => (
  <div className="mb-12 group"> {/* Added group for hover interactions */}
    <div className="flex items-center gap-3 mb-6 px-4">
      <div className={`h-2 w-16 ${color} rounded-full animate-pulse`}></div> {/* Thicker, pulsing accent */}
      <h3 className="text-2xl md:text-3xl font-bold text-white bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
        {title}
      </h3>
    </div>
    <MarqueeRow techs={techs} direction={direction} />
  </div>
);

export default CategorySection;