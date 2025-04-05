"use client";
import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const MovingDotsBackground = ({
  numDots = 30,
  minSize = 2,
  maxSize = 5,
  className,
}) => {
  const dots = useMemo(() => {
    return Array.from({ length: numDots }).map(() => ({
      id: crypto.randomUUID(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (maxSize - minSize) + minSize,
      duration: 5 + Math.random() * 3,
    }));
  }, [numDots, minSize, maxSize]);

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden bg-background",
        className
      )}
      aria-hidden="true"
    >
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-border"
          style={{
            width: dot.size,
            height: dot.size,
            left: `${dot.x}%`,
            top: `${dot.y}%`,
          }}
          animate={{
            x: [-20, 20, -20],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default MovingDotsBackground;
