import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export interface CurrencyOption<T extends string = string> {
    code: T;
    label: string;
    value?: string;
    img?: string
  }
  
  interface CurrencySelectorProps<T extends string = string> {
    options: CurrencyOption<T>[];
    selected: T;
    onChange: (code: T) => void;
  }
  
  export default function CurrencySelector<T extends string>({
    options,
    selected,
    onChange,
  }: CurrencySelectorProps<T>) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      gsap.fromTo(
        dropdownRef.current,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
    } else {
      gsap.to(dropdownRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in',
      });
    }
  }, [open]);

  const selectedOption = options.find((o) => o.code === selected);

  return (
    <div className="relative inline-block text-left w-[74px] h-[36px] rounded-25px pt-px pr-px pb-px pl-px gap-4px">

      {/* Активна валюта */}
        <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full p-[8px] flex items-center gap-2 rounded-3xl bg-gray-800 cursor-pointer text-[12px]"
        >
            <div
                className="w-[20px] h-[20px] rounded-full flex items-center justify-center text-xs text-white font-bold"
                style={{
                backgroundColor: selectedOption?.img ? 'transparent' : '#2563eb', // blue-600
                backgroundImage: selectedOption?.img ? `url(${selectedOption.img})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                }}
            >
                {!selectedOption?.img && selectedOption?.value}
            </div>
            <span>{selectedOption?.label}</span>
        </button>

      {/* Меню з опціями */}
      <div
        ref={dropdownRef}
        className={`overflow-hidden absolute mt-2 w-full rounded z-10 hiden rounded-2xl text-[12px]`}
      >
        <ul>
          {options.map((option) => (
            <li key={option.code}>
              <button type="button"
                onClick={() => {
                  onChange(option.code);
                  setOpen(false);
                }}
                className={`w-full text-left p-[8px] flex items-center gap-2 hover:bg-gray-900 ${
                  selected === option.code ? 'bg-gray-700' : ''
                }`}
                
              >
                  <div
                    className="w-[20px] h-[20px] rounded-full flex items-center justify-center text-xs text-white font-bold"
                    style={{
                    backgroundColor: option?.img ? 'transparent' : '#2563eb', // blue-600
                    backgroundImage: option?.img ? `url(${option.img})` : undefined,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}
                >
                    {!option?.img && option?.value}
                </div>
                <span>{option.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
