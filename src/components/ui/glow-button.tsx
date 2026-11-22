import type { ReactNode } from "react";
import { Leaf } from "lucide-react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type GlowTone = "green" | "orange" | "muted";

interface GlowButtonProps extends ButtonProps {
  tone?: GlowTone;
  children: ReactNode;
}

export function GlowButton({ tone = "green", className, children, ...props }: GlowButtonProps) {
  return (
    <Button className={cn("glow-button", `glow-button--${tone}`, className)} {...props}>
      <Leaf aria-hidden="true" />
      <span>{children}</span>
    </Button>
  );
}