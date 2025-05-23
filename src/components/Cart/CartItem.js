export default function CartItem({ item }) {
  return (
    <li className="flex items-center justify-between border-b pb-2">
      <div>
        <h2 className="font-semibold">{item.product.name}</h2>
        <p className="text-sm text-gray-500">
          {item.product.description || 'Descrição não disponível'}
        </p>
        <p className="text-sm text-gray-700">Quantidade: {item.quantity}</p>
      </div>
      <span className="text-green-600 font-medium">
        R$ {(item.product.price * item.quantity).toFixed(2)}
      </span>
    </li>
  );
}

