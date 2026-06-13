import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars, Float, Icosahedron, TorusKnot } from '@react-three/drei';
import * as THREE from 'three';

export function InteractiveScene() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Custom material for glowing wireframe look
  const material = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color('#00ffff'),
    emissive: new THREE.Color('#0088ff'),
    emissiveIntensity: 0.5,
    wireframe: true,
    transparent: true,
    opacity: 0.8,
  }), []);

  const solidMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color('#111111'),
    roughness: 0.2,
    metalness: 0.8,
  }), []);

  const accentMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color('#ff00ff'),
    emissive: new THREE.Color('#aa00aa'),
    emissiveIntensity: 1,
    wireframe: true,
  }), []);

  // Parallax effect on mouse move
  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      
      // Slow rotation of the whole group
      groupRef.current.rotation.y = t * 0.1;
      groupRef.current.rotation.x = t * 0.05;

      // Mouse parallax
      const targetX = (state.pointer.x * Math.PI) / 4;
      const targetY = (state.pointer.y * Math.PI) / 4;
      
      groupRef.current.rotation.y += 0.05 * (targetX - groupRef.current.rotation.y);
      groupRef.current.rotation.x += 0.05 * (targetY - groupRef.current.rotation.x);
    }
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#ff00ff" />
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <group ref={groupRef}>
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Icosahedron args={[2, 1]} position={[0, 0, 0]}>
            <primitive object={material} attach="material" />
          </Icosahedron>
          <Icosahedron args={[1.9, 1]} position={[0, 0, 0]}>
             <primitive object={solidMaterial} attach="material" />
          </Icosahedron>
        </Float>

        <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
          <TorusKnot args={[3, 0.1, 100, 16]} position={[0, 0, -2]}>
            <primitive object={accentMaterial} attach="material" />
          </TorusKnot>
        </Float>
        
        {/* Floating background particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <Float key={i} speed={1 + Math.random()} rotationIntensity={2} floatIntensity={2}>
            <mesh
              position={[
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 10 - 5
              ]}
              scale={Math.random() * 0.2 + 0.1}
            >
              <octahedronGeometry />
              <meshStandardMaterial 
                color={Math.random() > 0.5 ? '#00ffff' : '#ff00ff'} 
                emissive={Math.random() > 0.5 ? '#00ffff' : '#ff00ff'}
                emissiveIntensity={0.5}
                wireframe
              />
            </mesh>
          </Float>
        ))}
      </group>
    </>
  );
}
