'use client';

import { useCart } from '@/context/CartContext';

export default function CartContainer() {
  const { cartItems, clearCart, getTotalPrice } = useCart();

  if (!cartItems.length) {
    return <p className="p-4 text-center text-gray-600">Seu carrinho está vazio.</p>;
  }

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Seu Carrinho</h2>

      <ul className="divide-y divide-gray-200 mb-4">
        {cartItems.map(({ product, quantity }) => (
          <li key={product.id} className="flex justify-between items-center py-2">
            <div>
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.description || 'Descrição não disponível'}</p>
              <p className="text-sm text-gray-600">Qtd: {quantity}</p>
            </div>
            <span className="font-semibold text-green-600">
              R$ {(product.price * quantity).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center mb-4">
        <span className="font-bold text-lg">Total:</span>
        <span className="font-bold text-lg text-green-700">R$ {getTotalPrice().toFixed(2)}</span>
      </div>

      <button
        onClick={clearCart}
        className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
        aria-label="Limpar carrinho"
      >
        Limpar Carrinho
      </button>
    </div>
  );
}
