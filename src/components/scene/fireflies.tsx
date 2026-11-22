import { useEffect, useRef } from "react";

interface Firefly {
  x: number;
  y: number;
  radius: number;
  phase: number;
  speed: number;
}

export function Fireflies() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const context = canvas?.getContext("2d");
    if (!canvas || !parent || !context) return;

    let width = 0;
    let height = 0;
    let animationFrame = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const particles: Firefly[] = [];
    const fireflyColor = getComputedStyle(canvas).getPropertyValue("--firefly-canvas").trim();

    const resize = () => {
      const bounds = parent.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      particles.length = 0;
      const count = Math.max(20, Math.round(width / 24));
      for (let index = 0; index < count; index += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: 1 + Math.random() * 2.2,
          phase: Math.random() * Math.PI * 2,
          speed: 0.004 + Math.random() * 0.009,
        });
      }
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = fireflyColor;
      context.shadowColor = fireflyColor;
      context.shadowBlur = 12;
      for (const particle of particles) {
        const pulse = 0.26 + (Math.sin(time * particle.speed + particle.phase) + 1) * 0.34;
        context.globalAlpha = pulse;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      }
      context.globalAlpha = 1;
      if (!reducedMotion) animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw(0);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fireflies-canvas" aria-hidden="true" />;
}