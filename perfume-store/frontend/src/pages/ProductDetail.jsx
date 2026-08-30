import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { dummyPerfumes } from '../services/productService';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    const found = dummyPerfumes.find(p => p.id === String(id)) || dummyPerfumes[0];
    setProduct(found);
  }, [id]);

  if (!product) return <div className="min-h-screen bg-dark pt-24 text-center text-white">Loading...</div>;

  const handleAdd = () => {
    addToCart(product, qty);
    toast.success(`${qty}x ${product.name} added to cart`);
  };

  return (
    <div className="min-h-screen bg-dark pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8 uppercase tracking-widest">
          <Link to="/" className="hover:text-gold">Home</Link> <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold">Shop</Link> <span className="mx-2">/</span>
          <span className="text-gold">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-[4/5] bg-gradient-to-tr from-dark-secondary to-[#1a1a1a] flex items-center justify-center relative rounded-sm border border-gray-800"
          >
            <div className="text-9xl filter drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]">✨</div>
          </motion.div>

          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-2">{product.brand}</p>
            <h1 className="text-4xl md:text-5xl font-display text-white mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="text-gold text-lg">
                {'★'.repeat(Math.floor(product.rating))}
                <span className="text-gray-600">{'★'.repeat(5 - Math.floor(product.rating))}</span>
              </div>
              <span className="text-gray-500 text-sm underline cursor-pointer hover:text-white">42 Reviews</span>
            </div>

            <p className="text-3xl text-white mb-8">₹{product.price.toLocaleString()}</p>

            <p className="text-gray-400 leading-relaxed mb-8">{product.description}</p>

            <div className="mb-8">
              <p className="text-white text-sm uppercase tracking-widest mb-4">Size</p>
              <div className="flex gap-4">
                {['30ml', '50ml', '75ml', '100ml'].map(size => (
                  <button 
                    key={size}
                    className={`px-4 py-2 border ${product.size_ml + 'ml' === size ? 'border-gold text-gold bg-gold/5' : 'border-gray-700 text-gray-400 hover:border-gray-400'} transition-colors`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-6 mb-8">
              <div className="flex items-center border border-gray-700">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-3 text-gray-400 hover:text-gold">-</button>
                <span className="w-12 text-center text-white">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-4 py-3 text-gray-400 hover:text-gold">+</button>
              </div>
              
              <button 
                onClick={handleAdd}
                className="flex-1 bg-gold text-dark font-medium uppercase tracking-widest hover:bg-gold-light transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="border-t border-gray-800 pt-12">
          <div className="flex justify-center gap-12 mb-8">
            {['description', 'ingredients', 'reviews'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm uppercase tracking-widest pb-2 border-b-2 transition-colors ${activeTab === tab ? 'border-gold text-gold' : 'border-transparent text-gray-500 hover:text-white'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-gray-400 text-center leading-relaxed"
          >
            {activeTab === 'description' && <p>{product.description} A true masterpiece in modern perfumery.</p>}
            {activeTab === 'ingredients' && <p>Alcohol Denat., Parfum (Fragrance), Aqua (Water), Linalool, Limonene, Geraniol, Citronellol. 100% Vegan & Cruelty-Free.</p>}
            {activeTab === 'reviews' && <p>Customer reviews coming soon. Be the first to leave a review!</p>}
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
