// src/components/CartView.js
import { useCart } from '../context/CartContext';

export default function CartView() {
  const { cartItems } = useCart();

  if (cartItems.length === 0) {
    return <p>Seu carrinho está vazio.</p>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Seu Carrinho</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="mb-2 p-2 border-b border-gray-200">
            <span className="font-medium">{item.name}</span> - R$ {item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p className="font-semibold mt-4">Total: R$ {cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</p>
    </div>
  );
}
