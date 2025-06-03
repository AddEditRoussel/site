import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import BlogCard from "../components/BlogCard";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import SEO from "../components/SEO";
import { useTranslation } from "react-i18next";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tout");
  const { t, i18n } = useTranslation();

  // Fetch blog data
  const {
    data: blogData,
    isLoading: isBlogLoading,
    error: blogError,
  } = useFetch(`
    *[_type == "blog"][0] {
      heroImgUrl,
      articles[] {
        id,
        titleEN,
        titleFR,
        slugEN,
        slugFR,
        excerptEN,
        excerptFR,
        imageUrl,
        categoryEN,
        categoryFR,
        date,
        author
      }
    }
  `);
  useEffect(() => {
    setSearchTerm("");
    setSelectedCategory("Tout");
  }, [i18n.language]);
  if (isBlogLoading) {
    return <Loader />;
  }

  if (blogError) {
    return <div>Error loading data</div>;
  }

  const { heroImgUrl, articles } = blogData;

  const categories = [
    "Tout",
    ...new Set(
      articles.map((article: any) =>
        i18n.language === "en" ? article.categoryEN : article.categoryFR
      )
    ),
  ];

  const filteredArticles = articles.filter((article: any) => {
    const matchesSearch =
      (i18n.language === "en" ? article.titleEN : article.titleFR)
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      (i18n.language === "en" ? article.excerptEN : article.excerptFR)
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Tout" ||
      (i18n.language === "en" ? article.categoryEN : article.categoryFR) ===
        selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEO
        title={
          i18n.language === "en"
            ? "Video Production Blog 2025"
            : "Blog Production Vidéo 2025"
        }
        description={
          i18n.language === "en"
            ? "Explore our expert articles on the latest innovations in video production, editing, motion design and industry trends for 2025."
            : "Explorez nos articles experts sur les dernières innovations en production vidéo, montage, motion design et les tendances 2025 du secteur."
        }
        keywords="production vidéo 2025, montage vidéo IA, motion design, post-production avancée"
      />

      <Hero
        title={i18n.language === "en" ? "Blog & Expertise" : "Blog & Expertise"}
        subtitle={
          i18n.language === "en"
            ? "Discover our expert articles on the latest innovations in video production and 2025 trends."
            : "Découvrez nos articles experts sur les dernières innovations en production vidéo et les tendances 2025."
        }
        backgroundImage={heroImgUrl}
        alignment="left"
        variant="banner"
      />

      <section className="section bg-light">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
            <div className="relative max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-neutral-400" />
              </div>
              <input
                type="text"
                placeholder={
                  i18n.language === "en"
                    ? "Search articles..."
                    : "Rechercher des articles..."
                }
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-white"
                      : "bg-white text-neutral-700 hover:bg-neutral-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article: any, index: number) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <BlogCard
                    title={
                      i18n.language === "en" ? article.titleEN : article.titleFR
                    }
                    slug={
                      i18n.language === "en" ? article.slugEN : article.slugFR
                    }
                    excerpt={
                      i18n.language === "en"
                        ? article.excerptEN
                        : article.excerptFR
                    }
                    imageUrl={article.imageUrl}
                    category={
                      i18n.language === "en"
                        ? article.categoryEN
                        : article.categoryFR
                    }
                    date={article.date}
                    author={article.author}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-next-art mb-4">
                {i18n.language === "en"
                  ? "No Articles Found"
                  : "Aucun Article Trouvé"}
              </h3>
              <p className="text-neutral-600 mb-6">
                {i18n.language === "en"
                  ? "We couldn't find any articles matching your search criteria."
                  : "Nous n'avons trouvé aucun article correspondant à vos critères de recherche."}
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("Tout");
                }}
                className="btn btn-outline"
              >
                {i18n.language === "en"
                  ? "Reset Filters"
                  : "Réinitialiser les Filtres"}
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="bg-white py-12 hidden">
        <div className="container">
          <div className="bg-primary/5 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-next-art mb-4">
              {i18n.language === "en"
                ? "Subscribe to Our Newsletter"
                : "Abonnez-vous à Notre Newsletter"}
            </h3>
            <p className="max-w-2xl mx-auto mb-6">
              {i18n.language === "en"
                ? "Receive our latest articles, expert tips, and video production news directly in your inbox."
                : "Recevez nos derniers articles, conseils d'experts et actualités de la production vidéo directement dans votre boîte mail."}
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder={
                    i18n.language === "en"
                      ? "Your email address"
                      : "Votre adresse email"
                  }
                  className="flex-grow px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="btn btn-primary whitespace-nowrap">
                  {i18n.language === "en" ? "Subscribe" : "S'abonner"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
