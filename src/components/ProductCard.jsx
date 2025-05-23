// src/components/ProductCard.jsx
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    // Adicionar o produto com a quantidade selecionada
    addToCart(product, quantity); // Envia o produto e a quantidade
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 w-75">
      {/* Conteúdo Principal */}
      <div className="flex flex-col md:flex-row items-center p-4">
        {/* Informações do Produto (à esquerda) */}
        <div className="md:w-2/3">
          <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-lg font-semibold text-yellow-600">R$ {product.price.toFixed(2)}</p>
        </div>

        {/* Imagem do Produto (à direita) */}
        <div className="md:w-1/3 md:ml-4">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              width={112}
              height={225}
              className="rounded-lg"
            />
          ) : (
            <div className="w-full h-56 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Imagem não disponível</span>
            </div>
          )}
        </div>
      </div>

      {/* Controle de Quantidade */}
      <div className="flex items-center justify-between p-4 border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <button
            onClick={handleDecrement}
            className="bg-gray-200 py-1 px-2 rounded-l focus:outline-none"
          >
            -
          </button>
          <span className="font-semibold">{quantity}</span>
          <button
            onClick={handleIncrement}
            className="bg-gray-200 py-1 px-2 rounded-r focus:outline-none"
          >
            +
          </button>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => setQuantity(prev => prev + 6)}
            className="bg-gray-200 py-1 px-2 rounded focus:outline-none"
          >
            + 6
          </button>
          <button
            onClick={() => setQuantity(prev => prev + 12)}
            className="bg-gray-200 py-1 px-2 rounded focus:outline-none"
          >
            + 12
          </button>
        </div>
      </div>

      {/* Botão Adicionar ao Carrinho */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handleAddToCart}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded"
        >
          Adicionar ({quantity}) · R$ {(product.price * quantity).toFixed(2)}
        </button>
      </div>
    </div>
  );
}
