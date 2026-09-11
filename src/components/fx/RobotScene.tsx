import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Sparkles } from "@react-three/drei";
import * as THREE from "three";

/* ------------------------------------------------------------------ *
 *  Procedural, dependency-free robot.
 *  Built from primitives + neon emissive materials so it always
 *  renders (no external .glb / HDR needed) and stays lightweight.
 *
 *  Want a real model instead? Drop a robot.glb in /public/models and
 *  replace <RobotModel /> with drei's useGLTF — the Canvas, lights and
 *  controls below already give it a stage.
 * ------------------------------------------------------------------ */

const CYAN = "#22d3ee";
const VIOLET = "#a855f7";

function RobotModel() {
  const orbitRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const eyeGroup = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (orbitRef.current) orbitRef.current.rotation.z += delta * 0.5;
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.6;
      coreRef.current.rotation.x += delta * 0.2;
    }
    // gentle "look around" of the eyes
    if (eyeGroup.current) {
      eyeGroup.current.position.x = Math.sin(state.clock.elapsedTime * 0.6) * 0.06;
    }
  });

  const bodyMat = (
    <meshStandardMaterial color="#0e1220" metalness={0.85} roughness={0.35} />
  );

  return (
    <group scale={1.15} position={[0, -0.2, 0]}>
      {/* head */}
      <mesh castShadow position={[0, 1.15, 0]}>
        <boxGeometry args={[1.7, 1.25, 1.45]} />
        {bodyMat}
      </mesh>

      {/* face plate */}
      <mesh position={[0, 1.15, 0.74]}>
        <boxGeometry args={[1.45, 0.95, 0.12]} />
        <meshStandardMaterial color="#04050a" metalness={0.6} roughness={0.2} />
      </mesh>

      {/* glowing eyes */}
      <group ref={eyeGroup} position={[0, 1.2, 0.83]}>
        {[-0.32, 0.32].map((x) => (
          <mesh key={x} position={[x, 0, 0]}>
            <capsuleGeometry args={[0.09, 0.18, 4, 12]} />
            <meshStandardMaterial
              color={CYAN}
              emissive={CYAN}
              emissiveIntensity={3}
              toneMapped={false}
            />
          </mesh>
        ))}
      </group>

      {/* mouth / status bar */}
      <mesh position={[0, 0.82, 0.82]}>
        <boxGeometry args={[0.5, 0.06, 0.05]} />
        <meshStandardMaterial
          color={VIOLET}
          emissive={VIOLET}
          emissiveIntensity={2.5}
          toneMapped={false}
        />
      </mesh>

      {/* side modules / ears */}
      {[-0.98, 0.98].map((x) => (
        <mesh key={x} position={[x, 1.15, 0]}>
          <boxGeometry args={[0.28, 0.6, 0.7]} />
          <meshStandardMaterial color="#151a2c" metalness={0.8} roughness={0.4} />
        </mesh>
      ))}
      {[-1.14, 1.14].map((x) => (
        <mesh key={x} position={[x, 1.15, 0.2]}>
          <boxGeometry args={[0.05, 0.4, 0.08]} />
          <meshStandardMaterial
            color={CYAN}
            emissive={CYAN}
            emissiveIntensity={2}
            toneMapped={false}
          />
        </mesh>
      ))}

      {/* antenna */}
      <mesh position={[0, 1.95, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.5, 12]} />
        <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.3} />
      </mesh>
      <mesh position={[0, 2.25, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial
          color={VIOLET}
          emissive={VIOLET}
          emissiveIntensity={3}
          toneMapped={false}
        />
      </mesh>

      {/* neck */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.32, 0.42, 0.5, 20]} />
        {bodyMat}
      </mesh>

      {/* shoulders / base */}
      <mesh position={[0, 0.02, 0]}>
        <cylinderGeometry args={[0.95, 1.05, 0.35, 32]} />
        {bodyMat}
      </mesh>
      <mesh position={[0, 0.22, 0]}>
        <torusGeometry args={[0.9, 0.04, 12, 40]} />
        <meshStandardMaterial
          color={CYAN}
          emissive={CYAN}
          emissiveIntensity={1.5}
          toneMapped={false}
        />
      </mesh>

      {/* floating energy core */}
      <mesh ref={coreRef} position={[0, 0.02, 0]}>
        <icosahedronGeometry args={[0.34, 0]} />
        <meshStandardMaterial
          color={VIOLET}
          emissive={VIOLET}
          emissiveIntensity={2}
          wireframe
          toneMapped={false}
        />
      </mesh>

      {/* orbiting ring */}
      <group ref={orbitRef} position={[0, 1.1, 0]} rotation={[Math.PI / 2.6, 0, 0]}>
        <mesh>
          <torusGeometry args={[1.7, 0.02, 10, 64]} />
          <meshStandardMaterial
            color={CYAN}
            emissive={CYAN}
            emissiveIntensity={1.6}
            toneMapped={false}
          />
        </mesh>
        <mesh position={[1.7, 0, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color={VIOLET}
            emissive={VIOLET}
            emissiveIntensity={3}
            toneMapped={false}
          />
        </mesh>
      </group>
    </group>
  );
}

export default function RobotScene() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 1.2, 6], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      {/* neon-tinted lighting rig (no HDR needed) */}
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={80} color={CYAN} />
      <pointLight position={[-5, 2, 3]} intensity={70} color={VIOLET} />
      <pointLight position={[0, -3, 4]} intensity={30} color="#3b82f6" />
      <spotLight position={[0, 8, 2]} angle={0.5} intensity={40} penumbra={1} />

      <Float speed={1.6} rotationIntensity={0.5} floatIntensity={0.8}>
        <RobotModel />
      </Float>

      <Sparkles count={40} scale={7} size={2} speed={0.4} color={CYAN} opacity={0.5} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.2}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.8}
      />
    </Canvas>
  );
}
