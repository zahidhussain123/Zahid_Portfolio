import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Suspense } from "react";

import HeroLights from "./HeroLights";
import Particles from "./Particles";
import FloatingLaptop from "../../FloatingLaptop";
import FloatingCards from "../../FloatingCards";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas camera={{ position: [0, 4, 10], fov: 40 }}>
      <ambientLight intensity={0.3} color="#1a1a40" />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <Suspense fallback={null}>
        <HeroLights />
        <Particles count={150} />
        <group scale={isMobile ? 0.8 : 1} position={[0, -2, 0]}>
          <FloatingLaptop />
          {/* <FloatingCards /> */}
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;