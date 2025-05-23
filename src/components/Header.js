'use client';

import Link from 'next/link';
import Logo from './Logo';
import { IoCart, IoMenu, IoBeer, IoClose } from 'react-icons/io5';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems } = useCart();

  return (
    <header className="bg-gradient-to-t from-red-900 to-red-200 text-white shadow-md px-4 py-3 flex items-center justify-between relative">
      {/* Logotipo + Ícone */}
      <div className="flex items-center gap-2">
        <Logo />
        <IoBeer size={24} className="text-white" />
      </div>

      {/* Navegação Desktop */}
      <nav className="hidden md:flex space-x-6 font-medium">
        {['Início', 'Cervejas', 'Refrigerantes', 'Água', 'Energético', 'Destilados', 'Outros'].map((label) => (
          <Link
            key={label}
            href={label === 'Início' ? '/' : `/categoria/${label.toLowerCase()}`}
            className="hover:text-gray-200 transition duration-200"
          >
            {label}
          </Link>
        ))}
        <Link
          href="/carrinho"
          className="hover:text-gray-200 transition duration-200 flex items-center gap-1 relative"
        >
          Carrinho <IoCart size={20} />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </Link>
      </nav>

      {/* Botão Mobile */}
      <div className="md:hidden flex items-center gap-4">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white focus:outline-none"
          aria-label="Abrir menu"
        >
          {isMobileMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
        </button>

        <Link href="/carrinho" className="relative text-white">
          <IoCart size={24} />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>

      {/* Dropdown Mobile */}
      <nav
        className={`absolute top-full right-4 bg-white text-black rounded-lg shadow-md p-4 w-48 z-20 transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        <ul className="space-y-3">
          {['Início', 'Cervejas', 'Refrigerantes', 'Água', 'Energético', 'Destilados', 'Outros'].map((label) => (
            <li key={label}>
              <Link
                href={label === 'Início' ? '/' : `/categoria/${label.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block hover:text-red-700"
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/carrinho"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block hover:text-red-700"
            >
              Carrinho
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

