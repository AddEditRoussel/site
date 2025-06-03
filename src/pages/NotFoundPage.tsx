import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Video } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 py-20">
      <div className="container max-w-4xl text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Video size={120} className="mx-auto text-primary mb-8" />
          
          <h1 className="text-6xl md:text-8xl font-next-art mb-6 text-primary">404</h1>
          <h2 className="text-2xl md:text-3xl font-next-art mb-4">Page Not Found</h2>
          
          <p className="text-lg text-neutral-600 mb-8 max-w-xl mx-auto">
            The scene you're looking for seems to be missing from our production. Let's get you back to where the action is happening.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/" className="btn btn-primary w-full sm:w-auto flex items-center justify-center">
              <Home size={16} className="mr-2" /> Back to Homepage
            </Link>
            <Link to="/contact" className="btn btn-outline w-full sm:w-auto">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;