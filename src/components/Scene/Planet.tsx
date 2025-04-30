import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { ThreeElements } from '@react-three/fiber';
import * as THREE from 'three'; // ✅ Import necesario

type PlanetProps = ThreeElements['mesh'] & {
  color?: string;
};

export default function Planet({ color = 'orange', ...props }: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} {...props}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
