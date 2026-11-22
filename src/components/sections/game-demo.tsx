import { useEffect, useRef, useState } from "react";

import { PipCharacter } from "@/components/scene/pip-character";
import { SectionHeading } from "@/components/ui/section-heading";
import { StonePanel } from "@/components/ui/stone-panel";

export function GameDemoSection() {
  const panelRef = useRef<HTMLDivElement>(null);
  const [awake, setAwake] = useState(false);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setAwake(true);
        observer.disconnect();
      }
    }, { threshold: 0.35 });
    observer.observe(panel);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="action" className="content-section action-section" aria-labelledby="action-title">
      <div className="content-shell">
        <SectionHeading
          kicker="A peek into the arena"
          title="Python, with a little more magic"
          copy="Turn a small loop into a big leap through the jungle."
        />
        <StonePanel className="game-panel" ref={panelRef} data-reveal>
          <div className="game-topbar">
            <span className="game-brand">Jungle Run <span aria-hidden="true">✦</span></span>
            <div className="game-progress" aria-label="Three of five fangs remaining">
              {Array.from({ length: 5 }, (_, index) => (
                <span className={`fang ${index > 2 ? "is-lost" : ""}`} key={index} />
              ))}
            </div>
            <span className="timer-ring" aria-label="One minute remaining">1:00</span>
          </div>
          <div className="game-grid">
            <div className="game-pane">
              <h3>Read the trail</h3>
              <p>A frog hops 4 lily pads at a time. How far after 3 jumps?</p>
              <span className="rule-chip">Rule: use a for loop</span>
            </div>
            <div className="game-pane code-pane">
              <h3>Try your code</h3>
              <pre className="code-lines"><code><span className="code-keyword">jumps</span> = <span className="code-number">0</span>{"\n"}<span className="code-keyword">for</span> _ <span className="code-keyword">in range</span>(<span className="code-number">3</span>):{"\n"}    jumps += <span className="code-number">4</span>{"\n"}<span className="code-keyword">print</span>(jumps)</code></pre>
              <p className="game-result">&gt; 12 lily pads!</p>
            </div>
            <div className={`game-pane journey-pane ${awake ? "is-awake" : ""}`}>
              <h3 className="journey-title">Pip’s path</h3>
              <PipCharacter mood={awake ? "fruit" : "sleep"} className="journey-pip" />
              <div className="magic-fruits" aria-label={awake ? "Pip found two magical fruits" : "Two magical fruits"}>
                <span className="magic-fruit" />
                <span className="magic-fruit" />
              </div>
              <p className="journey-status">{awake ? "Pip found a snack! +12 XP" : "A quiet spot to rest…"}</p>
            </div>
          </div>
        </StonePanel>
      </div>
    </section>
  );
}