import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Iphone } from "./model/Iphone";
import StudioLights from "./three/StudioLights";
import { Html,PresentationControls } from "@react-three/drei";
import { iphoneColors } from "../constants";

function RotatingIphone({ color }) {
  const iphoneRef = useRef();

  useFrame((state, delta) => {
    iphoneRef.current.rotation.y += delta * 0.4;
  });

  return (
    <group ref={iphoneRef}>
      <StudioLights />
      <Iphone color={color} position={[0, -2.7, 0]} scale={30} />
    </group>
  );
}

export default function ProductViewer() {
  const [selectedColor, setSelectedColor] = useState("burgundy");

  const controlsConfig = {
    snap: true,
    speed: 1,
    zoom: 1,
    polar: [-Math.PI, Math.PI],
    azimuth: [-Infinity, Infinity],
    config: { mass: 1, tension: 0, friction: 26 },
  };

  return (
    <section className="w-full h-screen flex flex-col items-center justify-between">
      <h2 className="text-white text-4xl md:text-6xl font-bold text-center mt-8">
        Take closer look
      </h2>

      <Canvas
        camera={{ position: [-5, 0, 8], fov: 50, near: 0.1, far: 1000 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <Suspense
          fallback={
            <Html center style={{ pointerEvents: "none" }}>
              Loading...
            </Html>
          }
        >
          <PresentationControls {...controlsConfig}>
            <RotatingIphone
              color={
                (
                  iphoneColors.find(({ name }) => name === selectedColor) ??
                  iphoneColors[0]
                ).value
              }
            />
          </PresentationControls>
        </Suspense>
      </Canvas>

      <div className="flex flex-col items-center gap-5 py-6">
        <p className="text-lg text-center">
          Colors available: <br className="md:hidden" />
          <span className="text-white font-bold">
            {iphoneColors.map((color) => color.label).join(", ")}
          </span>
        </p>

        <div className="bg-dark-100 flex items-center gap-5 py-3 px-8 rounded-full">
          {iphoneColors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              aria-label={color.label}
              className={`${color.bg} w-6 h-6 rounded-full transition-all duration-200 cursor-pointer ${
                selectedColor === color.name
                  ? "ring-2 ring-white ring-offset-3 ring-offset-dark-100 scale-110"
                  : "hover:scale-110"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
