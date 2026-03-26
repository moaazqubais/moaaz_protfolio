import { newsSectionData } from "../Data/data"; 
import NewsCard from '../components/comman/NewsCard';

export default function NewsSection() {
  return (
    <section id="news" className="bg-[#f3f3f3] px-6 py-10 text-[#111111] md:px-10 md:py-14 lg:px-14 lg:py-16">
      <div className="mx-auto max-w-[1400px]">
        {newsSectionData.items.map((item, index) => (
          <NewsCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}