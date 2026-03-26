import CardItem from "../components/comman/CardItem";
import { workSectionData } from "../Data/data"; // استيراد البيانات


export default function WorkSection() {
  return (
    <section id="work" className="bg-[#f3f3f3] px-6 pb-16 pt-2 text-[#111111] md:px-10 lg:px-14 lg:pb-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workSectionData.items.map((item, index) => (
            <CardItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}