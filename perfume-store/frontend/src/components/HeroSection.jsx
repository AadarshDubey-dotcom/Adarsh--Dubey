import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PerfumeBottle = () => {
  const group = useRef();

  useFrame((state) => {
    group.current.rotation.y = state.clock.elapsedTime * 0.5;
  });

  return (
    <group ref={group} position={[0, -1, 0]}>
      {/* Base */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.9, 0.9, 0.15, 32]} />
        <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Body */}
      <mesh position={[0, 1.325, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 2.5, 32]} />
        <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Neck */}
      <mesh position={[0, 2.975, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.8, 32]} />
        <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Cap */}
      <mesh position={[0, 3.625, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.5, 32]} />
        <meshStandardMaterial color="#b8860b" metalness={1} roughness={0.05} />
      </mesh>
    </group>
  );
};

const HeroSection = () => {
  return (
    <section className="h-screen relative flex items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-dark-secondary via-dark to-dark overflow-hidden">
      
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-20">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
          className="space-y-6"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold text-sm tracking-[0.3em] uppercase"
          >
            — Exclusive Collection
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display text-white leading-tight"
          >
            Discover Your<br />Signature Scent
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-400 text-lg max-w-md leading-relaxed"
          >
            Immerse yourself in a world of luxury fragrances. Each drop tells a story of elegance, passion, and unparalleled craftsmanship.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link to="/shop" className="bg-gold text-dark px-8 py-3 font-medium uppercase tracking-widest hover:bg-gold-light transition-colors">
              Shop Now
            </Link>
            <Link to="/shop?category=collections" className="border border-gold text-gold px-8 py-3 font-medium uppercase tracking-widest hover:bg-gold hover:text-dark transition-colors">
              Explore
            </Link>
          </motion.div>
        </motion.div>

        <div className="h-[60vh] md:h-[80vh] w-full relative">
          <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
            <ambientLight intensity={0.3} />
            <pointLight position={[5, 5, 5]} intensity={2} color="#f5e6a3" />
            <pointLight position={[-5, 3, -5]} intensity={1} color="#ffffff" />
            <PerfumeBottle />
            <Environment preset="city" />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
