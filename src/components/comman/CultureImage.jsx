
import { motion } from "motion/react";

const viewportOnce = { once: true, amount: 0.2 };

export function CultureImage({ imageData, delay, className }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportOnce}
      transition={{ duration: 1, delay }}
      className={className}
    >
      <img
        src={imageData}
        alt="Culture visual"
        className="h-full w-full object-cover"
      />
    </motion.div>
  );
}
