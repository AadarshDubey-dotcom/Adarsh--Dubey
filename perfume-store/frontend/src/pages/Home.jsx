import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import { dummyPerfumes } from '../services/productService';
import { FiCheckCircle, FiTruck, FiStar } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Featured Collection */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display text-white mb-4">Featured Collection</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">Discover our most sought-after fragrances, carefully curated for the connoisseur of fine scents.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dummyPerfumes.map((perfume, index) => (
              <motion.div
                key={perfume.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <ProductCard product={perfume} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#0d0d0d] border-y border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <FiCheckCircle size={32} />, title: '100% Authentic', desc: 'Guaranteed genuine products sourced directly from brands.' },
              { icon: <FiTruck size={32} />, title: 'Free Shipping', desc: 'Complimentary shipping on all orders over ₹3000.' },
              { icon: <FiStar size={32} />, title: 'Premium Quality', desc: 'Uncompromising quality and exquisite craftsmanship.' }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="text-center p-6"
              >
                <div className="text-gold mb-6 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-display text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Banner */}
      <section className="relative py-32 bg-fixed bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80')]">
        <div className="absolute inset-0 bg-dark/80 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold text-6xl font-display mb-6">"</p>
            <h2 className="text-3xl md:text-5xl font-display text-white leading-tight mb-8">
              Perfume is the unseen, unforgettable, ultimate accessory of fashion that heralds your arrival and prolongs your departure.
            </h2>
            <p className="text-gray-400 uppercase tracking-widest text-sm">— Coco Chanel</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
