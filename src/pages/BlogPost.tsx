import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { useTranslation } from "react-i18next";
import { PortableText } from "@portabletext/react";
import { imgUrlBuilder } from "../sanityClient";
import { useFetch } from "../hooks/useFetch";

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  // Fetch blog post data
  const {
    data: article,
    isLoading,
    error,
  } = useFetch(`
    *[_type == "blog"][0] {
      articles[] {
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
        author,
        contentEN,
        contentFR,
        relatedArticles[]->{
          titleEN,
          titleFR,
          slugEN,
          slugFR,
          imageUrl,
          categoryEN,
          categoryFR
        }
      }
    }
  `);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  const currentArticle = article?.articles.find((article: any) =>
    isEnglish ? article?.slugEN === slug : article?.slugFR === slug
  );

  if (!currentArticle) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-next-art mb-4">
          {isEnglish ? "Article Not Found" : "Article Non Trouvé"}
        </h1>
        <p className="mb-8">
          {isEnglish
            ? "The article you're looking for doesn't exist or has been moved."
            : "L'article que vous recherchez n'existe pas ou a été déplacé."}
        </p>
        <Link to="/blog" className="btn btn-primary">
          <ArrowLeft size={16} className="mr-2" />{" "}
          {isEnglish ? "Back to Blog" : "Retour au Blog"}
        </Link>
      </div>
    );
  }

  const myPortableTextComponents = {
    types: {
      htmlEmbed: ({ value }: any) => (
        <div dangerouslySetInnerHTML={{ __html: value.code }} />
      ),
      image: ({ value }: any) => (
        <div className="my-[2rem]">
          {value?.asset?._ref && (
            <img
              referrerPolicy="no-referrer"
              src={imgUrlBuilder(value).width(800).height(500).url()}
              alt="Blog Image"
              className="max-w-full w-full md:w-2/3 h-auto rounded-lg shadow-md my-4"
            />
          )}
        </div>
      ),
    },
    marks: {
      strong: ({ children }: any) => (
        <strong className="font-bold">{children}</strong>
      ),
    },
  };

  const relatedArticles = currentArticle.relatedArticles || [];

  return (
    <>
      <SEO
        title={isEnglish ? currentArticle.titleEN : currentArticle.titleFR}
        description={
          isEnglish ? currentArticle.excerptEN : currentArticle.excerptFR
        }
        keywords={
          isEnglish ? currentArticle.keywordsEN : currentArticle.keywordsFR
        }
        image={currentArticle.imageUrl}
        type="article"
        article={true}
      />

      <div className="pt-24 bg-white">
        <div className="container max-w-4xl py-12">
          <Link
            to="/blog"
            className="inline-flex items-center text-primary hover:text-primary-dark mb-6"
          >
            <ArrowLeft size={16} className="mr-2" />{" "}
            {isEnglish ? "Back to Blog" : "Retour au Blog"}
          </Link>

          <h1 className="text-4xl md:text-5xl font-next-art mb-8 leading-tight">
            {isEnglish ? currentArticle.titleEN : currentArticle.titleFR}
          </h1>

          <div className="rounded-xl overflow-hidden mb-8 shadow-lg">
            <img
              referrerPolicy="no-referrer"
              src={currentArticle.imageUrl}
              alt={isEnglish ? currentArticle.titleEN : currentArticle.titleFR}
              className="w-full h-auto"
            />
          </div>

          <div className="flex justify-between items-center mb-12 border-b border-neutral-200 pb-6">
            <div className="flex items-center">
              <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold">
                {isEnglish
                  ? currentArticle.categoryEN
                  : currentArticle.categoryFR}
              </span>
            </div>

            <div className="flex space-x-2">
              <motion.a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  window.location.href
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#1877F2] text-white hover:bg-opacity-90 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  window.location.href
                )}&text=${encodeURIComponent(
                  isEnglish ? currentArticle.titleEN : currentArticle.titleFR
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#1DA1F2] text-white hover:bg-opacity-90 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter size={18} />
              </motion.a>
              <motion.a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                  window.location.href
                )}&title=${encodeURIComponent(
                  isEnglish ? currentArticle.titleEN : currentArticle.titleFR
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#0A66C2] text-white hover:bg-opacity-90 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={18} />
              </motion.a>
            </div>
          </div>

          <article className="prose prose-lg max-w-none mb-12 article-container">
            <PortableText
              value={
                isEnglish ? currentArticle.contentEN : currentArticle.contentFR
              }
              components={myPortableTextComponents}
            />
          </article>

          {relatedArticles.length > 0 && false && (
            <div className="border-t border-neutral-200 pt-12 mt-12">
              <h2 className="text-2xl font-next-art mb-6">
                {isEnglish ? "Related Articles" : "Articles Similaires"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedArticles.map((relatedArticle: any) => (
                  <Link
                    key={relatedArticle.slugEN || relatedArticle.slugFR}
                    to={`/blog/${
                      isEnglish ? relatedArticle.slugEN : relatedArticle.slugFR
                    }`}
                    className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        referrerPolicy="no-referrer"
                        src={relatedArticle.imageUrl}
                        alt={
                          isEnglish
                            ? relatedArticle.titleEN
                            : relatedArticle.titleFR
                        }
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {isEnglish
                          ? relatedArticle.categoryEN
                          : relatedArticle.categoryFR}
                      </span>
                      <h3 className="text-xl font-next-art mt-2 group-hover:text-primary transition-colors">
                        {isEnglish
                          ? relatedArticle.titleEN
                          : relatedArticle.titleFR}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="bg-neutral-50 rounded-xl p-8 mt-12">
            <h2 className="text-2xl font-next-art mb-4 text-center">
              {isEnglish
                ? "Need a Video Production Expert?"
                : "Besoin d'un Expert en Production Vidéo ?"}
            </h2>
            <p className="text-neutral-600 text-center mb-6">
              {isEnglish
                ? "Let's discuss your project and see how we can help you create impactful videos."
                : "Discutons de votre projet et voyons comment nous pouvons vous aider à créer des vidéos impactantes."}
            </p>
            <div className="text-center">
              <Link to="/contact" className="btn btn-primary">
                {isEnglish ? "Contact Us" : "Contactez-nous"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
