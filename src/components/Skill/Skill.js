import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import './Skill.css'
import ScrollFloat from "../ScrollFloat/ScrollFloat";
import LogoLoop from '../LogoLoop/LogoLoop';

const Skill = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section 
      id="skills" 
      className="skills"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <ScrollFloat>Teach Skill</ScrollFloat>
      <LogoLoop />
    </motion.section>
  )
}

export default Skill