import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/pages/home-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PyArena — Code. Evolve. Collect." },
      {
        name: "description",
        content: "Hatch Pip, solve Python challenges, win powers, and collect legendary cards in a magical jungle.",
      },
      { property: "og:title", content: "PyArena — Code. Evolve. Collect." },
      {
        property: "og:description",
        content: "A playful jungle adventure where every Python challenge helps Pip evolve.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
