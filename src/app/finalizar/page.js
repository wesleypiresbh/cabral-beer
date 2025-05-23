'use client';

import { useCart } from '../../context/CartContext';
import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';

export default function FinalizarPedidoPage() {
  const { cartItems, clearCart } = useCart();
  const [copied, setCopied] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const pixCode = '00020126360014BR.GOV.BCB.PIX0114+5511999999995204000053039865406100.005802BR5925Cabral Beer Delivery6009SAO PAULO62070503***6304ABCD';

  const copyPixCode = () => {
    navigator.clipboard.writeText(pixCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const whatsappMessage = encodeURIComponent(
    `Olá, quero finalizar o pedido:\n\n${cartItems
      .map(item => `${item.product.name} - ${item.quantity}x R$ ${(item.product.price * item.quantity).toFixed(2)}`)
      .join('\n')}\n\nTotal: R$ ${total.toFixed(2)}`
  );

  const whatsappLink = `https://wa.me/5511999999999?text=${whatsappMessage}`;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Resumo do Pedido</h1>

      <ul className="space-y-4">
        {cartItems.map(item => (
          <li key={item.product.id} className="flex justify-between">
            <div>
              {item.product.name} ({item.quantity}x)
            </div>
            <div className="text-right">
              R$ {(item.product.price * item.quantity).toFixed(2)}
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 text-right font-bold">
        Total: R$ {total.toFixed(2)}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold text-center text-red-600 mb-2">
          Pague com QRCode e envie o Comprovante.
        </h2>

        <div className="flex flex-col items-center space-y-2">
          <QRCodeSVG value={pixCode} size={150} />
          <button
            onClick={copyPixCode}
            className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-3 rounded"
          >
            {copied ? 'Código Copiado!' : 'Copiar Código Pix'}
          </button>
        </div>
      </div>

      <div className="mt-6">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          onClick={() => {
            setTimeout(() => clearCart(), 5000); // opcional: limpa o carrinho depois de 5s
          }}
        >
          Enviar pelo WhatsApp
        </a>
      </div>
    </div>
  );
}

