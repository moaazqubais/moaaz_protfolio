import { useState } from 'react';
import { heroContent, hederItems } from "../../Data/data";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // دالة لتبديل حالة القائمة
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  // دالة لإنشاء عناصر القائمة
  const renderMenuItems = () => {
    return hederItems.map(item => (
      <a
        key={item}
        href="/#"
        className="text-[14px] font-semibold tracking-[0.08em] text-white/85 transition-opacity duration-200 hover:opacity-70"
      >
        {item}
      </a>
    ));
  };

  return (
    <header className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20 w-full px-6 pt-6 md:px-10 md:pt-8">
      <div className="flex items-center justify-between w-full">
        {/* شعار العلامة التجارية */}
        <div className="shrink-0">
          <h1 className="text-[22px] font-black tracking-tight text-white md:text-[34px]">
            {heroContent.brand}
            <span className="align-super text-[8px] md:text-[10px]">{heroContent.copyright}</span>
          </h1>
        </div>

        {/* قائمة التنقل في الشاشات الكبيرة */}
        <nav className="hidden lg:flex items-center gap-8">
          {renderMenuItems()}
        </nav>

        {/* زر القائمة في الشاشات الصغيرة */}
        <button
          className="flex lg:hidden h-10 w-10 items-center justify-center text-white lg:h-12 lg:w-12"
          aria-label="Open menu"
          onClick={toggleMenu}
        >
          <span className="text-2xl leading-none">•••</span>
        </button>
      </div>

      {/* قائمة التنقل في الموبايل */}
      <nav
        className={`lg:hidden mt-2 flex flex-col gap-4 absolute ${isMenuOpen ? 'block' : 'hidden'}`}
        style={{ top: '100%', left: '90%', transform: 'translateX(-50%)' }}
      >
        {renderMenuItems()}
      </nav>
    </header>
  );
}