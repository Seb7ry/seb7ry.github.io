import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas
        style={{ background: '#080814' }}
        camera={{ position: [0, 0, 10], fov: 75 }}
      >
      </Canvas>
    </div>
  );
}

export default App;
