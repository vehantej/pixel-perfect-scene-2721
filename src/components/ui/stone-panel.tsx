import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface StonePanelProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function StonePanel({ className, children, ...props }: StonePanelProps) {
  return (
    <div className={cn("stone-panel", className)} {...props}>
      {children}
    </div>
  );
}