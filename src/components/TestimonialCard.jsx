import { useState, useRef } from "react";
import TestimonialGlowCard from "./TestimonialGlowCard";



// Simple Initials Avatar Component
const InitialsAvatar = ({ name, size = "12" }) => {
  const getInitials = (name) => {
    return name
      ?.split(" ")
      ?.map((n) => n[0])
      ?.join("")
      ?.toUpperCase()
      ?.slice(0, 2);
  };

  return (
    <div className={`w-${size} h-${size} rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
      {getInitials(name)}
    </div>
  );
};



const TestimonialCard = ({ testimonial, index }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <TestimonialGlowCard index={index}>
      {/* Avatar Section */}
      <div className="flex items-center gap-3 mb-4">
        <InitialsAvatar name={testimonial.name} />
        <div className="flex-1 min-w-0">
          <a
            href={testimonial.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gray-100 hover:underline block"
          >
            {testimonial.name}
          </a>
          <a
            href={`https://x.com/${testimonial.mentions.slice(1)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-sm hover:underline"
          >
            {testimonial.mentions}
          </a>
        </div>
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }, (_, i) => (
          <img key={i} src="/images/star.png" alt="★" className="w-5 h-5" />
        ))}
      </div>

      {/* Review with Expansion */}
      <div className="flex-1 mb-4">
        <p
          className={`text-gray-300 text-sm leading-relaxed transition-all duration-300 ${
            expanded ? "max-h-none" : "line-clamp-4 overflow-hidden"
          }`}
        >
          {testimonial.review}
        </p>
      </div>

      {/* Read More Button */}
      {testimonial.review.length > 200 && (
        <button
          onClick={toggleExpand}
          className="text-blue-400 hover:text-blue-300 text-sm font-medium underline mt-2 transition-colors cursor-pointer"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}

      {/* LinkedIn Link */}
      <a
        href={testimonial.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 text-xs underline block mt-3"
      >
        View on LinkedIn →
      </a>
    </TestimonialGlowCard>
  );
};

export default TestimonialCard;