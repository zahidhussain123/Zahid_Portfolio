import { useState, useEffect } from "react";
import { themes } from "../constants";



const ColorThemeSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);

  useEffect(() => {
    // Load saved theme from localStorage
    const saved = localStorage.getItem("app-theme");
    if (saved) {
      const theme = themes.find(t => t.id === saved) || themes[0];
      setSelectedTheme(theme);
      applyTheme(theme);
    }
  }, []);

  const applyTheme = (theme) => {
    // Check if it's the same color
    if (document.body.style.backgroundColor === theme.bg) return;

    // Use GSAP for smooth transition
    if (window.gsap) {
      window.gsap.to("body", {
        backgroundColor: theme.bg,
        duration: 2.5,
        ease: "power2.inOut",
      });
    } else {
      // Fallback to CSS transition
      document.body.style.backgroundColor = theme.bg;
    }

    localStorage.setItem("app-theme", theme.id);
  };

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    applyTheme(theme);
    
    // Add subtle scale animation to button
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[200]">
      <div
        className={`absolute bottom-16 right-0 bg-black-100 border border-black-50 rounded-2xl p-4 shadow-2xl transition-all duration-500 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-3 w-48">
          <p className="text-white-50 text-sm font-semibold mb-2">Choose Theme</p>
          {themes?.map((theme) => (
            <button
              key={theme.id}
              onClick={() => handleThemeChange(theme)}
              className={`group relative flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-black-50 ${
                selectedTheme.id === theme.id ? "bg-black-50 scale-105" : ""
              }`}
            >
              <div
                className={`relative w-8 h-8 rounded-lg border-2 shadow-lg transition-all duration-300 group-hover:scale-110 ${
                  selectedTheme.id === theme.id 
                    ? "border-blue-400 shadow-blue-400/50 scale-110" 
                    : "border-white-50"
                }`}
                style={{ backgroundColor: theme.bg }}
              >
                {/* Pulse animation when selected */}
                {selectedTheme.id === theme.id && (
                  <div 
                    className="absolute inset-0 rounded-lg animate-ping opacity-75"
                    style={{ backgroundColor: theme.bg }}
                  />
                )}
              </div>
              <span className="text-white-50 text-sm font-medium">
                {theme.name}
              </span>
              {selectedTheme.id === theme.id && (
                <svg
                  className="w-4 h-4 ml-auto text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Floating Palette Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background Pulse */}
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full" />
        
        {/* Icon */}
        <div className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            />
          </svg>
        </div>

        {/* Ripple Effect on Click */}
        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-active:opacity-30 group-active:animate-ping" />
      </button>
    </div>
  );
};

export default ColorThemeSelector;