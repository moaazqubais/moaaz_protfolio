import { motion } from "framer-motion";  // استيراد motion من framer-motion
import { ActionButton } from "../components/comman/ActionButton";
import { CultureBlock } from "../components/comman/CultureBlock";
import { CultureImage } from "../components/comman/CultureImage";
import { cultureSectionData } from "../Data/data";

const viewportOnce = { once: false, amount: 0.2 };  // تعريف متغير viewportOnce

export default function CultureSection() {
  const { bottomSection, items, images } = cultureSectionData;

  return (
    <section id="culture" className="bg-[#f3f3f3] px-3 pb-3 pt-0 md:px-4">
      <div className="overflow-hidden border border-black/70 bg-[#1b1b1b]">
        <div className="relative mx-auto min-h-[920px] w-full max-w-[1600px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_45%)] px-6 pb-0 pt-3 sm:px-8 md:px-10 lg:min-h-[980px] lg:px-12">
          <div className="pointer-events-none absolute left-0 right-0 top-[76px] h-[1px] bg-black/35" />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.02fr_1fr] lg:gap-0">
            <div className="relative z-30 pt-6 lg:pt-14">
              <CultureBlock item={items[0]} />
              <CultureBlock
                item={items[1]}
                className="mt-10 lg:mt-12"
              />
            </div>

            <div className="relative min-h-[620px] lg:min-h-[1080px]">
              <CultureImage imageData={images.top} delay={0.5} className="absolute right-[6%] top-0 z-10 h-[170px] w-[78%]" />
              <CultureImage imageData={images.middle} delay={0.8} className="absolute left-[2%] top-[86px] z-20 h-[330px] w-[92%]" />
              <CultureImage imageData={images.bottom} delay={1} className="absolute right-[0%] top-[372px] z-30 h-[250px] w-[78%]" />
            </div>
          </div>

          <ActionButton buttonText="ABOUT US" delay={1.4} />

          <div className="absolute bottom-0 left-0 z-50 w-full">
            <div className="relative h-[118px] md:h-[132px]">
              <div className="absolute bottom-0 left-0 h-[58px] w-full bg-[#f3f3f3]" />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="absolute left-0 bottom-[44px] z-30 text-[2.6rem] font-black uppercase leading-[0.86] tracking-[-0.08em] text-[#efcfd2] sm:text-[3rem] md:text-[3.5rem]"
              >
                {bottomSection.accent}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute left-0 bottom-[8px] z-20 text-[2.6rem] font-black uppercase leading-[0.86] tracking-[-0.08em] text-[#171717] sm:text-[3rem] md:text-[3.5rem]"
              >
                <span className="block">{bottomSection.titleTop}</span>
                <span className="block">{bottomSection.titleBottom}</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}