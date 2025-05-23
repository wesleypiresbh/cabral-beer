// src/components/Header.js
'use client'; // ← Adicionado aqui!

import Link from 'next/link';
import Logo from './Logo';
import { IoCart, IoMenu, IoBeer } from 'react-icons/io5';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems } = useCart();

  return (
    <header style={{ padding: '5.6px' }} className="bg-gradient-to-t from-red-900 to-red-200 text-white shadow-md px-4 flex items-center justify-between">
      {/* Logotipo + Ícone */}
      <div className="flex items-center gap-2">
        <Logo />
        <IoBeer size={24} className="text-white" />
      </div>

      {/* Navegação Desktop */}
      <nav className="hidden md:flex space-x-6 font-medium">
        <Link href="/" className="hover:text-gray-200 transition duration-200">Início</Link>
        <Link href="/categoria/cervejas" className="hover:text-gray-200 transition duration-200">Cervejas</Link>
        <Link href="/categoria/refrigerantes" className="hover:text-gray-200 transition duration-200">Refrigerantes</Link>
        <Link href="/categoria/agua" className="hover:text-gray-200 transition duration-200">Água</Link>
        <Link href="/categoria/energetico" className="hover:text-gray-200 transition duration-200">Energético</Link>
        <Link href="/categoria/destilados" className="hover:text-gray-200 transition duration-200">Destilados</Link>
        <Link href="/categoria/outros" className="hover:text-gray-200 transition duration-200">Outros</Link>
        <Link href="/carrinho" className="hover:text-gray-200 transition duration-200 flex items-center gap-1 relative">
          Carrinho <IoCart size={20} />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </Link>
      </nav>

      {/* Botão Mobile Menu + Carrinho */}
      <div className="md:hidden flex items-center gap-4 relative">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white focus:outline-none"
        >
          <IoMenu size={24} />
        </button>
        <button className="text-white focus:outline-none relative">
          <IoCart size={24} />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </button>
      </div>

      {/* Dropdown Mobile */}
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-16 right-4 bg-white rounded-lg shadow-md p-4 w-48 z-10">
          <ul className="space-y-3">
            <li><Link href="/">Início</Link></li>
            <li><Link href="/categoria/cervejas">Cervejas</Link></li>
            <li><Link href="/categoria/refrigerantes">Refrigerantes</Link></li>
            <li><Link href="/categoria/agua">Água</Link></li>
            <li><Link href="/categoria/energetico">Energético</Link></li>
            <li><Link href="/categoria/destilados">Destilados</Link></li>
            <li><Link href="/categoria/outros">Outros</Link></li>
            <li><Link href="/carrinho">Carrinho</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

