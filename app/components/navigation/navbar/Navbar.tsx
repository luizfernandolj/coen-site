'use client';

import Link from 'next/link';
import { Logo } from './Logo';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useState } from 'react';

// Lista de links com nomes
const links = [
  { name: 'Laboratory', href: '/' },
  { name: 'Members', href: '/members' },
  { name: 'Projects', href: '/projects' },
  { name: 'Partners', href: '/partners' },
  { name: 'Publications', href: '/publications' },
  { name: 'Updates', href: '/updates' },
  { name: 'Photos', href: '/photos' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false); // Controla o menu em dispositivos móveis

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-10">
      <div className="container flex justify-between items-center p-3">
        {/* Logo como Link para a página inicial */}
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
    
        {/* Botão do menu (para dispositivos móveis) */}
        <button
          className="md:hidden block text-gray-800 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Links de navegação */}
        <div
          className={clsx(
            "flex-col md:flex-row md:flex space-y-4 md:space-y-0 space-x-0 md:space-x-12 mt-4 md:mt-0",
            {
              hidden: !menuOpen, // Oculta o menu em dispositivos móveis quando fechado
              "block md:flex": menuOpen, // Exibe o menu quando aberto em dispositivos móveis
            }
          )}
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex items-center gap-2 rounded-md p-2 text-lg font-medium hover:text-gray-300',
                {
                  'bg-reduni/10 text-reduni': pathname === link.href,
                  'text-gray-800': pathname !== link.href, // Cor padrão para os links
                }
              )}
            >
              <p>{link.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
