import { SiteNav } from "@/components/layout/site-nav";
import { HeroSection } from "@/components/scene/hero-section";
import { useSound } from "@/hooks/use-sound";

// TODO: replace with a proper route (e.g. /play) once both apps are merged.
const GAME_URL = "http://localhost:5173/";

export function HomePage() {
  const { muted, toggleMuted, play } = useSound();

  const beginHunt = () => {
    play("confirm");
    window.location.href = GAME_URL;
  };

  return (
    <div className="app-shell">
      <SiteNav muted={muted} onToggleMuted={toggleMuted} onBegin={beginHunt} />
      <main>
        <HeroSection onBegin={beginHunt} />
      </main>
    </div>
  );
}