import { motion, useAnimation } from "motion/react";
import { useState, useEffect, useCallback } from "react";
import { FeaturedEngagementItem } from "../comman/FeaturedEngagementItem";

export function EngagementMotion({ items }) {
  const controls = useAnimation();
  const [currentX, setCurrentX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // استخدام useCallback لتغليف startAnimation
  const startAnimation = useCallback(() => {
    controls.start({
      x: [currentX, "-50%"],
      transition: { duration: 18, ease: "linear", repeat: Infinity },
    });
  }, [controls, currentX]); // تأكد من تضمين dependencies المطلوبة

  useEffect(() => {
    startAnimation(); // سيتم تشغيل الحركة عند تحميل المكون
  }, [startAnimation]); // الآن نضيف startAnimation في المصفوفة

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const percentage = (mouseX / rect.width) * 100;
    setCurrentX(percentage);
  };

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile(); // التحقق عند تحميل الصفحة
    window.addEventListener("resize", checkIsMobile); // التحقق عند تغيير حجم الشاشة

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <div className="mt-14 overflow-hidden pb-4">
      <motion.div
        className="flex w-max flex-nowrap gap-10 md:gap-14 lg:gap-20"
        animate={controls}
        initial={{ x: "0%" }} // بدء الحركة من الوضع الأولي
        onMouseMove={!isMobile ? handleMouseMove : undefined} // تعطيل الحركة بناءً على الموبايل
        onHoverStart={() => controls.stop()}
        onHoverEnd={startAnimation}
        style={{ willChange: "transform" }}
      >
        {items.map((item, index) => (
          <FeaturedEngagementItem key={`${item.id}-${index}`} item={item} />
        ))}
      </motion.div>
    </div>
  );
}