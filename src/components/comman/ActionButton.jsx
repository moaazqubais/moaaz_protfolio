import { motion } from "motion/react";

const viewportOnce = { once: true, amount: 0.2 };

export function ActionButton({ buttonText, delay }) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportOnce}
      transition={{ duration: 1, delay }}
      className="absolute bottom-[60px] right-6 z-40 rounded-full border border-[#f3dfdf]/45 px-5 py-2 text-[0.58rem] font-bold uppercase leading-none tracking-[-0.01em] text-[#f3dfdf] transition hover:bg-[#f3dfdf] hover:text-black"
    >
      {buttonText}
    </motion.button>
  );
}