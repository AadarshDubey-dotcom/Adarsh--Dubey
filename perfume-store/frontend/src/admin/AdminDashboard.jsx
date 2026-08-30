import { motion } from 'framer-motion';
import { FiBox, FiShoppingBag, FiDollarSign, FiUsers } from 'react-icons/fi';

const AdminDashboard = () => {
  const stats = [
    { title: 'Total Products', value: '124', icon: <FiBox size={24} /> },
    { title: 'Total Orders', value: '856', icon: <FiShoppingBag size={24} /> },
    { title: 'Revenue', value: '₹12.4M', icon: <FiDollarSign size={24} /> },
    { title: 'Active Users', value: '2,451', icon: <FiUsers size={24} /> }
  ];

  return (
    <div className="min-h-screen bg-dark pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 flex justify-between items-end border-b border-gray-800 pb-6">
          <div>
            <h1 className="text-3xl font-display text-white mb-2">Admin Dashboard</h1>
            <p className="text-gray-500 text-sm">Overview of store performance</p>
          </div>
          <button className="bg-gold text-dark px-6 py-2 uppercase tracking-widest text-xs font-medium hover:bg-gold-light transition-colors">
            Add Product
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <motion.div 
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#121212] border border-gray-800 p-6 rounded-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <p className="text-gray-500 text-sm uppercase tracking-wider">{stat.title}</p>
                <div className="text-gold">{stat.icon}</div>
              </div>
              <h3 className="text-3xl font-display text-white">{stat.value}</h3>
            </motion.div>
          ))}
        </div>

        <div className="bg-[#121212] border border-gray-800 rounded-sm p-20 text-center">
          <div className="text-6xl mb-6">🚧</div>
          <h2 className="text-2xl font-display text-white mb-4">Under Development</h2>
          <p className="text-gray-500 max-w-md mx-auto">
            The full admin panel with product management, order tracking, and analytics is currently being built.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
