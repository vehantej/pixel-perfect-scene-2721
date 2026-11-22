import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, Play } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { HeroScene } from "@/components/scene/hero-scene";
import { PipCharacter } from "@/components/scene/pip-character";
import { GlowButton } from "@/components/ui/glow-button";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onBegin: () => void;
}

export function HeroSection({ onBegin }: HeroSectionProps) {
  const [pipMood, setPipMood] = useState<"curious" | "victory">("curious");

  useEffect(() => {
    const interval = window.setInterval(() => {
      setPipMood("victory");
      window.setTimeout(() => setPipMood("curious"), 900);
    }, 6000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="hero-stage" aria-labelledby="hero-title">
      <HeroScene />
      <div className="hero-copy">
        <p className="hero-kicker">A tiny python. A huge adventure.</p>
        <h1 id="hero-title" className="hero-title">PyArena</h1>
        <p className="hero-tagline">Code. Evolve. Collect.</p>
        <p className="hero-description">
          Hatch Pip, solve Python challenges, win powers, and collect legendary cards.
        </p>
        <div className="hero-actions">
          <GlowButton onClick={onBegin}>
            Begin the Hunt <ArrowRight aria-hidden="true" />
          </GlowButton>
          <Button variant="outline" className="button-secondary" asChild>
            <Link to="/" hash="#how">
              <Play aria-hidden="true" /> How it works
            </Link>
          </Button>
        </div>
      </div>
      <div className="hero-pip-wrap" aria-hidden="true">
        <PipCharacter mood={pipMood} className="hero-pip" />
      </div>
      <Link className="scroll-hint" to="/" hash="#how">
        <span>Scroll to explore</span>
        <ArrowDown size={16} aria-hidden="true" />
      </Link>
    </section>
  );
}