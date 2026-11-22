import layerFront from "@/assets/layer-front.png.asset.json";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { ChromaKeyImage } from "@/components/scene/chroma-key-image";
import { PipCharacter } from "@/components/scene/pip-character";
import { navLinks } from "@/data/game-content";
import { GlowButton } from "@/components/ui/glow-button";

interface FinalCtaProps {
  onBegin: () => void;
}

export function FinalCta({ onBegin }: FinalCtaProps) {
  return (
    <>
      <section className="final-cta" aria-labelledby="final-title">
        <div className="final-cta-art" aria-hidden="true">
          <ChromaKeyImage src={layerFront.url} alt="" />
        </div>
        <div className="final-cta-content" data-reveal>
          <PipCharacter mood="victory" className="final-pip" />
          <h2 id="final-title" className="final-title">Ready to hatch your Python?</h2>
          <GlowButton tone="orange" onClick={onBegin}>
            Hatch Your Python <ArrowRight aria-hidden="true" />
          </GlowButton>
        </div>
      </section>
      <footer className="site-footer">
        <div className="footer-inner">
          <span>© 2026 PyArena · Made for curious minds</span>
          <nav className="footer-links" aria-label="Footer navigation">
            {navLinks.map((item) => (
              <Link key={item.label} to="/" hash={item.hash}>{item.label}</Link>
            ))}
          </nav>
        </div>
      </footer>
    </>
  );
}