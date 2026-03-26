import { aboutSectionData } from "../Data/data";
import Reveal from "../components/animations/Reveal"; // استيراد الأنيميشن من كلاس Reveal

export default function AboutSection() {
  const { description, buttonText, logoText } = aboutSectionData;

  return (
    <section id="about" className="bg-[#f3f3f3] px-6 py-14 text-[#111111] md:px-10 md:py-20 lg:px-14 lg:py-24">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* القسم الأيسر مع الأنيميشن */}
        <Reveal direction="left" duration={1} amount={0.3}>
          <div className="max-w-[620px]">
            <h2 className="text-[1.5rem] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-[1.8rem] md:text-[2.2rem] lg:text-[2.7rem]">
              {description}
            </h2>

            <button
              type="button"
              className="mt-10 rounded-full border border-black/30 px-6 py-3 text-[0.7rem] font-bold tracking-[-0.01em] transition hover:bg-black hover:text-white"
            >
              {buttonText}
            </button>
          </div>
        </Reveal>

        {/* القسم الأيمن مع الأنيميشن */}
        <Reveal direction="right" duration={1.2} amount={0.3}>
          <div className="flex items-center justify-start lg:justify-end">
            <h3 className="text-[4.5rem] font-black leading-none tracking-[-0.08em] text-[#111111] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[11rem]">
              {logoText}
            </h3>
          </div>
        </Reveal>
      </div>
    </section>
  );
} 