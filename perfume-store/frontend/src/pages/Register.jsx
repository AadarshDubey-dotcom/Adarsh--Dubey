import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    toast.success('Account created successfully!');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4 py-24">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg bg-[#121212] border border-gray-800 p-8 sm:p-10 rounded-sm"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl font-display text-white mb-2">Create Account</h1>
          <p className="text-gray-500 text-sm">Join our exclusive club for premium fragrances.</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">First Name</label>
              <input required className="w-full bg-dark border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
              <input required className="w-full bg-dark border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
            <input type="email" required className="w-full bg-dark border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Phone</label>
            <input type="tel" required className="w-full bg-dark border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Password</label>
              <input type="password" required className="w-full bg-dark border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Confirm</label>
              <input type="password" required className="w-full bg-dark border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
            </div>
          </div>

          <button type="submit" className="w-full bg-gold text-dark py-4 uppercase tracking-widest font-medium hover:bg-gold-light transition-colors mt-4">
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-8">
          Already have an account? <Link to="/login" className="text-gold hover:underline">Sign In</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
