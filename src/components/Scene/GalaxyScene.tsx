import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Planet from './Planet';

export default function GalaxyScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 60 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: '#000',
      }}
    >
      {/* Luces */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* Estrellas */}
      <Stars
        radius={120}
        depth={80}
        count={2000}
        factor={2.5}
        fade
        speed={0.5}
      />

      {/* Planetas */}
      <Planet position={[0, 0, 0]} color="blue" />
      <Planet position={[-5, 2, -2]} color="green" />
      <Planet position={[4, -3, 1]} color="red" />

      <OrbitControls />
    </Canvas>
  );
}
