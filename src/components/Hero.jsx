import { useRef, useEffect } from "react";
export default function Hero() {
  const videoRef = useRef();
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.5;
  }, []);

  return (
    <section className="flex flex-col mt-[9vh] overflow-x-hidden relative">
      <video
        ref={videoRef}
        className="mx-auto w-screen md:h-[90vh] object-cover"
        autoPlay
        muted
        playsInline
        preload="auto"
        poster="/videos/hero.jpg"
        loop
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="flex flex-col  p-3 md:absolute md:bottom-8 md:left-8">
        <h1 className="text-white text-2xl md:text-6xl font-bold">
          iPhone 18 Pro
        </h1>
        <h3 className="text-sm md:text-xl text-dark-100 uppercase font-semibold">
          Pro further.
        </h3>
        <div className="flex justify-between items-center gap-4">
          <p className="text-text text-lg">
            From $1199 or $49.95/mo. for 24 mo.
          </p>
          <button className="bg-primary text-lg text-white font-semibold cursor-pointer px-6 py-2 rounded-full hover:scale-105 transition-all duration-300 ease-in-out">
            Buy
          </button>
        </div>
      </div>
    </section>
  );
}
