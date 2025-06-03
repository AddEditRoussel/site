import React from "react";
import Hero from "../components/Hero";
import FeaturedWork from "../components/FeaturedWork";
import Services from "../components/Services";
import TestimonialSlider from "../components/TestimonialSlider";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Video, Award, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";

const HomePage: React.FC = () => {
  const { t, i18n } = useTranslation();

  // Fetch home page data
  const {
    data: homePageData,
    isLoading: isHomePageLoading,
    error: homePageError,
  } = useFetch(`
    *[_type == "homePage"][0] {
      heroImgUrl
    }
  `);

  // Fetch testimonials data
  const {
    data: testimonialsData,
    isLoading: isTestimonialsLoading,
    error: testimonialsError,
  } = useFetch(`
    *[_type == "testimonials"][0] {
      testimonialEN,
      testimonialFR
    }
  `);

  if (isHomePageLoading || isTestimonialsLoading) {
    return <Loader />;
  }

  if (homePageError || testimonialsError) {
    return <div>Error loading data</div>;
  }

  const testimonials =
    i18n.language === "en"
      ? testimonialsData.testimonialEN
      : testimonialsData.testimonialFR;

  return (
    <>
      <Hero
        title={t("hero.home.title")}
        subtitle={t("hero.home.subtitle")}
        backgroundImage={homePageData.heroImgUrl}
      />

      <FeaturedWork />

      <section className="section bg-white">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="section-title">{t("whyChooseUs.title")}</h2>
            <p className="section-subtitle mx-auto">
              {t("whyChooseUs.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                <Video size={32} />
              </div>
              <h3 className="text-xl font-next-art mb-3">
                {t("whyChooseUs.features.creative.title")}
              </h3>
              <p className="text-neutral-600">
                {t("whyChooseUs.features.creative.description")}
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-secondary/10 text-secondary rounded-full">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-next-art mb-3">
                {t("whyChooseUs.features.expertise.title")}
              </h3>
              <p className="text-neutral-600">
                {t("whyChooseUs.features.expertise.description")}
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-tertiary/20 text-primary rounded-full">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-next-art mb-3">
                {t("whyChooseUs.features.delivery.title")}
              </h3>
              <p className="text-neutral-600">
                {t("whyChooseUs.features.delivery.description")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Services />

      <section className="section bg-primary text-white relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-next-art mb-6">
                {t("readyToStart.title")}
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                {t("readyToStart.subtitle")}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/portfolio"
                  className="btn bg-white text-primary hover:bg-tertiary hover:text-dark"
                >
                  {t("readyToStart.cta.portfolio")}
                </Link>
                <Link
                  to="/contact"
                  className="btn bg-secondary text-dark hover:bg-secondary-dark"
                >
                  {t("readyToStart.cta.contact")}
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="bg-white/10 p-6 rounded-lg text-center">
                <h4 className="text-2xl font-next-art mb-2">50+</h4>
                <p className="text-white/70">
                  {t("readyToStart.stats.teasers")}
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg text-center">
                <h4 className="text-2xl font-next-art mb-2">20+</h4>
                <p className="text-white/70">
                  {t("readyToStart.stats.videos")}
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg text-center">
                <h4 className="text-2xl font-next-art mb-2">30+</h4>
                <p className="text-white/70">
                  {t("readyToStart.stats.clients")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <TestimonialSlider testimonials={testimonials} />
    </>
  );
};

export default HomePage;
