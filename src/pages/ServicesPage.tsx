import React, { useState } from "react";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Film,
  Video,
  MonitorPlay,
  Camera,
  CheckCircle,
  Clock,
  Users,
  Zap,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";
import { useResendContactForm } from "../hooks/resend/useResendContactForm";
import { useIsLargeScreen } from "../hooks/useIsLargeScreen";

const ServicesPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";
  const isLgScreen = useIsLargeScreen(767);

  // Fetch our service page data
  const {
    data: ourServicePageData,
    isLoading: isOurServicePageLoading,
    error: ourServicePageError,
  } = useFetch(`
    *[_type == "ourServicePage"][0] {
      heroTitleEN,
      heroTitleFR,
      heroSubtitleEN,
      heroSubtitleFR,
      heroImgUrl,
      services[] {
        id,
        titleEN,
        titleFR,
        descriptionEN,
        descriptionFR,
        featuresEN,
        featuresFR,
        image
      }
    }
  `);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const { submitForm, loading } = useResendContactForm({
    onSuccess: () => {
      setFormData({ name: "", email: "", service: "", message: "" });
    },
    onError: () => {},
    lang: isEnglish ? "en" : "fr",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitForm(formData);
  };

  if (isOurServicePageLoading) {
    return <Loader />;
  }

  if (ourServicePageError) {
    return <div>Error loading data</div>;
  }

  const {
    heroTitleEN,
    heroTitleFR,
    heroSubtitleEN,
    heroSubtitleFR,
    heroImgUrl,
    services,
  } = ourServicePageData;

  const icons = {
    teasers: <Film size={48} />,
    aftermovies: <Video size={48} />,
    promotional: <MonitorPlay size={48} />,
    corporate: <Camera size={48} />,
  };

  return (
    <>
      <Hero
        title={isEnglish ? heroTitleEN : heroTitleFR}
        subtitle={isEnglish ? heroSubtitleEN : heroSubtitleFR}
        backgroundImage={heroImgUrl}
        alignment="left"
        variant="banner"
      />

      <section className="section bg-white">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="section-title">
              {isEnglish ? "What We Offer" : "Ce Que Nous Proposons"}
            </h2>
            <p className="section-subtitle mx-auto">
              {isEnglish
                ? "We provide a comprehensive range of video production services tailored to your specific needs and goals."
                : "Nous fournissons une gamme complète de services de production vidéo adaptés à vos besoins et objectifs spécifiques."}
            </p>
          </motion.div>

          {services.map((service: any, index: number) => (
            <div
              key={service.id}
              id={service.id}
              className={`mb-24 ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              <motion.div
                className={`grid grid-cols-1 md:grid-cols-2 ${
                  isLgScreen ? "gap-12" : "gap-2"
                } items-center`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div>
                  <div className="text-primary mb-4">{icons[service.id]}</div>
                  <h2 className="text-3xl font-next-art mb-4">
                    {isEnglish ? service.titleEN : service.titleFR}
                  </h2>
                  <p className="text-neutral-700 mb-6">
                    {isEnglish ? service.descriptionEN : service.descriptionFR}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {(isEnglish ? service.featuresEN : service.featuresFR).map(
                      (feature: string, i: number) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle
                            size={20}
                            className="text-primary mt-1 mr-3 flex-shrink-0"
                          />
                          <p>{feature}</p>
                        </li>
                      )
                    )}
                  </ul>
                  {isLgScreen && (
                    <Link to="/contact" className="btn btn-primary">
                      {isEnglish
                        ? `Learn More About ${service.titleEN}`
                        : `Se Renseigner sur ${service.titleFR}`}
                    </Link>
                  )}
                </div>

                <motion.div
                  className="rounded-xl overflow-hidden "
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      referrerPolicy="no-referrer"
                      src={service.image}
                      alt={isEnglish ? service.titleEN : service.titleFR}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <br />
                  {!isLgScreen && (
                    <Link to="/contact" className="btn btn-primary">
                      {isEnglish
                        ? `Learn More About ${service.titleEN}`
                        : `Se Renseigner sur ${service.titleFR}`}
                    </Link>
                  )}
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-next-art mb-6">
                {isEnglish ? "Why Choose Us" : "Pourquoi Nous Choisir"}
              </h2>
              <p className="text-white/80 mb-8">
                {isEnglish
                  ? "By working with us, you get more than just a service provider - you get a creative partner committed to your success."
                  : "En collaborant avec nous, vous obtenez plus qu'un simple prestataire de services - vous obtenez un partenaire créatif engagé dans votre réussite."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex">
                  <div className="text-secondary mr-4">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-next-art mb-2">
                      {isEnglish ? "Expert Team" : "Équipe Experte"}
                    </h3>
                    <p className="text-white/70">
                      {isEnglish
                        ? "Our team brings years of experience and creative expertise to every project."
                        : "Notre équipe apporte des années d'expérience et d'expertise créative à chaque projet."}
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="text-secondary mr-4">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-next-art mb-2">
                      {isEnglish
                        ? "Creative Excellence"
                        : "Excellence Créative"}
                    </h3>
                    <p className="text-white/70">
                      {isEnglish
                        ? "We push creative boundaries to deliver content that stands out and gets results."
                        : "Nous repoussons les limites créatives pour livrer du contenu qui se démarque et obtient des résultats."}
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="text-secondary mr-4">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-next-art mb-2">
                      {isEnglish
                        ? "On-Time Delivery"
                        : "Livraison Dans Les Délais"}
                    </h3>
                    <p className="text-white/70">
                      {isEnglish
                        ? "We respect deadlines and ensure your project is delivered on time, every time."
                        : "Nous respectons les délais et garantissons que votre projet est livré à temps, à chaque fois."}
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="text-secondary mr-4">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-next-art mb-2">
                      {isEnglish ? "Quality Assurance" : "Assurance Qualité"}
                    </h3>
                    <p className="text-white/70">
                      {isEnglish
                        ? "We maintain the highest standards throughout the production process."
                        : "Nous maintenons les plus hauts standards tout au long du processus de production."}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-8 bg-white/10 rounded-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl font-next-art mb-6 text-center">
                {isEnglish
                  ? "Ready to Start Your Project?"
                  : "Prêt à Démarrer Votre Projet ?"}
              </h3>
              <p className="text-white/80 mb-6 text-center">
                {isEnglish
                  ? "Fill out our quick project request form, and we'll get back to you within 24 hours to discuss your needs."
                  : "Remplissez notre formulaire rapide de demande de projet, et nous vous répondrons sous 24 heures pour discuter de vos besoins."}
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    required
                    onChange={handleChange}
                    placeholder={isEnglish ? "Your Name" : "Votre Nom"}
                    className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={isEnglish ? "Your Email" : "Votre Email"}
                    className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    <option value="" className="text-dark">
                      {isEnglish
                        ? "Select a Service"
                        : "Sélectionner un Service"}
                    </option>
                    {services.map((service: any) => (
                      <option
                        key={service.id}
                        value={service.id}
                        className="text-dark"
                      >
                        {isEnglish ? service.titleEN : service.titleFR}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder={
                      isEnglish
                        ? "Tell us about your project"
                        : "Parlez-nous de votre projet"
                    }
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full btn bg-secondary text-dark hover:bg-secondary-dark"
                    disabled={loading}
                  >
                    {loading
                      ? isEnglish
                        ? "Sending..."
                        : "Envoi en cours..."
                      : isEnglish
                      ? "Send Request"
                      : "Envoyer la Demande"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-3">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="section-title">
                  {isEnglish
                    ? "Frequently Asked Questions"
                    : "Questions Fréquentes"}
                </h2>
                <p className="section-subtitle mx-auto">
                  {isEnglish
                    ? "Find answers to common questions about our services."
                    : "Trouvez les réponses aux questions courantes sur nos services."}
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-6 bg-neutral-50 rounded-lg h-full">
                <h3 className="text-xl font-next-art mb-4">
                  {isEnglish
                    ? "How long does a typical video production take?"
                    : "Combien de temps prend une production vidéo typique ?"}
                </h3>
                <p className="text-neutral-600">
                  {isEnglish
                    ? "Production timelines vary depending on project complexity. From a few days to several weeks based on the project and deadlines. Don't hesitate to send us your requests for a response."
                    : "Les délais de production varient selon la complexité du projet. Entre quelques jours et quelques semaines selon le projet et les délais. N'hésitez pas à nous envoyer vos demandes que l'on vous réponde."}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="p-6 bg-neutral-50 rounded-lg h-full">
                <h3 className="text-xl font-next-art mb-4">
                  {isEnglish
                    ? "What is your pricing structure?"
                    : "Quelle est votre structure tarifaire ?"}
                </h3>
                <p className="text-neutral-600">
                  {isEnglish
                    ? "We create custom quotes based on project requirements. Factors that influence pricing include production complexity, shooting days, location needs, and post-production work."
                    : "Nous créons des devis personnalisés basés sur les exigences du projet. Les facteurs qui influencent les prix incluent la complexité de la production, les jours de tournage, les besoins en localisation et le travail de post-production."}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-6 bg-neutral-50 rounded-lg h-full">
                <h3 className="text-xl font-next-art mb-4">
                  {isEnglish
                    ? "Do you offer scriptwriting services?"
                    : "Proposez-vous des services de scénarisation ?"}
                </h3>
                <p className="text-neutral-600">
                  {isEnglish
                    ? "Yes, our team includes experienced scriptwriters who can develop engaging narratives for your video. We can work from your existing content or create original scripts."
                    : "Oui, notre équipe inclut des scénaristes expérimentés qui peuvent développer des narratifs captivants pour votre vidéo. Nous pouvons travailler à partir de votre contenu existant ou créer des scripts originaux."}
                </p>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <p className="mb-4">
              {isEnglish ? "Still have questions?" : "Encore des questions ?"}
            </p>
            <Link to="/contact" className="btn btn-primary">
              {isEnglish ? "Contact Us" : "Contactez-nous"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
