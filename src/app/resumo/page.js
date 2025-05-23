// src/app/resumo/page.js
'use client';

import { useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { useRouter } from 'next/navigation';
import { QRCodeCanvas } from 'qrcode.react';

export default function ResumoPage() {
  const { cartItems, clearCart } = useCart();
  const router = useRouter();

  // Se não houver itens, volta à home
  useEffect(() => {
    if (cartItems.length === 0) router.push('/');
  }, [cartItems, router]);

  // Agrupa produtos repetidos
  const groupedItems = cartItems.reduce((acc, item) => {
    const found = acc.find(i => i.id === item.id);
    if (found) {
      found.quantity++;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  // Total geral
  const totalPrice = groupedItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Monta mensagem e link WhatsApp
  const message = `Olá, gostaria de finalizar meu pedido:\n\n` +
    groupedItems
      .map((item, idx) =>
        `${idx + 1}. ${item.name} x${item.quantity} - R$ ${(item.price * item.quantity).toFixed(2)}`
      )
      .join('\n') +
    `\n\nTotal: R$ ${totalPrice.toFixed(2)}`;

  const whatsappLink = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;

  function handleEnviarWhatsapp() {
    window.open(whatsappLink, '_blank');
    clearCart();
    router.push('/');
  }

  // Payload Pix (exemplo, ajuste conforme necessário)
  const pixPayload = `00020126360014BR.GOV.BCB.PIX0136...`; // seu payload real
  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Resumo do Pedido</h1>

      <ul className="mb-4 max-h-48 overflow-y-auto">
        {groupedItems.map((item, idx) => (
          <li
            key={item.id}
            className="flex justify-between py-2 border-b"
          >
            <span>
              {idx + 1}. {item.name} x{item.quantity}
            </span>
            <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>

      <p className="font-semibold text-lg text-right mb-4">
        Total: R$ {totalPrice.toFixed(2)}
      </p>

      <div className="flex justify-center mb-6">
        <QRCodeCanvas value={pixPayload} size={180} />
      </div>

      <button
        onClick={handleEnviarWhatsapp}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg mb-4 transition"
      >
        Enviar Pedido via WhatsApp
      </button>
    </div>
  );
}

