import { motion } from 'framer-motion';
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex flex-col sm:flex-row items-center gap-6 p-4 border-b border-gray-800 bg-[#121212] rounded-sm mb-4"
    >
      <div className="w-24 h-24 bg-gradient-to-br from-dark to-dark-secondary flex items-center justify-center shrink-0">
        <span className="text-3xl">✨</span>
      </div>
      
      <div className="flex-1 text-center sm:text-left">
        <p className="text-gold text-xs uppercase tracking-widest mb-1">{item.brand}</p>
        <h4 className="text-white font-display text-lg">{item.name}</h4>
        <p className="text-gray-500 text-sm">{item.size_ml} ml</p>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center border border-gray-700 rounded-sm">
          <button 
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="p-2 text-gray-400 hover:text-gold transition-colors"
          >
            <FiMinus size={16} />
          </button>
          <span className="w-8 text-center text-white text-sm">{item.quantity}</span>
          <button 
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="p-2 text-gray-400 hover:text-gold transition-colors"
          >
            <FiPlus size={16} />
          </button>
        </div>
      </div>
      
      <div className="text-right w-24">
        <p className="text-gold font-medium">₹{(item.price * item.quantity).toLocaleString()}</p>
      </div>
      
      <button 
        onClick={() => removeFromCart(item.id)}
        className="p-2 text-gray-500 hover:text-red-500 transition-colors"
        title="Remove"
      >
        <FiTrash2 size={20} />
      </button>
    </motion.div>
  );
};

export default CartItem;
