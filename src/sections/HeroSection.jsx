import { motion } from 'framer-motion'; // استيراد motion من مكتبة Framer Motion
import Header from '../components/layout/Header'; // استيراد مكون الهيدر
import { heroContent } from "../Data/data"; // استيراد البيانات
import PlayButton from '../components/comman/PlayButton';

export default function HeroSection() {
  const { heroImage } = heroContent; // تفكيك القيم من heroContent لتحسين القابلية للقراءة

  return (
    <section className="relative h-[calc(100vh-88px)] overflow-hidden">
      {/* الخلفية الأساسية مع الصورة */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
        whileInView={{ scale: 1.05 }} // تأثير تموج عند دخول العنصر
        transition={{ duration: 2, type: "spring", stiffness: 50 }} // إضافة حركة تموج احترافية
      />

      <Header />  {/* استدعاء مكون الهيدر هنا */}

      {/* الزر الرئيسي */}
      <PlayButton />  {/* استدعاء مكون الزر */}

      {/* تأثير الإضاءة (glow) خلف الزر */}
      <div className="absolute left-1/2 top-[43%] z-20 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-3xl" />

      {/* تدرج سفلي قبل السكشن الأبيض */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-[120px] bg-gradient-to-t from-black/18 to-transparent" />
    </section>
  );
}