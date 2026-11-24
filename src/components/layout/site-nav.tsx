import { Volume2, VolumeX } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { navLinks } from "@/data/game-content";
import { Button } from "@/components/ui/button";
import { GlowButton } from "@/components/ui/glow-button";

interface SiteNavProps {
  muted: boolean;
  onToggleMuted: () => void;
  onBegin: () => void;
}

export function SiteNav({ muted, onToggleMuted, onBegin }: SiteNavProps) {
  return (
    <header className="site-nav">
      <div className="nav-inner">
        <Link className="brand-lockup" to="/" aria-label="PyArena home">
          <span className="brand-eyes" aria-hidden="true"><i /><i /></span>
          <span>PyArena</span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map((item) =>
            item.label === "Play" ? (
              <button key={item.label} type="button" className="nav-link-btn" onClick={onBegin}>
                {item.label}
              </button>
            ) : (
              <Link key={item.label} to="/" hash={item.hash}>{item.label}</Link>
            ),
          )}
        </nav>
        <div className="nav-actions">
          <Button
            variant="ghost"
            size="icon"
            className="sound-toggle"
            type="button"
            onClick={onToggleMuted}
            aria-label={muted ? "Turn sound on" : "Mute sound"}
            aria-pressed={!muted}
            title={muted ? "Sound is off" : "Sound is on"}
          >
            {muted ? <VolumeX aria-hidden="true" /> : <Volume2 aria-hidden="true" />}
          </Button>
          <GlowButton className="nav-cta" onClick={onBegin} size="sm">
            Begin the Hunt
          </GlowButton>
        </div>
      </div>
    </header>
  );
}