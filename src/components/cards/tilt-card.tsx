import type { PointerEvent, ReactNode } from "react";

interface TiltCardProps {
  index: number;
  className: string;
  label: string;
  children: ReactNode;
}

export function TiltCard({ index, className, label, children }: TiltCardProps) {
  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    event.currentTarget.style.setProperty("--tilt-x", `${-y * 8}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${x * 10}deg`);
  };

  const resetTilt = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <article
      className={`tilt-card ${className}`}
      data-card-index={index}
      aria-label={`${label} creature card`}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
    >
      {children}
      <span className="rarity-label">{label}</span>
    </article>
  );
}