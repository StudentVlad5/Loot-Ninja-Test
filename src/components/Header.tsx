import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';
import { currencies, lunguages } from '@/constants/CONST';
import { useProject } from '@/context/ProjectContext';
import ItemsSelector from './ItemsSelector';
import IconProfile from './IconProfile';

export default function Header() {
  const headerRef = useRef(null);
  const { currency, setCurrency, language, setLanguage } = useProject();

  const pathname = usePathname();
  let checkHeader = false;
  
  useEffect(() => {
    gsap.from(headerRef.current, {
      y: -100,
      duration: 1,
      ease: 'bounce.out',
    });
  }, []);

  if(pathname){
  checkHeader = !pathname.includes('login') && !pathname.includes('registration');}

  if (!checkHeader) {
    return null; 
  }
  return (
     <header
      ref={headerRef}
      className="shadow-md p-4 flex justify-center items-center z-[10] absolute top-0 left-1/2 -translate-x-1/2"
    >
      <nav className="flex gap-[33px]">
        <h1 className="text-xl font-bold w-[80px] h-[36px] rounded-full flex items-center justify-center text-white bg-gray-900">
          LOGO
        </h1>
        <div className="flex gap-[4px] items-center justify-center">
          <ItemsSelector
            options={currencies}
            selected={currency}
            onChange={setCurrency}
          />
          <ItemsSelector
            options={lunguages}
            selected={language}
            onChange={setLanguage}
          />
          <IconProfile options={lunguages} selected={language} />
        </div>
      </nav>
    </header>
  );}
