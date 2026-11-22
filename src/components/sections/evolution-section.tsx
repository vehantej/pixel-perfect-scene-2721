import evolutionStrip from "@/assets/evolution-strip.png.asset.json";
import { ChromaKeyImage } from "@/components/scene/chroma-key-image";
import { evolutionStages } from "@/data/game-content";
import { SectionHeading } from "@/components/ui/section-heading";
import { StonePanel } from "@/components/ui/stone-panel";

export function EvolutionSection() {
  return (
    <section id="evolution" className="content-section evolution-section" aria-labelledby="evolution-title">
      <div className="content-shell">
        <SectionHeading
          kicker="Seven forms. So many noodle moods."
          title="Watch Pip Evolve"
          copy="Every new Python skill brings Pip one step closer to legendary."
        />
        <div className="evolution-art" data-reveal>
          <ChromaKeyImage
            src={evolutionStrip.url}
            alt="Pip's seven forms, from a tiny hatchling to a winged dragon-serpent"
            keyColor="light"
          />
        </div>
        <div className="evolution-stages" aria-label="Pip's evolution stages">
          {evolutionStages.map((stage, index) => (
            <details className="evolution-stage" key={stage.name} data-reveal>
              <summary>{stage.name}</summary>
              <StonePanel className="evolution-tooltip">
                {index === 0 ? "Your journey starts here" : stage.unlock}
              </StonePanel>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}