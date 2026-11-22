import { useState } from "react";

import { GameDemoSection } from "@/components/sections/game-demo";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { EvolutionSection } from "@/components/sections/evolution-section";
import { CollectionSection } from "@/components/sections/collection-section";
import { FinalCta } from "@/components/sections/final-cta";
import { HeroSection } from "@/components/scene/hero-section";
import { SiteNav } from "@/components/layout/site-nav";
import { PipCharacter } from "@/components/scene/pip-character";
import { GlowButton } from "@/components/ui/glow-button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useSound } from "@/hooks/use-sound";

export function HomePage() {
  const [comingSoon, setComingSoon] = useState(false);
  const { muted, toggleMuted, play } = useSound();
  const beginHunt = () => {
    play("confirm");
    setComingSoon(true);
  };

  return (
    <div className="app-shell">
      <SiteNav muted={muted} onToggleMuted={toggleMuted} onBegin={beginHunt} />
      <main>
        <HeroSection onBegin={beginHunt} />
        <HowItWorksSection />
        <EvolutionSection />
        <CollectionSection />
        <GameDemoSection />
        <FinalCta onBegin={beginHunt} />
      </main>
      <Dialog open={comingSoon} onOpenChange={setComingSoon}>
        <DialogContent className="coming-soon-dialog">
          <DialogHeader>
            <DialogTitle>The jungle is almost ready!</DialogTitle>
            <DialogDescription>
              Pip is polishing his scales. The adventure will open soon.
            </DialogDescription>
          </DialogHeader>
          <PipCharacter mood="curious" className="dialog-pip" />
          <GlowButton onClick={() => setComingSoon(false)}>Back to the jungle</GlowButton>
        </DialogContent>
      </Dialog>
    </div>
  );
}