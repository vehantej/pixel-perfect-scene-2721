import { useEffect, useRef } from "react";

type KeyColor = "green" | "light";

interface ChromaKeyImageProps {
  src: string;
  alt: string;
  className?: string;
  keyColor?: KeyColor;
}

export function ChromaKeyImage({ src, alt, className, keyColor = "green" }: ChromaKeyImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const image = new Image();
    image.crossOrigin = "anonymous";
    image.decoding = "async";
    image.onload = () => {
      const context = canvas.getContext("2d", { willReadFrequently: true });
      if (!context) return;

      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      context.drawImage(image, 0, 0);

      const frame = context.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = frame.data;
      for (let index = 0; index < pixels.length; index += 4) {
        const red = pixels[index] ?? 0;
        const green = pixels[index + 1] ?? 0;
        const blue = pixels[index + 2] ?? 0;

        if (keyColor === "green") {
          const screenGreen = green > 145 && green - red > 78 && green - blue > 78;
          if (!screenGreen) continue;
          const distance = Math.hypot(red, 255 - green, blue);
          const alpha = Math.max(0, Math.min(1, (distance - 24) / 100));
          pixels[index + 3] = Math.round((pixels[index + 3] ?? 255) * alpha);
        } else {
          const saturation = Math.max(red, green, blue) - Math.min(red, green, blue);
          const paleBackdrop = Math.min(red, green, blue) > 190 && saturation < 32;
          if (!paleBackdrop) continue;
          const brightness = Math.min(red, green, blue);
          const alpha = Math.max(0, Math.min(1, (222 - brightness) / 28));
          pixels[index + 3] = Math.round((pixels[index + 3] ?? 255) * alpha);
        }
      }
      context.putImageData(frame, 0, 0);
    };
    image.src = src;

    return () => {
      image.onload = null;
      image.src = "";
    };
  }, [keyColor, src]);

  return <canvas ref={canvasRef} className={`chroma-canvas ${className ?? ""}`} role="img" aria-label={alt} />;
}