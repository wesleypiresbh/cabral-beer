'use client';

import { useParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { getCategoryProducts } from '@/lib/utils';

export default function CategoriaPage() {
  const params = useParams();
  const slug = params.slug;

  const [categoryProducts, setCategoryProducts] = useState([]);
  const [category, setCategory] = useState(null);

  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('default');

  // Carregar categoria e produtos quando slug mudar
  useEffect(() => {
    let isMounted = true;

    const fetchCategoryData = async () => {
      try {
        const categoriesResponse = await fetch('/data/categories.json');
        if (!categoriesResponse.ok) {
          throw new Error('Falha ao carregar categorias.');
        }

        const categoriesJson = await categoriesResponse.json();

        if (!Array.isArray(categoriesJson)) {
          console.error('categories.json deve ser um array.');
          return;
        }

        const categoryFound = categoriesJson.find(c => c.slug === slug);
        if (isMounted) setCategory(categoryFound || null);

        const products = await getCategoryProducts(slug);
        if (isMounted) setCategoryProducts(products);
      } catch (error) {
        console.error('Erro ao carregar dados da categoria:', error);
      }
    };

    fetchCategoryData();

    // Cleanup para evitar atualizações após desmontar componente
    return () => {
      isMounted = false;
    };
  }, [slug]);

  const filteredProducts = categoryProducts.filter((product) => {
    if (filter === 'all') return true;
    return product.type?.toLowerCase() === filter.toLowerCase();
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === 'price_asc') return a.price - b.price;
    if (sort === 'price_desc') return b.price - a.price;
    return 0;
  });

  return (
    <main className="min-h-screen p-4 bg-gray-100">
      <section className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
          {category?.name || 'Categoria'}
        </h1>
        <p className="text-lg text-gray-600">{category?.description}</p>
        {category?.image && (
          <div className="mt-4 rounded-lg overflow-hidden shadow-lg max-w-md mx-auto">
            <Image
              src={category.image}
              alt={category.name}
              width={600}
              height={300}
              className="rounded-lg"
            />
          </div>
        )}
      </section>

      {/* Filtros e Ordenação */}
      <section className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex gap-2">
          <label htmlFor="filter">Filtrar por tipo:</label>
          <select
            id="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value="all">Todos</option>
            <option value="vodka">Vodka</option>
            <option value="cachaça">Cachaça</option>
            <option value="conhaque">Conhaque</option>
            <option value="whisky">Whisky</option>
            <option value="gin">Gin</option>
            <option value="pilsen">Pilsen</option>
            <option value="ale">Ale</option>
            <option value="stout">Stout</option>
            <option value="lager">Lager</option>
            <option value="cola">Cola</option>
            <option value="laranja">Laranja</option>
            <option value="guaraná">Guaraná</option>
            <option value="pepsi">Pepsi</option>
            <option value="limão-lima">Limão-Lima</option>
            <option value="uva">Uva</option>
            <option value="snack">Snack</option>
            <option value="bala">Bala</option>
            <option value="chocolate">Chocolate</option>
            <option value="doce">Doce</option>
            <option value="recheado">Recheado</option>
            <option value="salgadinho">Salgadinho</option>
          </select>
        </div>

        <div className="flex gap-2">
          <label htmlFor="sort">Ordenar por:</label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value="default">Padrão</option>
            <option value="price_asc">Preço: Menor → Maior</option>
            <option value="price_desc">Preço: Maior → Menor</option>
          </select>
        </div>
      </section>

      {/* Grid de Produtos */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-gray-600 col-span-full text-center">
            Nenhum produto encontrado nesta categoria.
          </p>
        )}
      </section>

      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Voltar ao Início
        </Link>
      </div>
    </main>
  );
}

