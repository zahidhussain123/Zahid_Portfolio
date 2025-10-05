import { useState } from "react";

// Using Skill Icons CDN - no downloads needed!
const techStack = [
  { name: "React", icon: "react" },
  { name: "JavaScript", icon: "js" },
  { name: "TypeScript", icon: "ts" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "Figma", icon: "figma" },
  { name: "VS Code", icon: "vscode" },
  { name: "HTML5", icon: "html" },
  { name: "CSS3", icon: "css" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "PostgreSQL", icon: "postgres" },
  { name: "Docker", icon: "docker" },
  { name: "AWS", icon: "aws" },
];

const LogoIcon = ({ tech }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const iconUrl = `https://skillicons.dev/icons?i=${tech.icon}&theme=dark`;

  return (
    <div 
      className="flex-none flex-center marquee-item relative group"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <img 
        src={iconUrl}
        alt={tech.name}
        className="transition-all duration-300 group-hover:scale-110 w-12 h-12 md:w-16 md:h-16"
        loading="lazy"
      />
      
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-black-100 border border-black-50 px-3 py-2 rounded-lg whitespace-nowrap z-50">
          <p className="text-white-50 text-sm font-medium">{tech.name}</p>
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black-100 border-l border-t border-black-50 rotate-45" />
        </div>
      )}
    </div>
  );
};

const LogoShowcase = () => (
  <div className="md:my-20 my-10 relative">
    {/* Section Header */}
    <div className="text-center mb-12 px-5">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
        Technologies & Tools
      </h2>
      <p className="text-white-50 text-lg">
        Powering modern web experiences
      </p>
    </div>

    <div className="gradient-edge" />
    <div className="gradient-edge" />
    <div className="marquee h-52">
      <div className="marquee-box md:gap-12 gap-5">
        {techStack.map((tech, index) => (
          <LogoIcon key={`first-${index}`} tech={tech} />
        ))}
        {techStack.map((tech, index) => (
          <LogoIcon key={`second-${index}`} tech={tech} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;