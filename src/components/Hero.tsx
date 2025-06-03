import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  alignment?: 'left' | 'center' | 'right';
  variant?: 'fullscreen' | 'banner';
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  ctaText,
  ctaLink = '/portfolio',
  backgroundImage,
  alignment = 'center',
  variant = 'fullscreen'
}) => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  
  const containerClasses = variant === 'fullscreen' 
    ? "relative min-h-screen flex items-center justify-center overflow-hidden"
    : "relative py-24 flex items-center justify-center overflow-hidden";
  
  return (
    <motion.section 
      className={containerClasses}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {variant === 'fullscreen' ? (
        <div className="absolute inset-0 w-full h-full">
          <div className="video-container">
            <iframe 
              src="https://player.vimeo.com/video/1088328931?h=824a8c845c&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&controls=0" 
              allow="autoplay; fullscreen"
              className="absolute top-0 left-0 w-full h-full"
              style={{
                width: '100vw',
                height: '100vh',
                objectFit: 'cover'
              }}
            ></iframe>
          </div>
        </div>
      ) : (
        backgroundImage && (
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(34, 24, 32, 0.5), rgba(34, 24, 32, 0.5)), url(${backgroundImage})`,
              backgroundAttachment: 'fixed'
            }}
          />
        )
      )}
      
      <div className="container relative z-10 py-20">
        <div className={`max-w-3xl mx-auto text-${alignment} text-white`}>
          <motion.h1 
            className="font-next-art text-4xl md:text-5xl lg:text-7xl mb-6 leading-tight text-shadow-lg text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
          >
            {title}
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-white text-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
          >
            {subtitle}
          </motion.p>
          
          {variant === 'fullscreen' && (
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={ctaLink} className="btn btn-secondary w-full sm:w-auto text-center">
                  {isEnglish ? "View Our Work" : "Voir nos réalisations"}
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact" className="btn btn-outline border-white text-white hover:bg-white/20 hover:text-white hover:border-white w-full sm:w-auto text-center flex items-center justify-center">
                  {isEnglish ? "Contact Us" : "Nous contacter"}
                </Link>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
      
      {variant === 'fullscreen' && (
        <motion.div 
          className="absolute bottom-8 left-0 right-0 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        >
          <a 
            href="#featured-work" 
            className="text-white transform transition-transform hover:translate-y-2"
          >
            <div className="border-2 border-white rounded-full p-2">
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </div>
          </a>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Hero;