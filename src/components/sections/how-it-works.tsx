import { playSteps } from "@/data/game-content";
import { PipCharacter } from "@/components/scene/pip-character";
import { SectionHeading } from "@/components/ui/section-heading";
import { StonePanel } from "@/components/ui/stone-panel";

export function HowItWorksSection() {
  return (
    <section id="how" className="content-section" aria-labelledby="how-title">
      <div className="content-shell">
        <SectionHeading
          kicker="Three steps. One very brave noodle."
          title="A little code goes a long way"
          copy="Read the clue, write a few lines, and watch Pip grow stronger with every win."
        />
        <div className="steps-grid">
          {playSteps.map((step) => (
            <StonePanel className="step-panel" key={step.number} data-reveal>
              <span className="step-number">{step.number}</span>
              <PipCharacter mood={step.mood} className="step-pip" />
              <h3 className="step-title">{step.title}</h3>
              <p className="step-copy">{step.copy}</p>
            </StonePanel>
          ))}
        </div>
      </div>
    </section>
  );
}