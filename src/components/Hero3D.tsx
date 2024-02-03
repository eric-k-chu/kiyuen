"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

export function Hero3D() {
  return (
    <div className="size-[400px]">
      <Canvas>
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={2} />
        <directionalLight position={[0, 5, 3]} color={"yellow"} />
        <Cube />
      </Canvas>
    </div>
  );
}

function Cube() {
  const mesh = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (!mesh.current) return;

    mesh.current.rotation.x += delta * 0.15;
    mesh.current.rotation.y += delta * 0.15;
    mesh.current.rotation.z += delta * 0.15;
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color={"#5C98D0"} />
    </mesh>
  );
}
