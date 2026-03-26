import Reveal from "../animations/Reveal"; // استيراد الأنيميشن من كلاس Reveal
import ImageContainer from './ImageContainer'; // استيراد مكون الحاوية للصورة

export default function CardItem({ item, index }) {
  const direction = index === 1 ? "center" : index % 2 === 0 ? "down" : "up"; // تحديد الاتجاه
  const delay = index * 0.2; // إضافة تأخير تدريجي لكل عنصر

  return (
    <Reveal
      direction={direction}
      delay={delay}
      duration={1}
      once={false}
      amount={0.3}
      className="group"
    >
      <div className="overflow-hidden bg-[#e9e9e9]">
        <ImageContainer image={item.image} alt={item.title} />
      </div>

      <div className="px-3 pb-2 pt-4">
        <h3 className="text-[1.2rem] font-black uppercase leading-none tracking-[-0.03em] text-[#2b2b2b]">
          {item.title}
        </h3>

        <p className="mt-2 max-w-[300px] text-[0.82rem] font-medium uppercase leading-[1.35] text-[#4a4a4a]">
          {item.description}
        </p>
      </div>
    </Reveal>
  );
}