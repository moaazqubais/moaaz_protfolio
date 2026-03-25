import { motion } from "motion/react";

const viewportOnce = { once: true, amount: 0.2 };

export function CultureBlock({ item, className = "" }) {
  return (
    <div className={className}>
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute left-0 top-[-38px] z-20 text-[3.4rem] font-black uppercase leading-[0.88] tracking-[-0.08em] text-[#151515] sm:text-[4.4rem] md:text-[5rem] lg:text-[5.7rem]"
        >
          {item.topLabel}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-30"
        >
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[3.4rem] font-black uppercase leading-[0.88] tracking-[-0.08em] text-[#f1cfd1] sm:text-[4.4rem] md:text-[5rem] lg:text-[5.7rem]"
          >
            {item.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-3 text-[0.72rem] font-semibold uppercase tracking-[-0.01em] text-[#f3dfdf] sm:text-[0.8rem]"
          >
            {item.meta}
          </motion.p>

          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-6 rounded-full border border-[#f3dfdf]/50 px-5 py-2 text-[0.58rem] font-bold uppercase leading-none tracking-[-0.01em] text-[#f3dfdf] transition hover:bg-[#f3dfdf] hover:text-black"
          >
            {item.buttonText}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}