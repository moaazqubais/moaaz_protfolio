import { motion } from "framer-motion";
import ArrowIcon from './ArrowIcon'; // استيراد مكون الأيقونة
import Reveal from "../animations/Reveal"; // استيراد الأنيميشن من كلاس Reveal

export default function NewsCard({ item, index }) {
  const animationDirection = index % 2 === 0 ? 100 : -100;

  return (
    <motion.article
      initial={{ opacity: 0, x: animationDirection }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="border-t border-black/25 py-8 md:py-10 lg:py-12"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[320px_1fr_52px] md:items-start md:gap-6 lg:grid-cols-[360px_1fr_64px] lg:gap-8">
        <div className="overflow-hidden bg-[#dddddd]">
          <img
            src={item.image}
            alt={item.title}
            className="h-[220px] w-full object-cover md:h-[210px] lg:h-[230px]"
          />
        </div>

        <div className="min-w-0">
          <h3 className="max-w-[860px] text-[2rem] font-medium uppercase leading-[0.92] tracking-[-0.07em] text-[#212121] sm:text-[2.3rem] md:text-[2.8rem] lg:text-[3rem]">
            {item.title}
          </h3>

          <div className="mt-8 flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[-0.02em] text-[#4a4a4a] md:mt-10">
            <span>{item.category}</span>
            <span>{item.date}</span>
          </div>
        </div>

        <div className="hidden justify-self-end pt-1 md:block">
          <ArrowIcon />
        </div>
      </div>

      <div className="mt-4 flex justify-end md:hidden">
        <ArrowIcon />
      </div>
    </motion.article>
  );
}