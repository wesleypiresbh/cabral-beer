'use client';

import Link from 'next/link';
import categories from '../data/categories.json';
import Button from '@/components/Button';

export default function Home() {
  return (
    <main className="min-h-screen p-4 bg-gray-100">
      {/* Frase de Boas-Vindas */}
      <section className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Bem-vindo ao Cabral Beer 🍻</h1>
        <p className="text-lg text-gray-600">As melhores bebidas, na sua casa, rapidinho!</p>
      </section>

      {/* Lista de Categorias */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/categoria/${category.slug}`}
            className="block bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold">{category.name}</h2>
            <p className="text-gray-500 mt-2">{category.description}</p>
          </Link>
        ))}
      </section>

      {/* Exemplo de Botões */}
      <section className="space-x-4">
        <Button onClick={() => alert('Clicou!')}>Clique aqui</Button>
        <Button variant="secondary">Secundário</Button>
        <Button variant="danger">Perigo</Button>
      </section>
    </main>
  );
}

