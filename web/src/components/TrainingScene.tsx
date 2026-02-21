import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';

function UnoBlock() {
  return (
    <group position={[0, 0, 0]}>
      <mesh castShadow>
        <boxGeometry args={[2.6, 0.2, 1.5]} />
        <meshStandardMaterial color="#1f3d7a" />
      </mesh>
      <Text position={[0, 0.25, 0]} fontSize={0.2} color="white">
        UNO R4
      </Text>
    </group>
  );
}

function LedBlock({ active }: { active: boolean }) {
  return (
    <group position={[-2.5, 0, 0]}>
      <mesh castShadow>
        <cylinderGeometry args={[0.2, 0.2, 0.4, 32]} />
        <meshStandardMaterial color={active ? '#32d74b' : '#5a1f1f'} />
      </mesh>
      <Text position={[0, 0.45, 0]} fontSize={0.14} color="white">
        LED
      </Text>
    </group>
  );
}

function ServoBlock({ active }: { active: boolean }) {
  return (
    <group position={[2.5, 0, 0]}>
      <mesh castShadow>
        <boxGeometry args={[0.9, 0.8, 1.1]} />
        <meshStandardMaterial color={active ? '#0ea5e9' : '#334155'} />
      </mesh>
      <Text position={[0, 0.62, 0]} fontSize={0.14} color="white">
        SERVO
      </Text>
    </group>
  );
}

export function TrainingScene({
  simulationReady
}: {
  simulationReady: boolean;
}) {
  return (
    <Canvas camera={{ position: [0, 4, 7], fov: 42 }} shadows>
      <color attach="background" args={['#0f172a']} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 5, 3]} intensity={1} castShadow />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#111827" />
      </mesh>
      <UnoBlock />
      <LedBlock active={simulationReady} />
      <ServoBlock active={simulationReady} />
      <OrbitControls />
    </Canvas>
  );
}
