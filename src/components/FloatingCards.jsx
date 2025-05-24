import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const FloatingCards = () => {
  const group = useRef();
  const cardGeometry = new THREE.PlaneGeometry(2, 1);
  const cardMaterial = new THREE.MeshBasicMaterial({ color: "#ffffff", side: THREE.DoubleSide });

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = t * 0.2;
  });

  return (
    <group ref={group} position={[0, 2, 0]}>
      {[...Array(4)].map((_, i) => (
        <mesh
          key={i}
          geometry={cardGeometry}
          material={cardMaterial}
          position={[Math.cos(i * 1.57) * 3, 0, Math.sin(i * 1.57) * 3]}
          rotation={[0, -i * 1.57, 0]}
        />
      ))}
    </group>
  );
};

export default FloatingCards;
