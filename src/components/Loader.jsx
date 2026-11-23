import { useEffect, useState } from "react";

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let mounted = true;
    const start = Date.now();

    const update = async () => {
      try {
        await document.fonts?.ready;
      } catch {
        // Font loading API unavailable; fall back to the minimum delay.
      }

      const interval = setInterval(() => {
        if (!mounted) return;
        setProgress((p) => {
          if (p >= 90) return p;
          return Math.min(90, p + Math.random() * 12);
        });
      }, 120);

      const minTime = 800;
      const elapsed = Date.now() - start;
      const wait = Math.max(0, minTime - elapsed);

      setTimeout(() => {
        if (!mounted) return;
        clearInterval(interval);
        setProgress(100);
        setTimeout(() => {
          if (!mounted) return;
          setFadeOut(true);
          setTimeout(() => onFinish?.(), 400);
        }, 250);
      }, wait);
    };

    update();
    return () => {
      mounted = false;
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-999 bg-black flex flex-col justify-center items-center transition-opacity duration-400 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <img
        src="/logo.svg"
        alt="Apple"
        className="w-12 h-12 mb-6 animate-pulse"
      />
      <div className="w-48 h-0.5 bg-dark-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-white transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
