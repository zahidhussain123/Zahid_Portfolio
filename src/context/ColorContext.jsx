// src/context/ColorContext.jsx - New file for global color state
import { createContext, useContext, useState, useEffect } from "react";
import { gsap } from "gsap";

const ColorContext = createContext();

export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  return context;
};

export const ColorProvider = ({ children }) => {
  const [currentColor, setCurrentColorState] = useState("#000000"); // Default black

  const setCurrentColor = (newColor) => {
    if (newColor === currentColor) return;

    // GSAP animation for smooth background transition
    gsap.to("body", {
      backgroundColor: newColor,
      duration: 1.5,
      ease: "power2.inOut",
      onComplete: () => setCurrentColorState(newColor),
    });
  };

  // Initial set
  useEffect(() => {
    document.body.style.backgroundColor = currentColor;
  }, [currentColor]);

  return (
    <ColorContext.Provider value={{ currentColor, setCurrentColor }}>
      {children}
    </ColorContext.Provider>
  );
};