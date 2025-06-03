import React from "react";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, Instagram, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  return (
    <>
      <Hero
        title={isEnglish ? "Contact Us" : "Contactez-nous"}
        subtitle={
          isEnglish
            ? "Have a project in mind? We'd love to discuss it. Contact us and let's create something extraordinary together."
            : "Vous avez un projet en tête ? Nous serions ravis d'en discuter. Contactez-nous et créons ensemble quelque chose d'extraordinaire."
        }
        backgroundImage="https://images.pexels.com/photos/3810787/pexels-photo-3810787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alignment="left"
        variant="banner"
      />

      <section className="section bg-neutral-50">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="section-title">
              {isEnglish
                ? "Let's Discuss Your Project"
                : "Discutons de Votre Projet"}
            </h2>
            <p className="section-subtitle mx-auto">
              {isEnglish
                ? "Fill out the form below and we'll get back to you as soon as possible."
                : "Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais."}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <ContactForm />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-next-art">
                        {isEnglish ? "Our Location" : "Notre Localisation"}
                      </h4>
                      <p className="text-neutral-600">Paris, France</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-next-art">Email</h4>
                      <a
                        href="mailto:a.roussel@add-edit.fr"
                        className="text-neutral-600 hover:text-primary transition-colors"
                      >
                        a.roussel@add-edit.fr
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-next-art">
                        {isEnglish ? "Phone" : "Téléphone"}
                      </h4>
                      <a
                        href="tel:+33695339512"
                        className="text-neutral-600 hover:text-primary transition-colors"
                      >
                        +33 6 95 33 95 12
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-next-art">
                        {isEnglish ? "Hours" : "Horaires"}
                      </h4>
                      <p className="text-neutral-600">
                        {isEnglish
                          ? "Monday - Friday: 9am - 6pm"
                          : "Lundi - Vendredi : 9h00 - 18h00"}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="sticky top-24">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl mb-6">
                  <img
                    referrerPolicy="no-referrer"
                    src="https://lh3.googleusercontent.com/pw/AP1GczO3o7o9U68vi1IcZV33us6AwZdcX29SagUuSqUlq5QFrmc8orcJQXUwDMdmZUM2kazZYpp81F5joYX6hnE6U9MicI6bP13KZiSUh9yWNe95-qfH1MENeTejl4nPNSEzjTZJIqbH4ovX5a3PzwaEjZKb=w2492-h1662-s-no-gm?authuser=0"
                    alt={isEnglish ? "Editing studio" : "Studio de montage"}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="text-lg font-next-art mb-4">
                    {isEnglish ? "Follow Us" : "Suivez-nous"}
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-primary hover:text-white transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/alexandre-roussel/?originalSubdomain=fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-primary hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-primary text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-next-art mb-6">
              {isEnglish
                ? "Ready for a Free Consultation?"
                : "Prêt pour une Consultation Gratuite ?"}
            </h3>
            <p className="text-xl text-white/90 mb-8">
              {isEnglish
                ? "Let's discuss your project and see how we can help you achieve your goals."
                : "Discutons de votre projet et voyons comment nous pouvons vous aider à atteindre vos objectifs."}
            </p>
            <a
              href="tel:+33695339512"
              className="btn bg-white text-primary hover:bg-secondary hover:text-dark transition-colors inline-flex items-center"
            >
              <Phone size={20} className="mr-2" />
              {isEnglish ? "Call Us Now" : "Appelez-nous Maintenant"}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
