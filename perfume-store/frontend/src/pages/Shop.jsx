import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { dummyPerfumes } from '../services/productService';

const categories = ['All', 'Eau de Parfum', 'Eau de Toilette', 'Cologne', 'Attar'];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [products, setProducts] = useState(dummyPerfumes);
  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    let filtered = dummyPerfumes;
    if (activeCategory !== 'All') {
      filtered = dummyPerfumes.filter(p => p.category === activeCategory);
    }

    let sorted = [...filtered];
    if (sortBy === 'price-low') sorted.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') sorted.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') sorted.sort((a, b) => b.rating - a.rating);

    setProducts(sorted);
  }, [activeCategory, sortBy]);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display text-white mb-4">Our Collection</h1>
          <div className="w-16 h-0.5 bg-gold mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm uppercase tracking-wider transition-colors ${
                  activeCategory === cat 
                  ? 'bg-gold text-dark' 
                  : 'text-gray-400 border border-gray-800 hover:border-gold hover:text-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-sm uppercase">Sort by:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-dark-secondary text-white border border-gray-700 px-4 py-2 text-sm focus:outline-none focus:border-gold"
            >
              <option value="newest">Newest Arrivals</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {products.map(product => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {products.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No products found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
