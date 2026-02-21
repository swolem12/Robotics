import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, useGLTF } from '@react-three/drei';
import { Suspense, useMemo } from 'react';
import { Box3, Object3D, Vector3 } from 'three';

function normalizeModel(object: Object3D, targetSize: number) {
  const box = new Box3().setFromObject(object);
  const size = new Vector3();
  const center = new Vector3();
  box.getSize(size);
  box.getCenter(center);
  const maxDimension = Math.max(size.x, size.y, size.z);
  const scale = maxDimension > 0 ? targetSize / maxDimension : 1;

  return { scale, center };
}

function CadModel({
  url,
  label,
  position,
  targetSize
}: {
  url: string;
  label: string;
  position: [number, number, number];
  targetSize: number;
}) {
  const { scene } = useGLTF(url);
  const cloned = useMemo(() => scene.clone(true), [scene]);
  const { center, scale } = useMemo(() => normalizeModel(cloned, targetSize), [cloned, targetSize]);

  return (
    <group position={position} scale={scale}>
      <primitive object={cloned} position={[-center.x, -center.y, -center.z]} />
      <Text position={[0, targetSize * 0.62, 0]} fontSize={0.16} color="white">
        {label}
      </Text>
    </group>
  );
}

function MissingAsset({
  label,
  position,
  active
}: {
  label: string;
  position: [number, number, number];
  active: boolean;
}) {
  return (
    <group position={position}>
      <mesh castShadow>
        <boxGeometry args={[1, 0.6, 1]} />
        <meshStandardMaterial color={active ? '#0ea5e9' : '#334155'} />
      </mesh>
      <Text position={[0, 0.62, 0]} fontSize={0.12} color="white">
        {label} (model missing)
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
      <Suspense fallback={<MissingAsset label="Loading model" position={[0, 0, 0]} active={false} />}>
        <CadModel
          url="/models/boards/uno-r4-wifi.glb"
          label="UNO R4 WiFi"
          position={[0.5, -0.45, 0]}
          targetSize={3}
        />
        <CadModel
          url="/models/prototyping/breadboard.glb"
          label="Breadboard"
          position={[-3.2, -0.45, 0]}
          targetSize={2.3}
        />
        <CadModel
          url="/models/electromechanical/dm542t-digital-stepper-drive.glb"
          label="Stepper Driver"
          position={[3.2, -0.45, 0]}
          targetSize={2.1}
        />
      </Suspense>
      <MissingAsset label="LED" position={[-1.5, -0.1, -2.1]} active={simulationReady} />
      <MissingAsset label="SERVO" position={[1.5, -0.1, -2.1]} active={simulationReady} />
      <OrbitControls />
    </Canvas>
  );
}

useGLTF.preload('/models/boards/uno-r4-wifi.glb');
useGLTF.preload('/models/prototyping/breadboard.glb');
useGLTF.preload('/models/electromechanical/dm542t-digital-stepper-drive.glb');
