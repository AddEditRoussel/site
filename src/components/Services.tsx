import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Film, Video, MonitorPlay, Camera } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description, link }) => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  
  return (
    <motion.div 
      className="card p-6 hover:shadow-xl transition-shadow"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-next-art mb-3">{title}</h3>
      <p className="text-neutral-600 mb-4">{description}</p>
      <Link to={link} className="link flex items-center font-semibold">
        {t('services.learnMore')}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </Link>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  
  const services = [
    {
      icon: <Film size={48} />,
      title: isEnglish ? "Teasers & Trailers" : "Teasers & Bandes-annonces",
      description: isEnglish 
        ? "Short and captivating videos that create anticipation for your projects and captivate your audience."
        : "Des vidéos courtes et captivantes qui créent de l'anticipation pour vos projets et captivent votre audience.",
      link: "/services#teasers"
    },
    {
      icon: <Video size={48} />,
      title: isEnglish ? "Promotional Videos" : "Vidéos Promotionnelles",
      description: isEnglish
        ? "Compelling videos that communicate your brand's value proposition and inspire action."
        : "Des vidéos convaincantes qui communiquent la proposition de valeur de votre marque et inspirent l'action.",
      link: "/services#promotional"
    },
    {
      icon: <MonitorPlay size={48} />,
      title: "Aftermovies & Best-of",
      description: isEnglish
        ? "Capture the essence of your events with dynamic aftermovies and memorable best-of videos."
        : "Capturez l'essence de vos événements avec des aftermovies dynamiques et des best-of mémorables.",
      link: "/services#aftermovies"
    },
    {
      icon: <Camera size={48} />,
      title: isEnglish ? "Corporate Videos" : "Vidéos Corporate",
      description: isEnglish
        ? "Professional videos that tell your company's story and showcase your culture."
        : "Des vidéos professionnelles qui racontent l'histoire de votre entreprise et mettent en valeur votre culture.",
      link: "/services#corporate"
    }
  ];

  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="section-subtitle mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center bg-primary/5 rounded-xl p-8 border border-primary/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3 className="text-2xl font-next-art mb-4">{t('services.customSolution.title')}</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            {t('services.customSolution.description')}
          </p>
          <Link to="/contact" className="btn btn-primary">
            {t('services.customSolution.cta')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;