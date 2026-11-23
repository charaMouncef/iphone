import { useState, useRef, useLayoutEffect } from "react";
import { cameraFocus } from "../constants";

export default function Camera() {
  const [selectedFocus, setSelectedFocus] = useState(cameraFocus[0]);
  const [pill, setPill] = useState({ left: 0, width: 0 });
  const buttonRefs = useRef({});

  useLayoutEffect(() => {
    const el = buttonRefs.current[selectedFocus.focus];
    if (el) {
      setPill({ left: el.offsetLeft, width: el.offsetWidth });
    }
  }, [selectedFocus]);

  return (
    <section className="w-full h-screen flex flex-col items-center">
      <div className="relative w-[70%] mt-8 aspect-4/3 rounded-4xl overflow-hidden">
        {cameraFocus.map((f) => (
          <img
            key={f.focus}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              selectedFocus.focus === f.focus ? "opacity-100" : "opacity-0"
            }`}
            src={f.image}
            alt={f.title}
            loading="lazy"
            width={800}
            height={600}
          />
        ))}
      </div>

      <div className="relative bg-dark-100 flex items-center gap-2 py-1 px-2 rounded-full mt-8">
        <span
          className="absolute top-1 bottom-1 bg-black rounded-full transition-all duration-300 ease-out"
          style={{
            left: pill.left,
            width: pill.width,
          }}
          aria-hidden
        />

        {cameraFocus.map((focus) => (
          <button
            key={focus.focus}
            ref={(el) => {
              buttonRefs.current[focus.focus] = el;
            }}
            className={`relative z-10 px-4 py-2 rounded-full cursor-pointer transition-colors duration-300 ${
              selectedFocus.focus === focus.focus
                ? "text-[#FFD500]"
                : "text-white"
            }`}
            onClick={() => setSelectedFocus(focus)}
          >
            {focus.focus}
          </button>
        ))}
      </div>

      <p className="w-[50%] text-center my-8">
        <span className="text-[#FFD500]">{selectedFocus.focus}</span>{" "}
        <span className="text-white font-bold">{selectedFocus.title}</span>{" "}
        <span className="text-white/80"> {selectedFocus.description}</span>
      </p>
    </section>
  );
}