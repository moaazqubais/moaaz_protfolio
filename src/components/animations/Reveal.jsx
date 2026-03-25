// components/animations/Reveal.js
import { motion } from "framer-motion";

const directions = {
  left: { x: -180, y: 0 },
  right: { x: 180, y: 0 },
  up: { x: 0, y: 180 },
  down: { x: 0, y: -180 },
  center: { x: 0, y: 40, scale: 0.4 },
};

export default function Reveal({
  children,
  as = "div",
  direction = "up",
  delay = 0,
  duration = 1,
  once = true,
  amount = 0.3,
  blur = true,
  scale = true,
  className = "",
}) {
  const MotionTag = motion[as] || motion.div;
  const baseDirection = directions[direction] || directions.up;

  const initial = {
    opacity: 0,
    x: baseDirection.x ?? 0,
    y: baseDirection.y ?? 0,
    ...(direction === "center"
      ? { scale: baseDirection.scale ?? 0.4 }
      : scale
      ? { scale: 0.95 }
      : {}),
    ...(blur ? { filter: "blur(8px)" } : {}),
  };

  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    ...(blur ? { filter: "blur(0px)" } : {}),
  };

  return (
    <MotionTag
      initial={initial}
      whileInView={animate}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}