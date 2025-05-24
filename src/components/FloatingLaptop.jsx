import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const FloatingLaptop = () => {
  const ref = useRef();
  const { scene } = useGLTF("public/models/Desk.glb");

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.3;
    ref.current.position.y = Math.sin(t) * 0.1;
  });

  return <primitive ref={ref} object={scene} scale={3} />;
};

export default FloatingLaptop;
