import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Compare from "./components/Compare";
import ProductViewer from "./components/ProductViewer";
import Camera from "./components/Camera";
import Features from "./components/Features";
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function App() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <Compare />
      <ProductViewer />
      <Camera />
      <Features />
    </main>
  )
}

export default App
