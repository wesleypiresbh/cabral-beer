'use client';

import { useParams } from 'next/navigation';
import products from '../../../data/products.json';
import ProductCard from '../../../components/ProductCard';
import { useCart } from '../../../context/CartContext';

const ProdutoPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();

  if (!product) return <p>Produto não encontrado</p>;

  return (
    <div className="max-w-md mx-auto p-4">
      <ProductCard product={product} onAddToCart={addToCart} />
    </div>
  );
};

export default ProdutoPage;

