// src/app/carrinho/page.js
'use client';

import { useCart } from '../../context/CartContext';
import Link from 'next/link';

export default function CartPage() {
  const { cartItems, clearCart, getTotalPrice } = useCart();

  return (
    <main className="min-h-screen p-4 bg-gray-100">
      <section className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Carrinho de Compras</h1>
      </section>

      {/* Único Box para Todos os Itens do Carrinho */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <ul className="space-y-4">
          {cartItems.length > 0 ? (
            cartItems.map(({ product, quantity }, index) => (
              <li key={index} className="flex justify-between">
                <div>
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <p className="text-gray-600">Quantidade: {quantity}</p>
                </div>
                <p className="text-lg font-semibold">Subtotal: R$ {(product.price * quantity).toFixed(2)}</p>
              </li>
            ))
          ) : (
            <p className="text-gray-600 col-span-full text-center">
              Nenhum produto no carrinho.
            </p>
          )}
        </ul>
      </div>

      {/* Resumo do Carrinho */}
      <div className="mt-8 text-center">
        <p className="text-lg font-semibold">Total: R$ {getTotalPrice().toFixed(2)}</p>
        <div className="flex justify-between mt-4">
          <button
            onClick={clearCart}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Esvaziar Carrinho
          </button>
          <Link href="/finalizar">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Finalizar Pedido
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
