import { FaInstagram, FaTwitter, FaFacebookF, FaPinterestP } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] pt-16 pb-8 border-t border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-display font-bold text-gold tracking-widest block">
              ✦ LUXE
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Discover the world's most exquisite fragrances. Crafted for elegance, designed for you.
            </p>
          </div>

          <div>
            <h4 className="text-white font-display text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/shop" className="hover:text-gold transition-colors">Shop All</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link to="/locations" className="hover:text-gold transition-colors">Boutiques</Link></li>
              <li><Link to="/journal" className="hover:text-gold transition-colors">The Journal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display text-lg mb-4">Customer Care</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="hover:text-gold transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/faq" className="hover:text-gold transition-colors">FAQs</Link></li>
              <li><Link to="/track" className="hover:text-gold transition-colors">Track Order</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display text-lg mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex" onSubmit={e => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-dark border border-gray-800 text-white px-4 py-2 w-full focus:outline-none focus:border-gold text-sm"
              />
              <button type="submit" className="bg-gold text-dark px-4 py-2 font-medium hover:bg-gold-light transition-colors">
                SUBSCRIBE
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Luxe Parfum. All rights reserved.
          </p>
          <div className="flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-gold transition-colors"><FaInstagram size={18} /></a>
            <a href="#" className="hover:text-gold transition-colors"><FaFacebookF size={18} /></a>
            <a href="#" className="hover:text-gold transition-colors"><FaTwitter size={18} /></a>
            <a href="#" className="hover:text-gold transition-colors"><FaPinterestP size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
