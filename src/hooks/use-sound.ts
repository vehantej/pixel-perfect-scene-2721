import { useCallback, useState } from "react";

export type SoundSlot = "confirm" | "evolve";

// TODO: Connect these named slots to final game sound files when they are supplied.
export function useSound() {
  const [muted, setMuted] = useState(true);
  const toggleMuted = useCallback(() => setMuted((value) => !value), []);
  const play = useCallback((slot: SoundSlot) => {
    if (muted) return;
    void slot;
  }, [muted]);

  return { muted, toggleMuted, play };
}