import gsap from 'gsap';
import { itemsMenu } from '@/constants/CONST'; 
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ItemsMenu() {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      dropdownRef.current,
      { height: 0, opacity: 0 },
      { height: 'auto', opacity: 1, duration: 0.55, ease: 'power2.out' }
    );
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center w-full h-full z-[1]">
      {/* Меню з опціями */}
      <div
        ref={dropdownRef}
        className="absolute mt-2 w-full rounded flex flex-col items-center justify-center gap-[10px] z-[100] bg-white shadow-lg"
      >
        {itemsMenu.map((item) => (
          <Link key={item.name} href={item.link}>
            <div
              className={`flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded-2xl bg-white relative ${
                item.style_name === 'narrow'
                  ? 'w-[264px] h-[44px]'
                  : 'w-[296px] h-[36px] mt-[30px]'
              }`}
            >
              <h3
                className={`text-[12px] font-normal leading-[100%] tracking-[0.36px] text-black ${
                  item.style_name === 'narrow' ? 'font-normal' : 'font-black'
                }`}
              >
                {item.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
