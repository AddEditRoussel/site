import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  isVisible: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              rotate: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut"
              }
            }}
            exit={{ 
              scale: 0.5, 
              opacity: 0,
              rotate: 10,
              transition: {
                duration: 0.4,
                ease: "easeIn"
              }
            }}
          >
            <motion.img
              src="https://lh3.googleusercontent.com/pw/AP1GczOlHFdeN_aerKk-cejKYzC8_fstVgZc3iYpxwBF4FI0z-ohAz22BfIdgckrSa9jTQem3RKlG_3-qVJCGvO-gtxCVtCDFV_rF-e4yBg5u_h0xENy-xEaltellr4X4RWfYVnQef2cUysA65ZmKyxIEN9K=w840-h700-s-no-gm"
              alt="ADD EDIT"
              className="w-64 h-auto"
              animate={{
                scale: [1, 1.05, 1],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;