"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
}

/**
 * Reveals an array of heading lines one after another with a clipped
 * vertical slide — used for hero and section headlines.
 */
export default function AnimatedText({
  lines,
  className,
  lineClassName,
  delay = 0,
}: AnimatedTextProps) {
  return (
    <div className={className}>
      {lines.map((line, i) => (
        <div key={line + i} className="overflow-hidden">
          <motion.div
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: EASE,
              delay: delay + i * 0.12,
            }}
            className={cn(lineClassName)}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
