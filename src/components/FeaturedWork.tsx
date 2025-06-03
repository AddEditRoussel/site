import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

const FeaturedWork: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: t("featuredWork.projects.trailer.title"),
      category: t("featuredWork.projects.trailer.category"),
      thumbnail:
        "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/portfolio",
    },
    {
      id: 2,
      title: t("featuredWork.projects.teaser.title"),
      category: t("featuredWork.projects.teaser.category"),
      thumbnail:
        "https://images.pexels.com/photos/4007744/pexels-photo-4007744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/portfolio",
    },
    {
      id: 3,
      title: t("featuredWork.projects.aftermovie.title"),
      category: t("featuredWork.projects.aftermovie.category"),
      thumbnail:
        "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/portfolio",
    },
    {
      id: 4,
      title: t("featuredWork.projects.corporate.title"),
      category: t("featuredWork.projects.corporate.category"),
      thumbnail:
        "https://images.pexels.com/photos/1616779/pexels-photo-1616779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/portfolio",
    },
  ];

  return (
    <section id="featured-work" className="section bg-light">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">{t("featuredWork.title")}</h2>
          <p className="section-subtitle mx-auto">
            {t("featuredWork.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img
                  referrerPolicy="no-referrer"
                  src={project.thumbnail}
                  alt={project.title}
                  className="object-cover w-full h-64 transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-white">
                  <span className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-next-art mb-4 text-center text-white">
                    {project.title}
                  </h3>
                  <Link
                    to={project.link}
                    className="flex items-center text-tertiary hover:text-white transition-colors"
                  >
                    {t("featuredWork.viewAll")}{" "}
                    <ExternalLink size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/portfolio" className="btn btn-outline">
            {t("featuredWork.viewAll")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
