import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import CurrencySelector from './CurrencySelector';
import { useProject } from '../context/ProjectContext';
import { CurrencyOption } from './CurrencySelector';

export default function Header() {
  const headerRef = useRef(null);
  const { currency, setCurrency } = useProject();

  const currencies: CurrencyOption<'usd' | 'eur' | 'uah'>[] = [
    { code: 'usd', label: 'USD', value: "$" },
    { code: 'eur', label: 'EUR', value: "€" },
    { code: 'uah', label: 'UAH', value: "₴" },
  ];

  useEffect(() => {
    gsap.from(headerRef.current, {
      y: -100,
      duration: 1,
      ease: 'bounce.out',
    });
  }, []);

  return (
    <header ref={headerRef} className="shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Мемасіки</h1>
      <CurrencySelector
        options={currencies}
        selected={currency}
        onChange={setCurrency}
      />
      <nav className="flex gap-4">
        <Link href="/">Головна</Link>
        <Link href="/orders">Замовлення</Link>
        <Link href="/login">Вхід</Link>
      </nav>
    </header>
  );
}
