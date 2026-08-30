import { NavLink, Link } from 'react-router-dom';
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/shop?category=collections' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/80 backdrop-blur-md shadow-lg shadow-black/50' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-display font-bold text-gold tracking-widest">
              ✦ LUXE PARFUM
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path}
                className={({ isActive }) => `text-sm uppercase tracking-widest transition-colors ${isActive ? 'text-gold border-b border-gold' : 'text-gray-300 hover:text-gold'}`}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-6 text-gray-300">
            <button className="hover:text-gold transition-colors"><FiSearch size={20} /></button>
            <Link to="/login" className="hover:text-gold transition-colors"><FiUser size={20} /></Link>
            <Link to="/cart" className="relative hover:text-gold transition-colors">
              <FiShoppingCart size={20} />
              {cart.totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-dark text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {cart.totalItems}
                </span>
              )}
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gold">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-secondary border-t border-gray-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.name} 
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-gold hover:bg-dark"
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="flex space-x-6 px-3 py-4 text-gray-300 border-t border-gray-800 mt-2">
                <button className="hover:text-gold"><FiSearch size={20} /></button>
                <Link to="/login" onClick={() => setIsOpen(false)} className="hover:text-gold"><FiUser size={20} /></Link>
                <Link to="/cart" onClick={() => setIsOpen(false)} className="relative hover:text-gold flex items-center">
                  <FiShoppingCart size={20} />
                  <span className="ml-2">Cart ({cart.totalItems})</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
