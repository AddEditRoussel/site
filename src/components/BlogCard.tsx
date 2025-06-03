import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  imageUrl: string;
  category: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  slug,
  imageUrl,
  category,
}) => {
  return (
    <motion.article
      className="card overflow-hidden group h-full flex flex-col"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link
        to={`/blog/${slug}`}
        className="block relative overflow-hidden aspect-video"
      >
        <img
          referrerPolicy="no-referrer"
          src={imageUrl}
          alt={title}
          width="800"
          height="450"
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-secondary text-dark text-xs font-semibold py-1 px-3 rounded-full">
          {category}
        </div>
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="font-next-art text-xl mb-3 group-hover:text-primary transition-colors">
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h2>
        <p className="text-neutral-600 mb-4 line-clamp-3 flex-grow">
          {excerpt}
        </p>
        <Link
          to={`/blog/${slug}`}
          className="inline-flex items-center font-semibold text-primary hover:text-primary-dark transition-colors mt-auto"
          aria-label={`Lire l'article : ${title}`}
        >
          Lire l'article
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogCard;
