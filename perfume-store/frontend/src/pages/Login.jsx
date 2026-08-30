import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    toast.success('Welcome back!');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4 pt-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-[#121212] border border-gray-800 p-8 sm:p-10 rounded-sm"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl font-display text-white mb-2">Welcome Back</h1>
          <p className="text-gray-500 text-sm">Enter your credentials to access your account.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
            <input 
              type="email" 
              required
              className="w-full bg-dark border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" 
            />
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs uppercase tracking-widest text-gray-500">Password</label>
              <a href="#" className="text-xs text-gold hover:underline">Forgot?</a>
            </div>
            <input 
              type="password" 
              required
              className="w-full bg-dark border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" 
            />
          </div>

          <button type="submit" className="w-full bg-gold text-dark py-4 uppercase tracking-widest font-medium hover:bg-gold-light transition-colors mt-4">
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-8">
          Don't have an account? <Link to="/register" className="text-gold hover:underline">Register here</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
