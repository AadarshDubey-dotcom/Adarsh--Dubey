import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { FiShoppingBag } from 'react-icons/fi';

const Cart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.totalPrice;
  const shipping = subtotal > 3000 ? 0 : 250;
  const tax = subtotal * 0.18;
  const total = subtotal + shipping + tax;

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-dark pt-32 pb-20 flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="text-gray-700 mb-6 flex justify-center"><FiShoppingBag size={80} /></div>
          <h2 className="text-3xl font-display text-white mb-4">Your Cart is Empty</h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">Looks like you haven't added any fragrances to your cart yet.</p>
          <Link to="/shop" className="bg-gold text-dark px-8 py-3 uppercase tracking-widest font-medium hover:bg-gold-light transition-colors">
            Continue Shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-3xl md:text-4xl font-display text-white mb-10">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="flex-1">
            <div className="border-b border-gray-800 pb-4 mb-4 hidden sm:grid grid-cols-12 text-sm text-gray-500 uppercase tracking-wider">
              <div className="col-span-6">Product</div>
              <div className="col-span-3 text-center">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
              <div className="col-span-1"></div>
            </div>

            <AnimatePresence>
              {cart.items.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </AnimatePresence>
          </div>

          <div className="w-full lg:w-96">
            <div className="bg-[#121212] border border-gray-800 p-6 rounded-sm sticky top-28">
              <h3 className="text-xl font-display text-white mb-6 border-b border-gray-800 pb-4">Order Summary</h3>
              
              <div className="space-y-4 text-sm mb-6">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span className="text-white">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Shipping</span>
                  <span className="text-white">{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Estimated Tax (18%)</span>
                  <span className="text-white">₹{tax.toFixed(0)}</span>
                </div>
              </div>
              
              <div className="border-t border-gray-800 pt-4 mb-8 flex justify-between items-center">
                <span className="text-white font-medium uppercase tracking-widest">Total</span>
                <span className="text-2xl text-gold">₹{total.toFixed(0)}</span>
              </div>

              <button 
                onClick={() => navigate('/checkout')}
                className="w-full bg-gold text-dark py-4 uppercase tracking-widest font-medium hover:bg-gold-light transition-colors"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
