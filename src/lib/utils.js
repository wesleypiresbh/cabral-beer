export const getCategoryProducts = async (slug) => {
  try {
    // Garantir consistência entre slug e nome do arquivo
    const formattedSlug = slug === 'energetico' ? 'energeticos' : slug;

    const response = await fetch(`/data/products_${formattedSlug}.json`);

    if (!response.ok) {
      throw new Error(`Erro ao carregar produtos da categoria ${formattedSlug}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao carregar produtos:', error);
    return [];
  }
};

