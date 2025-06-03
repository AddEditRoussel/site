import React from "react";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Video, CheckCircle, Trophy, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";
import { useIsLargeScreen } from "../hooks/useIsLargeScreen";

const AboutPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";
  const isLargeScreen = useIsLargeScreen();

  // Fetch about us page data
  const {
    data: aboutUsPageData,
    isLoading: isAboutUsPageLoading,
    error: aboutUsPageError,
  } = useFetch(`
    *[_type == "aboutUsPage"][0] {
      heroImgUrl,
      yearOfExperience,
      aboutSectionTitleEN,
      aboutSectionTitleFR,
      aboutSectionParag1EN,
      aboutSectionParag1FR,
      aboutSectionParag2EN,
      aboutSectionParag2FR,
      aboutSectionParag3EN,
      aboutSectionParag3FR,
      aboutSectionImgUrl
    }
  `);

  if (isAboutUsPageLoading) {
    return <Loader />;
  }

  if (aboutUsPageError) {
    return <div>Error loading data</div>;
  }

  const {
    heroImgUrl,
    yearOfExperience,
    aboutSectionTitleEN,
    aboutSectionTitleFR,
    aboutSectionParag1EN,
    aboutSectionParag1FR,
    aboutSectionParag2EN,
    aboutSectionParag2FR,
    aboutSectionParag3EN,
    aboutSectionParag3FR,
    aboutSectionImgUrl,
  } = aboutUsPageData;

  return (
    <>
      <Hero
        title={isEnglish ? "Our Story" : "Notre Histoire"}
        subtitle={
          isEnglish
            ? "Discover the expertise and passion that drives our video production agency."
            : "Découvrez l'expertise et la passion qui animent notre agence de production vidéo."
        }
        backgroundImage={heroImgUrl}
        alignment="left"
        variant="banner"
      />

      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-next-art mb-6">
                {isEnglish ? aboutSectionTitleEN : aboutSectionTitleFR}
              </h2>
              <p className="text-neutral-700 mb-6">
                {isEnglish ? aboutSectionParag1EN : aboutSectionParag1FR}
              </p>
              <p className="text-neutral-700 mb-6">
                {isEnglish ? aboutSectionParag2EN : aboutSectionParag2FR}
              </p>
              <p className="text-neutral-700 mb-6">
                {isEnglish ? aboutSectionParag3EN : aboutSectionParag3FR}
              </p>
              {!isLargeScreen && (
                <motion.div
                  className="relative max-w-md mx-auto lg:mx-0 mb-[50px]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden shadow-xl">
                    <img
                      src={aboutSectionImgUrl}
                      alt="Alexandre Roussel"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-secondary p-4 rounded-lg shadow-lg">
                    <p className="font-next-art text-dark text-xl">
                      {yearOfExperience}+ {isEnglish ? "Years" : "Ans"}
                    </p>
                    <p className="text-dark/80">
                      {isEnglish ? "of TV Expertise" : "d'Expertise TV"}
                    </p>
                  </div>
                </motion.div>
              )}
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle
                    size={20}
                    className="text-primary mt-1 mr-3 flex-shrink-0"
                  />
                  <p className="text-neutral-700">
                    {isEnglish
                      ? "Deep expertise in editing and post-production"
                      : "Expertise approfondie en montage et post-production"}
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle
                    size={20}
                    className="text-primary mt-1 mr-3 flex-shrink-0"
                  />
                  <p className="text-neutral-700">
                    {isEnglish
                      ? "Experience with major television productions"
                      : "Expérience avec les plus grandes productions télévisuelles"}
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle
                    size={20}
                    className="text-primary mt-1 mr-3 flex-shrink-0"
                  />
                  <p className="text-neutral-700">
                    {isEnglish
                      ? "Unique creative vision for each project"
                      : "Vision créative unique pour chaque projet"}
                  </p>
                </div>
              </div>
            </motion.div>

            {isLargeScreen && (
              <motion.div
                className="relative max-w-md mx-auto lg:mx-0"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={aboutSectionImgUrl}
                    alt="Alexandre Roussel"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-secondary p-4 rounded-lg shadow-lg">
                  <p className="font-next-art text-dark text-xl">
                    {yearOfExperience}+ {isEnglish ? "Years" : "Ans"}
                  </p>
                  <p className="text-dark/80">
                    {isEnglish ? "of TV Expertise" : "d'Expertise TV"}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <section className="section bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white/10 rounded-full">
                <Trophy size={32} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-next-art mb-2">100+</h3>
              <p className="text-white/80">
                {isEnglish ? "TV Programs" : "Programmes TV"}
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white/10 rounded-full">
                <Video size={32} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-next-art mb-2">50+</h3>
              <p className="text-white/80">
                {isEnglish ? "Projects Completed" : "Projets Réalisés"}
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white/10 rounded-full">
                <Users size={32} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-next-art mb-2">30+</h3>
              <p className="text-white/80">
                {isEnglish ? "Satisfied Clients" : "Clients Satisfaits"}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-next-art mb-6">
              {isEnglish
                ? "Ready to Bring Your Project to Life?"
                : "Prêt à Donner Vie à Votre Projet ?"}
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto mb-8">
              {isEnglish
                ? "Every business deserves its moment in the spotlight. Let us create a teaser that will inspire admiration for your brand."
                : "Chaque entreprise mérite son moment de gloire. Laissez-nous créer un teaser qui suscitera l'admiration pour votre marque."}
            </p>
            <Link to="/contact" className="btn btn-primary">
              {isEnglish ? "Contact Us" : "Contactez-Nous"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
