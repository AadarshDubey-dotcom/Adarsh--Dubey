import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FiCheckCircle, FiCreditCard } from 'react-icons/fi';
import { toast } from 'react-hot-toast';

const Checkout = () => {
  const [step, setStep] = useState(1);
  const { clearCart } = useCart();
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setStep(3);
    setTimeout(() => {
      clearCart();
    }, 1000);
  };

  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 50 : -50, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 50 : -50, opacity: 0 })
  };

  return (
    <div className="min-h-screen bg-dark pt-24 pb-20 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Steps Indicator */}
        <div className="flex justify-between items-center mb-12 relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-gray-800 z-0"></div>
          {[1, 2, 3].map((num) => (
            <div key={num} className="relative z-10 flex flex-col items-center bg-dark px-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2 transition-colors ${step >= num ? 'border-gold bg-gold text-dark' : 'border-gray-700 text-gray-500 bg-dark'}`}>
                {step > num ? <FiCheckCircle /> : num}
              </div>
              <span className={`text-xs mt-2 uppercase tracking-widest ${step >= num ? 'text-gold' : 'text-gray-500'}`}>
                {num === 1 ? 'Shipping' : num === 2 ? 'Payment' : 'Complete'}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-[#121212] border border-gray-800 p-8 rounded-sm relative min-h-[400px]">
          <AnimatePresence mode="wait" custom={1}>
            
            {step === 1 && (
              <motion.form 
                key="step1"
                custom={1}
                variants={slideVariants}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.3 }}
                onSubmit={handleNext}
                className="space-y-6"
              >
                <h2 className="text-2xl font-display text-white mb-6">Shipping Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input required placeholder="First Name" className="w-full bg-dark border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-gold" />
                  <input required placeholder="Last Name" className="w-full bg-dark border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-gold" />
                </div>
                <input required type="email" placeholder="Email Address" className="w-full bg-dark border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-gold" />
                <input required placeholder="Street Address" className="w-full bg-dark border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-gold" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <input required placeholder="City" className="w-full bg-dark border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-gold" />
                  <input required placeholder="State" className="w-full bg-dark border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-gold" />
                  <input required placeholder="PIN Code" className="w-full bg-dark border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-gold" />
                </div>
                <button type="submit" className="w-full bg-gold text-dark py-4 uppercase tracking-widest font-medium hover:bg-gold-light transition-colors mt-8">
                  Continue to Payment
                </button>
              </motion.form>
            )}

            {step === 2 && (
              <motion.form 
                key="step2"
                custom={1}
                variants={slideVariants}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.3 }}
                onSubmit={handlePlaceOrder}
                className="space-y-6"
              >
                <h2 className="text-2xl font-display text-white mb-6 flex items-center gap-3"><FiCreditCard /> Payment Details</h2>
                
                <div className="border border-gold p-4 mb-6 bg-gold/5">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="payment" defaultChecked className="accent-gold" />
                    <span className="text-white">Credit / Debit Card</span>
                  </label>
                  <div className="mt-4 space-y-4">
                    <input required placeholder="Card Number" className="w-full bg-dark border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-gold" />
                    <div className="grid grid-cols-2 gap-6">
                      <input required placeholder="MM/YY" className="w-full bg-dark border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-gold" />
                      <input required placeholder="CVV" type="password" maxLength={3} className="w-full bg-dark border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-gold" />
                    </div>
                  </div>
                </div>

                <div className="border border-gray-700 p-4 mb-6 hover:border-gray-500 transition-colors">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="payment" className="accent-gold" />
                    <span className="text-gray-300">UPI (GPay, PhonePe)</span>
                  </label>
                </div>

                <div className="border border-gray-700 p-4 mb-6 hover:border-gray-500 transition-colors">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="payment" className="accent-gold" />
                    <span className="text-gray-300">Cash on Delivery</span>
                  </label>
                </div>

                <div className="flex gap-4">
                  <button type="button" onClick={() => setStep(1)} className="w-1/3 border border-gray-600 text-gray-300 py-4 uppercase tracking-widest font-medium hover:text-white transition-colors">
                    Back
                  </button>
                  <button type="submit" className="w-2/3 bg-gold text-dark py-4 uppercase tracking-widest font-medium hover:bg-gold-light transition-colors">
                    Place Order
                  </button>
                </div>
              </motion.form>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                custom={1}
                variants={slideVariants}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.3 }}
                className="text-center py-12"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="text-gold text-6xl flex justify-center mb-6"
                >
                  <FiCheckCircle />
                </motion.div>
                <h2 className="text-3xl font-display text-white mb-2">Order Confirmed</h2>
                <p className="text-gray-400 mb-8">Thank you for your purchase. Your order number is <span className="text-white font-medium">#LX-{Math.floor(Math.random() * 100000)}</span></p>
                <button 
                  onClick={() => navigate('/')}
                  className="border border-gold text-gold px-8 py-3 uppercase tracking-widest font-medium hover:bg-gold hover:text-dark transition-colors"
                >
                  Return to Home
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
