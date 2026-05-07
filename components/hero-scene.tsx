// @ts-nocheck
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function BrutalistShapes() {
  const groupRef = useRef<THREE.Group>(null);
  const starRef = useRef<THREE.Mesh>(null);

  const bars = useMemo(
    () => [
      { x: -2.3, y: -1.3, h: 1.2, color: "#FF6B6B" },
      { x: -1.2, y: -1.05, h: 1.8, color: "#FFD93D" },
      { x: -0.1, y: -0.7, h: 2.5, color: "#C4B5FD" },
      { x: 1.05, y: -0.35, h: 3.2, color: "#FF6B6B" },
      { x: 2.2, y: 0.15, h: 4, color: "#FFD93D" }
    ],
    []
  );

  const dots = useMemo(() => {
    const positions = new Float32Array(120);
    for (let i = 0; i < 40; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.45) * 0.05;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
    if (starRef.current) {
      starRef.current.rotation.z += 0.015;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh rotation={[0, 0, -0.08]} position={[0, 0.55, -0.2]}>
        <planeGeometry args={[6.8, 3.9]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>

      <mesh position={[0, -1.55, -0.1]}>
        <planeGeometry args={[6.5, 0.14]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {bars.map((bar) => (
        <group key={bar.x}>
          <mesh position={[bar.x + 0.16, bar.y - 0.16, -0.2]}>
            <boxGeometry args={[0.72, bar.h, 0.12]} />
            <meshBasicMaterial color="#000000" />
          </mesh>
          <mesh position={[bar.x, bar.y, 0]}>
            <boxGeometry args={[0.72, bar.h, 0.12]} />
            <meshBasicMaterial color={bar.color} />
          </mesh>
        </group>
      ))}

      <mesh ref={starRef} position={[-2.45, 1.48, 0.25]}>
        <torusKnotGeometry args={[0.45, 0.14, 90, 12]} />
        <meshStandardMaterial color="#000000" roughness={0.35} />
      </mesh>

      <mesh position={[2.2, 1.52, 0.18]} rotation={[0, 0, 0.4]}>
        <boxGeometry args={[1.4, 1.4, 0.14]} />
        <meshBasicMaterial color="#C4B5FD" />
      </mesh>
      <lineSegments position={[2.2, 1.52, 0.26]} rotation={[0, 0, 0.4]}>
        <edgesGeometry args={[new THREE.BoxGeometry(1.4, 1.4, 0.14)]} />
        <lineBasicMaterial color="#000000" />
      </lineSegments>

      <mesh position={[-0.25, 0.72, 0.12]}>
        <torusGeometry args={[1.5, 0.08, 18, 120]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[dots, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#000000" size={0.05} transparent opacity={0.24} />
      </points>
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="noise-card h-[360px] overflow-hidden border-4 border-black bg-[#FFFDF5] md:h-[460px]">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 7], fov: 34 }}>
        <color attach="background" args={["#FFFDF5"]} />
        <ambientLight intensity={1.05} />
        <directionalLight position={[4, 5, 2]} intensity={1.2} color="#ffffff" />
        <BrutalistShapes />
      </Canvas>
    </div>
  );
}
