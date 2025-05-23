import CartItem from './CartItem';

export default function CartView({ items }) {
  if (!items || items.length === 0) {
    return <p className="text-gray-500">Seu carrinho está vazio.</p>;
  }

  return (
    <ul className="space-y-4">
      {items.map(item => (
        <CartItem key={item.product.id} item={item} />
      ))}
    </ul>
  );
}

