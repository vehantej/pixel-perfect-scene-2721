import { cn } from "@/lib/utils";

export type PipMood = "curious" | "attack" | "victory" | "sleep" | "fruit";

interface PipCharacterProps {
  mood?: PipMood;
  className?: string;
}

const moodLabels: Record<PipMood, string> = {
  curious: "Pip looks curious",
  attack: "Pip is ready to strike",
  victory: "Pip celebrates a win",
  sleep: "Pip is taking a nap",
  fruit: "Pip found a magical fruit",
};

// TODO: Replace this friendly SVG stand-in when the matching Pip pose sprites arrive.
export function PipCharacter({ mood = "curious", className }: PipCharacterProps) {
  return (
    <svg
      className={cn("pip-character", `pip-character--${mood}`, className)}
      viewBox="0 0 280 260"
      role="img"
      aria-label={moodLabels[mood]}
      focusable="false"
    >
      <ellipse className="pip-ground-shadow" cx="135" cy="231" rx="86" ry="13" />
      <path
        className="pip-outline"
        d="M82 215C37 214 30 166 56 143c30-27 98-27 127-2 28 23 25 65-8 77-28 10-61-2-60-28 1-19 19-29 39-23"
      />
      <path
        className="pip-coil"
        d="M82 215C37 214 30 166 56 143c30-27 98-27 127-2 28 23 25 65-8 77-28 10-61-2-60-28 1-19 19-29 39-23"
      />
      <path
        className="pip-belly-line"
        d="M73 204c-26-9-31-34-20-51 18-25 66-29 98-19 22 7 34 23 34 38"
      />
      <path className="pip-neck" d="M153 170c11-21 25-32 41-39" />
      <circle className="pip-head-outline" cx="183" cy="87" r="57" />
      <circle className="pip-head" cx="183" cy="87" r="52" />
      <ellipse className="pip-cheek" cx="145" cy="104" rx="15" ry="9" />
      <ellipse className="pip-cheek" cx="218" cy="104" rx="15" ry="9" />
      {mood === "sleep" ? (
        <g className="pip-sleep-eyes">
          <path d="M155 76c7 7 14 7 21 0M190 76c7 7 14 7 21 0" />
          <path d="M226 38c9-9 18-9 26-2M238 55c8-7 16-7 23-1" className="pip-sleep-mark" />
        </g>
      ) : (
        <g>
          <ellipse className="pip-eye" cx="162" cy="74" rx="14" ry="19" />
          <ellipse className="pip-eye" cx="202" cy="74" rx="14" ry="19" />
          <ellipse className="pip-pupil" cx="166" cy="78" rx="6.4" ry="10" />
          <ellipse className="pip-pupil" cx="206" cy="78" rx="6.4" ry="10" />
          <circle className="pip-eye-glint" cx="168" cy="70" r="3.5" />
          <circle className="pip-eye-glint" cx="208" cy="70" r="3.5" />
        </g>
      )}
      <path className="pip-mouth" d="M173 108c8 7 17 7 25 0" />
      <path className="pip-tongue" d="M186 114c-3 8 3 12 0 18m0-6-5 5m5-5 5 5" />
      <path className="pip-scale" d="m145 45 7-11 7 11-7 9zm58-11 7 11-7 9-7-9z" />
      <path className="pip-scale-small" d="m124 69 5-8 5 8-5 6zm100-2 5-8 5 8-5 6z" />
      {mood === "fruit" ? (
        <g className="pip-fruit-orb">
          <circle cx="244" cy="144" r="16" />
          <path d="M242 126c0-7 5-11 11-10-1 6-5 10-11 10Z" />
        </g>
      ) : null}
      {mood === "victory" ? <path className="pip-celebrate" d="m240 81 5-10m8 24 12-3m-29-24-2-11" /> : null}
    </svg>
  );
}