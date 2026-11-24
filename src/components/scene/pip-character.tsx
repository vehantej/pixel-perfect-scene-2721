import { cn } from "@/lib/utils";

export type PipMood = "curious" | "attack" | "victory" | "sleep" | "fruit";

interface PipCharacterProps {
  mood?: PipMood;
  className?: string;
}

const moodLabels: Record<PipMood, string> = {
  curious: "Pip looks curious",
  attack: "Pip is ready to strike",
  victory: "Pip celebrates a win",
  sleep: "Pip is taking a nap",
  fruit: "Pip found a magical fruit",
};

const moodSrc: Record<PipMood, string> = {
  curious: "/assets/pip-curious.png",
  attack: "/assets/pip-side.png",
  victory: "/assets/pip-victory.png",
  sleep: "/assets/pip-sleep.png",
  fruit: "/assets/pip-fruit.png",
};

export function PipCharacter({ mood = "curious", className }: PipCharacterProps) {
  return (
    <img
      className={cn("pip-character", `pip-character--${mood}`, className)}
      src={moodSrc[mood]}
      alt={moodLabels[mood]}
      role="img"
      draggable={false}
    />
  );
}