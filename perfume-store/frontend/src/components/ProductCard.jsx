import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <motion.div 
      whileHover={{ scale: 1.03, y: -5 }}
      className="bg-[#121212] rounded-sm overflow-hidden border border-gray-800 hover:border-gold/50 transition-colors group"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="h-64 bg-gradient-to-tr from-dark-secondary to-dark flex items-center justify-center relative overflow-hidden">
          <div className="text-6xl group-hover:scale-110 transition-transform duration-500">✨</div>
        </div>
        
        <div className="p-6 text-center">
          <p className="text-gold text-xs uppercase tracking-[0.2em] mb-2">{product.brand}</p>
          <h3 className="text-white font-display text-xl mb-1">{product.name}</h3>
          <p className="text-gray-500 text-sm mb-4">{product.size_ml} ml | {product.category}</p>
          
          <div className="flex justify-center mb-4 text-gold text-sm">
            {'★'.repeat(Math.floor(product.rating))}
            <span className="text-gray-600">{'★'.repeat(5 - Math.floor(product.rating))}</span>
          </div>
          
          <p className="text-xl font-medium text-white mb-6">₹{product.price.toLocaleString()}</p>
          
          <button 
            onClick={handleAdd}
            className="w-full py-3 border border-gold text-gold uppercase text-sm tracking-widest hover:bg-gold hover:text-dark transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
