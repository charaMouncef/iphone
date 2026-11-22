import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Iphone } from "./model/Iphone";
import StudioLights from "./three/StudioLights";
import { PresentationControls } from "@react-three/drei";

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
  const [selectedColor, setSelectedColor] = useState("black");

  const colors = [
    { name: "burgundy", label: "Burgundy", value: "#6b1f2e", bg: "bg-red-900" },
    { name: "black", label: "Black", value: "#1d1d1f", bg: "bg-black" },
    { name: "white", label: "White", value: "#f5f5f7", bg: "bg-white" },
    { name: "silver", label: "Silver", value: "#c7c7cc", bg: "bg-gray-400" },
  ];

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
        <PresentationControls {...controlsConfig}>
          <RotatingIphone
            color={colors.find(({ name }) => name === selectedColor).value}
          />
        </PresentationControls>
      </Canvas>

      <div className="flex flex-col items-center gap-5 py-6">
        <p className="text-lg text-center">
          Colors available:{" "}
          <span className="text-white font-bold">
            {colors.map((color) => color.label).join(", ")}
          </span>
        </p>

        <div className="bg-gray-500 flex items-center gap-5 py-3 px-8 rounded-full">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              aria-label={color.label}
              className={`${color.bg} w-6 h-6 rounded-full transition-all duration-200 cursor-pointer ${
                selectedColor === color.name
                  ? "ring-2 ring-white ring-offset-4 ring-offset-gray-700"
                  : "hover:scale-110"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
