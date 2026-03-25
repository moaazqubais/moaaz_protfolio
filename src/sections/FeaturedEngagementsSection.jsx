import { EngagementMotion } from "../components/animations/EngagementMotion";
import { featuredEngagementsData } from "../Data/data";

export default function FeaturedEngagementsSection() {
  const { items, current, total, title } = featuredEngagementsData;
  const loopItems = [...items, ...items]; // تكرار العناصر مرتين لعمل loop سلس

  return (
    <section className="bg-[#f3f3f3] px-6 py-12 text-[#111111] md:px-10 md:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto max-w-[1400px]">
        {/* بيانات القسم العلوي */}
        <div className="flex items-center justify-between border-t border-black/20 pt-4">
          <span className="text-[0.8rem] font-medium text-black/75">{current}</span>
          <span className="text-[0.8rem] font-medium text-black/75">/{total}</span>
          <span className="h-2.5 w-2.5 rounded-full bg-black/80" />
        </div>

        {/* عنوان القسم */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-[2.2rem] font-black uppercase leading-[0.92] tracking-[-0.05em] sm:text-[2.8rem] md:text-[3.4rem] lg:text-[4rem]">
            {title[0]}
            <br />
            {title[1]}
          </h2>
        </div>

        {/* الحركات والعناصر المتكررة */}
        <EngagementMotion items={loopItems} />
      </div>
    </section>
  );
}