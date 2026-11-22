import { Environment, Lightformer } from "@react-three/drei";
export default function StudioLights() {
  return (
    <group name="lights">
      <Environment resolution={128}>
        <group>
          <Lightformer
            intensity={10}
            position={[-10, 5, 5]}
            scale={10}
            form="rect"
            rotateY={Math.PI / 2}
          />
          <Lightformer
            intensity={10}
            position={[10, 0, 1]}
            scale={10}
            form="rect"
            rotateY={Math.PI / 2}
          />
        </group>
      </Environment>
      <spotLight
        position={[-2, 10, 5]}
        angle={0.15}
        decay={0}
        intensity={Math.PI / 2}
      />
      <spotLight
        position={[0, -25, 10]}
        angle={0.15}
        decay={0}
        intensity={Math.PI / 2}
      />
      <spotLight
        position={[0, 15, 5]}
        angle={0.15}
        decay={0}
        intensity={Math.PI / 2}
      />
    </group>
  );
}
