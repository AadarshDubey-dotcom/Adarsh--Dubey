import axios from 'react'; // Dummy import

export const dummyPerfumes = [
  { id: '1', name: 'Midnight Oud', brand: 'Maison Noire', price: 4999, size_ml: 100, category: 'Eau de Parfum', rating: 4.8, description: 'An opulent blend of rare Arabian oud, smoky incense, and velvety amber. This masterpiece unfolds in layers of mystique, leaving a trail of pure luxury that lingers from dusk till dawn.', image_url: '/images/midnight-oud.jpg' },
  { id: '2', name: 'Rose Elixir', brand: 'Velvet Petals', price: 3499, size_ml: 75, category: 'Eau de Parfum', rating: 4.6, description: 'A romantic symphony of Bulgarian rose, dewy peony, and warm sandalwood. Each spray is a love letter written in petals, capturing the essence of a secret garden at sunrise.', image_url: '/images/rose-elixir.jpg' },
  { id: '3', name: 'Aqua Divino', brand: 'Azure Coast', price: 2999, size_ml: 50, category: 'Eau de Toilette', rating: 4.5, description: 'A refreshing cascade of Mediterranean bergamot, sea salt crystals, and driftwood. Like a plunge into crystal-clear waters along the Amalfi Coast on a sun-kissed morning.', image_url: '/images/aqua-divino.jpg' }
];

export const getAllProducts = async (params) => {
  // return dummy data for frontend layout
  return dummyPerfumes;
};

export const getProductById = async (id) => {
  return dummyPerfumes.find(p => p.id === String(id));
};

export const getProductsByCategory = async (category) => {
  if (!category || category === 'All') return dummyPerfumes;
  return dummyPerfumes.filter(p => p.category === category);
};
