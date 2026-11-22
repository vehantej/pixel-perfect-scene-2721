import { Code2, Flame, Sparkles } from "lucide-react";

import badgeOne from "@/assets/badge-1.png.asset.json";
import cardEpic from "@/assets/card-epic.png.asset.json";
import { TiltCard } from "@/components/cards/tilt-card";
import { cardRarities, powerBadges } from "@/data/game-content";
import { SectionHeading } from "@/components/ui/section-heading";

const placeholderIcons = [Code2, Sparkles, Flame] as const;

export function CollectionSection() {
  return (
    <section id="collection" className="content-section collection-section" aria-labelledby="collection-heading">
      <div className="content-shell">
        <SectionHeading
          kicker="A little proof of your Python power"
          title="Build your jungle collection"
          copy="Collect milestones, then meet the rare creatures your code has earned."
        />
        <div className="collection-grid">
          <div>
            <h3 className="collection-title">Earn Power Badges</h3>
            <div className="badge-grid">
              {powerBadges.map((badge, index) => {
                const PlaceholderIcon = placeholderIcons[index - 1];
                return (
                  <div className="badge-item" key={badge.title} data-reveal>
                    {badge.kind === "provided" ? (
                      <img className="badge-art" src={badgeOne.url} alt="Pip hatching badge" loading="lazy" />
                    ) : (
                      // TODO: Replace these temporary badge symbols with badge-2 through badge-4.
                      <span className="badge-art badge-placeholder" aria-hidden="true">
                        {PlaceholderIcon ? <PlaceholderIcon /> : null}
                      </span>
                    )}
                    <span className="badge-label">{badge.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="collection-title">Collect Legendary Cards</h3>
            <div className="card-fan" aria-label="Sample creature cards">
              {cardRarities.map((rarity, index) => (
                <TiltCard key={rarity.label} index={index} className={rarity.className} label={rarity.label}>
                  {/* TODO: Replace hue-shifted variants with their own art when supplied. */}
                  <img src={cardEpic.url} alt={`${rarity.label} Emerald Boa trading card`} loading="lazy" />
                </TiltCard>
              ))}
            </div>
            <p className="collection-caption">The better you code, the rarer your card.</p>
          </div>
        </div>
      </div>
    </section>
  );
}