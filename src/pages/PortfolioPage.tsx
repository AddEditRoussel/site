import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";

interface Project {
  id: number;
  titleEN: string;
  titleFR: string;
  categoryEN: string;
  categoryFR: string;
  client: string;
  descriptionEN: string;
  descriptionFR: string;
  thumbnail: string;
  videoUrl?: string;
}

const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tout");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  // Fetch portfolio data
  const {
    data: portfolioData,
    isLoading: isPortfolioLoading,
    error: portfolioError,
  } = useFetch(`
    *[_type == "projects"][0] {
      heroImgUrl,
      projects[] {
        id,
        titleEN,
        titleFR,
        categoryEN,
        categoryFR,
        client,
        descriptionEN,
        descriptionFR,
        thumbnail,
        videoUrl
      }
    }
  `);

  if (isPortfolioLoading) {
    return <Loader />;
  }

  if (portfolioError) {
    return <div>Error loading data</div>;
  }

  const { heroImgUrl, projects } = portfolioData;

  const categories = [
    "Tout",
    ...new Set(
      projects.map((project: Project) =>
        isEnglish ? project.categoryEN : project.categoryFR
      )
    ),
  ];

  const filteredProjects =
    selectedCategory === "Tout"
      ? projects
      : projects.filter((project: Project) =>
          isEnglish
            ? project.categoryEN === selectedCategory
            : project.categoryFR === selectedCategory
        );

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <Hero
        title={isEnglish ? "Our Work" : "Nos Réalisations"}
        subtitle={
          isEnglish
            ? "Discover a selection of our best video creations, showcasing our expertise in producing teasers, trailers, and aftermovies."
            : "Découvrez une sélection de nos meilleures créations vidéo, mettant en valeur notre expertise en production de teasers, bandes-annonces et aftermovies."
        }
        backgroundImage={heroImgUrl}
        alignment="left"
        variant="banner"
      />

      <section id="showreel" className="section bg-white">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="section-title">
              {isEnglish ? "Our Showreel" : "Notre Showreel"}
            </h2>
            <p className="section-subtitle mx-auto">
              {isEnglish
                ? "Watch a compilation of our best work demonstrating our creativity and technical expertise."
                : "Regardez une compilation de nos meilleurs travaux démontrant notre créativité et notre expertise technique."}
            </p>
          </motion.div>

          <motion.div
            className="relative aspect-video rounded-xl overflow-hidden shadow-xl mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="video-container">
              <iframe
                src="https://player.vimeo.com/video/1088328931?h=824a8c845c&background=1&autoplay=1&loop=1&byline=0&title=0"
                title="ADD EDIT Showreel"
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="section-title">
              {isEnglish ? "Featured Projects" : "Projets en Vedette"}
            </h2>
            <p className="section-subtitle mx-auto">
              {isEnglish
                ? "Explore our flagship achievements that showcase our expertise."
                : "Explorez nos réalisations phares qui illustrent notre savoir-faire."}
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-white"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project: Project, index: number) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => handleOpenProject(project)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-md">
                  <img
                    src={project.thumbnail}
                    alt={isEnglish ? project.titleEN : project.titleFR}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Play size={24} className="text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-xs font-semibold py-1 px-2 rounded-full">
                      {isEnglish ? project.categoryEN : project.categoryFR}
                    </span>
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-next-art mb-1 group-hover:text-primary transition-colors">
                    {isEnglish ? project.titleEN : project.titleFR}
                  </h3>
                  <p className="text-neutral-600">
                    {isEnglish ? "Client: " : "Client: "}
                    {project.client}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/80"
          onClick={handleCloseProject}
        >
          <div
            className="relative bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md z-10"
              onClick={handleCloseProject}
            >
              ×
            </button>

            <div className="aspect-video relative">
              {selectedProject.videoUrl ? (
                <iframe
                  src={selectedProject.videoUrl}
                  title={
                    isEnglish
                      ? selectedProject.titleEN
                      : selectedProject.titleFR
                  }
                  className="w-full h-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                ></iframe>
              ) : (
                <img
                  src={selectedProject.thumbnail}
                  alt={
                    isEnglish
                      ? selectedProject.titleEN
                      : selectedProject.titleFR
                  }
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <div className="p-6">
              <div className="mb-2">
                <span className="bg-primary text-white text-xs font-semibold py-1 px-2 rounded-full">
                  {isEnglish
                    ? selectedProject.categoryEN
                    : selectedProject.categoryFR}
                </span>
              </div>
              <h3 className="text-2xl font-next-art mb-2">
                {isEnglish ? selectedProject.titleEN : selectedProject.titleFR}
              </h3>
              <p className="text-neutral-600 mb-4">
                {isEnglish ? "Client: " : "Client: "}
                {selectedProject.client}
              </p>
              <p className="text-neutral-700 mb-4">
                {isEnglish
                  ? selectedProject.descriptionEN
                  : selectedProject.descriptionFR}
              </p>

              <div className="flex justify-between items-center border-t pt-4">
                <button
                  className="text-primary hover:text-primary-dark flex items-center transition-colors"
                  onClick={() => {
                    handleCloseProject();
                    setTimeout(() => {
                      const contactSection =
                        document.querySelector("#contact-form");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 100);
                  }}
                >
                  {isEnglish
                    ? "Interested in something similar?"
                    : "Intéressé par quelque chose de similaire ?"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="section bg-tertiary/20">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-next-art mb-6">
              {isEnglish
                ? "Ready to Create Your Next Video Project?"
                : "Prêt à Créer Votre Prochain Projet Vidéo ?"}
            </h2>
            <p className="text-lg text-neutral-700 max-w-3xl mx-auto mb-8">
              {isEnglish
                ? "Whether you need a captivating trailer, an exciting teaser, or a memorable aftermovie, we're here to bring your vision to life."
                : "Que vous ayez besoin d'une bande-annonce captivante, d'un teaser excitant ou d'un aftermovie mémorable, nous sommes là pour donner vie à votre vision."}
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

export default PortfolioPage;
