import { footerSectionData } from "../../Data/data";

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#111111] text-white">
      <div className="w-full bg-[#1b1b1b] px-8 py-6 sm:px-10 md:px-14 md:py-8 lg:px-16 lg:py-8">
        <div className="grid min-h-[240px] grid-cols-1 gap-12 md:grid-cols-[220px_1fr] md:gap-10 lg:min-h-[280px] lg:grid-cols-[260px_1fr]">
          <div className="flex items-start">
            <h3 className="text-[1.6rem] font-black tracking-[-0.06em] text-white sm:text-[1.8rem] md:text-[2rem]">
              {footerSectionData.logo}
            </h3>
          </div>

          <div className="flex items-start justify-start md:justify-center">
            <div className="max-w-[700px]">
              <p className="text-[2rem] font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-[2.3rem] md:text-[2.8rem] lg:text-[3.2rem]">
                {footerSectionData.description[0]}
                <br />
                {footerSectionData.description[1]}
              </p>

              <a
                href={`mailto:${footerSectionData.email}`}
                className="mt-2 inline-block text-[2rem] font-semibold leading-[0.98] tracking-[-0.06em] text-white underline underline-offset-[6px] sm:text-[2.3rem] md:text-[2.8rem] lg:text-[3.2rem]"
              >
                {footerSectionData.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 text-white md:mt-10 md:flex-row md:items-end md:justify-between">
          {footerSectionData.links.map((link) => (
            <button
              key={link}
              type="button"
              className="flex items-center gap-3 text-left text-[0.9rem] font-semibold uppercase tracking-[-0.03em] text-white/95"
            >
              <span className="inline-block h-3.5 w-3.5 rounded-full bg-white" />
              <span>{link}</span>
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}