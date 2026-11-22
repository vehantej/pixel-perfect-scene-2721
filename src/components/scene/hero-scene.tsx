import { useEffect, useRef } from "react";

import bgFar from "@/assets/bg-far.png.asset.json";
import bgKeyart from "@/assets/bg-keyart.png.asset.json";
import layerFront from "@/assets/layer-front.png.asset.json";
import layerMid from "@/assets/layer-mid.png.asset.json";
import { ChromaKeyImage } from "@/components/scene/chroma-key-image";
import { Fireflies } from "@/components/scene/fireflies";

export function HeroScene() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const updateLayers = (x: number, y: number, scrollY: number) => {
      const layers = scene.querySelectorAll<HTMLElement>("[data-depth]");
      layers.forEach((layer) => {
        const depth = Number(layer.dataset.depth ?? 0);
        layer.style.setProperty("--layer-x", `${x * depth * 34}px`);
        layer.style.setProperty("--layer-y", `${y * depth * 26 - scrollY * depth * 0.11}px`);
      });
    };

    const onPointerMove = (event: PointerEvent) => {
      const bounds = scene.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      updateLayers(x, y, window.scrollY);
    };
    const onScroll = () => updateLayers(0, 0, window.scrollY);

    scene.addEventListener("pointermove", onPointerMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      scene.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={sceneRef} className="hero-scene" aria-hidden="true">
      <img className="scene-layer scene-layer--far" data-depth="0.02" src={bgFar.url} alt="" fetchPriority="high" />
      <img className="scene-layer scene-layer--keyart" data-depth="0.04" src={bgKeyart.url} alt="" fetchPriority="high" />
      <div className="scene-layer scene-layer--mid" data-depth="0.07">
        <ChromaKeyImage src={layerMid.url} alt="" />
      </div>
      <Fireflies />
      <div className="scene-layer scene-layer--front" data-depth="0.12">
        <ChromaKeyImage src={layerFront.url} alt="" />
      </div>
      <div className="scene-vignette" />
    </div>
  );
}