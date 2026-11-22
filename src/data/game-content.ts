import type { PipMood } from "@/components/scene/pip-character";

export const navLinks = [
  { label: "Play", hash: "#action" },
  { label: "Evolution", hash: "#evolution" },
  { label: "Collection", hash: "#collection" },
  { label: "How to play", hash: "#how" },
] as const;

export const playSteps: { number: string; title: string; copy: string; mood: PipMood }[] = [
  { number: "01", title: "Read", copy: "Spot the pattern hiding in each jungle challenge.", mood: "curious" },
  { number: "02", title: "Code", copy: "Try a little Python. Pip will cheer you on.", mood: "attack" },
  { number: "03", title: "Evolve", copy: "Every lesson unlocks a stronger, sillier Pip.", mood: "victory" },
];

export const evolutionStages = [
  { name: "Hatchling", unlock: "Your first Python steps" },
  { name: "Sprout Viper", unlock: "Unlocked after Lesson 1" },
  { name: "Emerald Boa", unlock: "Unlocked after Lesson 3" },
  { name: "Venom Cobra", unlock: "Unlocked after Lesson 6" },
  { name: "Storm Anaconda", unlock: "Unlocked after Lesson 10" },
  { name: "Elder Python", unlock: "Unlocked after Lesson 15" },
  { name: "Dragon-Serpent", unlock: "Master the final chapter" },
] as const;

export const powerBadges = [
  { title: "Pip’s First Day", kind: "provided" },
  { title: "Loop Scout", kind: "placeholder" },
  { title: "Bug Whisperer", kind: "placeholder" },
  { title: "Streak Keeper", kind: "placeholder" },
] as const;

export const cardRarities = [
  { label: "Common", className: "tilt-card--common" },
  { label: "Epic", className: "tilt-card--epic" },
  { label: "Legendary", className: "tilt-card--legendary" },
] as const;