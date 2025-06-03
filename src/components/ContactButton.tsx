import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const ContactButton: React.FC = () => {
  return (
    <Link 
      to="/contact" 
      className="contact-fixed bg-secondary hover:bg-secondary-dark text-dark p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contact Us"
    >
      <MessageCircle size={28} />
    </Link>
  );
};

export default ContactButton;