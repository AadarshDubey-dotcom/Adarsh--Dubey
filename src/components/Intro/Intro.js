import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import StarsBackground from "../StarsBackground";
import BlurText from "../BlurText";
import "./Intro.css";

const Intro = ({ onFinish }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);

      setTimeout(() => {
        onFinish();
      }, 1200);
    }, 3000); // ⏱️ shorter + better UX

    return () => clearTimeout(timer);
  }, [onFinish]);

  const textVariants = {
    initial: {
      opacity: 0,
      scale: 0.9,
      y: 40,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    float: {
      y: [-8, 8, -8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      y: -80,
      scale: 0.85,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="intro"
      initial={{ opacity: 0 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 1 }}
    >
      <StarsBackground />

      <motion.h1
        className="intro-text"
        variants={textVariants}
        initial="initial"
        animate={isExiting ? "exit" : ["animate", "float"]}
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <BlurText>Let's Build Something Amazing</BlurText>
      </motion.h1>
    </motion.div>
  );
};

export default Intro;