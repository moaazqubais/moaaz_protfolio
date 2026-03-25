export function FeaturedEngagementItem({ item }) {
  return (
    <div className="w-[260px] shrink-0 sm:w-[290px] md:w-[320px]">
      <div className="flex min-h-[120px] flex-col justify-between">
        <h3 className="text-[2rem] font-black leading-none tracking-[-0.05em] text-[#222222] sm:text-[2.3rem] md:text-[2.6rem]">
          {item.brand}
        </h3>

        <span className="mt-4 block text-[1.4rem] leading-none text-black/55">—</span>
      </div>

      <div className="mt-10">
        <h4 className="text-[1rem] font-black uppercase leading-none tracking-[-0.03em] text-[#222222]">
          {item.heading}
        </h4>

        <p className="mt-4 text-[0.95rem] font-medium leading-[1.55] text-[#3d3d3d]">
          {item.description}
        </p>
      </div>
    </div>
  );
}