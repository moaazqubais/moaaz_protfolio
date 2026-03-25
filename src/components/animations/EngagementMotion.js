import { motion, useAnimation } from "motion/react";
import { useState } from "react";
import { FeaturedEngagementItem } from "../comman/FeaturedEngagementItem";

export function EngagementMotion({ items }) {
  const controls = useAnimation(); // تحكم بالحركة
  const [currentX, setCurrentX] = useState(0); // لحفظ المكان الحالي للحركة

  const startAnimation = () => {
    controls.start({
      x: [currentX, "-50%"], // استئناف الحركة من الموضع الحالي
      transition: { duration: 18, ease: "linear", repeat: Infinity },
    });
  };

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const percentage = (mouseX / rect.width) * 100;
    setCurrentX(percentage); // حفظ الموضع الحالي
  };

  return (
    <div className="mt-14 overflow-hidden pb-4">
      <motion.div
        className="flex w-max flex-nowrap gap-10 md:gap-14 lg:gap-20"
        animate={controls}
        initial={{ x: "0%" }}
        onMouseMove={handleMouseMove} // حساب الموضع بناءً على حركة الماوس
        onHoverStart={() => controls.stop()} // إيقاف الحركة عند التمرير
        onHoverEnd={startAnimation} // استئناف الحركة من الموضع الذي توقفت عنده
        style={{ willChange: "transform" }}
      >
        {items.map((item, index) => (
          <FeaturedEngagementItem key={`${item.id}-${index}`} item={item} />
        ))}
      </motion.div>
    </div>
  );
}