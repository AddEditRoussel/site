import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://lh3.googleusercontent.com/pw/AP1GczO0v25v5O2BUGtjMD2OhjsetcJp5wVldnW0ryH04CpG0KzmXAgXx-8rfIptUaWVyRk5cS_2NfLITcHK1pPEFaLaxPBF87AzwHjFxWOE8yC37jj2K-L0kuXVtg775nOg0KKqvlpwKkMavExnTfc6drRz=w1800-h441-s-no-gm?authuser=0" 
                alt="ADD EDIT" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-neutral-300 mb-6">
              {isEnglish 
                ? "Crafting compelling visual stories that captivate audiences and elevate brands through expert video production."
                : "Création d'histoires visuelles captivantes qui séduisent les audiences et élèvent les marques grâce à une production vidéo experte."}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/alexandre-roussel/?originalSubdomain=fr" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-next-art mb-4 text-white">
              {isEnglish ? "Quick Links" : "Liens Rapides"}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-secondary transition-colors">
                  {isEnglish ? "Home" : "Accueil"}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-secondary transition-colors">
                  {isEnglish ? "About Us" : "À Propos"}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-secondary transition-colors">
                  {isEnglish ? "Services" : "Services"}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-neutral-300 hover:text-secondary transition-colors">
                  {isEnglish ? "Portfolio" : "Réalisations"}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-neutral-300 hover:text-secondary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-next-art mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#teasers" className="text-neutral-300 hover:text-secondary transition-colors">
                  Teasers
                </Link>
              </li>
              <li>
                <Link to="/services#trailers" className="text-neutral-300 hover:text-secondary transition-colors">
                  {isEnglish ? "Trailers" : "Bandes-annonces"}
                </Link>
              </li>
              <li>
                <Link to="/services#promotional" className="text-neutral-300 hover:text-secondary transition-colors">
                  {isEnglish ? "Promotional Videos" : "Vidéos Promotionnelles"}
                </Link>
              </li>
              <li>
                <Link to="/services#billboards" className="text-neutral-300 hover:text-secondary transition-colors">
                  Billboards
                </Link>
              </li>
              <li>
                <Link to="/services#corporate" className="text-neutral-300 hover:text-secondary transition-colors">
                  {isEnglish ? "Corporate Videos" : "Vidéos Corporate"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-next-art mb-4 text-white">
              {isEnglish ? "Contact Us" : "Contactez-nous"}
            </h3>
            <div className="space-y-3">
              <p className="flex items-start">
                <MapPin size={20} className="mr-2 text-secondary mt-1 flex-shrink-0" />
                <span className="text-neutral-300">Paris, France</span>
              </p>
              <p className="flex items-center">
                <Phone size={20} className="mr-2 text-secondary flex-shrink-0" />
                <a href="tel:+33695339512" className="text-neutral-300 hover:text-secondary transition-colors">
                  +33 6 95 33 95 12
                </a>
              </p>
              <p className="flex items-center">
                <Mail size={20} className="mr-2 text-secondary flex-shrink-0" />
                <a href="mailto:a.roussel@add-edit.fr" className="text-neutral-300 hover:text-secondary transition-colors">
                  a.roussel@add-edit.fr
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-neutral-400 text-sm text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} ADD EDIT. {isEnglish ? "All rights reserved." : "Tous droits réservés."}</p>
              <div className="mt-2 space-x-4">
                <Link to="/terms" className="hover:text-secondary transition-colors">
                  {isEnglish ? "Terms & Conditions" : "Conditions Générales"}
                </Link>
                <span className="text-neutral-600">|</span>
                <Link to="/privacy" className="hover:text-secondary transition-colors">
                  {isEnglish ? "Privacy Policy" : "Politique de Confidentialité"}
                </Link>
              </div>
            </div>
            <div className="text-neutral-400 text-sm text-center md:text-right">
              Made with passion by{" "}
              <a 
                href="https://propulseo-site.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary hover:text-secondary-light transition-colors"
              >
                Propul'SEO
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;