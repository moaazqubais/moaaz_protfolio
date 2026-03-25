import AboutSection from "./sections/AboutSection";
import CultureSection from "./sections/CultureSection";
import FeaturedEngagementsSection from "./sections/FeaturedEngagementsSection";
import FooterSection from "./components/layout/FooterSection";
import HeroSection from "./sections/HeroSection";
import NewsSection from "./sections/NewsSection";
import WorkSection from "./sections/WorkSection";

export default function App() {
  return (
<main className="min-h-screen bg-[#111111]">
<div className="overflow-hidden">
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <FeaturedEngagementsSection />
        <CultureSection />
        <NewsSection />
        <FooterSection />
      </div>
    </main>
  );
}