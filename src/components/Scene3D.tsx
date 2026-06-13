import { Canvas } from '@react-three/fiber';
import { InteractiveScene } from './Scene';

export default function Scene3D() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <InteractiveScene />
      </Canvas>
    </div>
  );
}
