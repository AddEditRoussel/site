import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  article?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image = "https://lh3.googleusercontent.com/pw/AP1GczPZA8nUQz6nlCwZ0044kDch9KI3LmsgwjwdrO5zvgllxUeTgzrqgWIGOzj4PsI2fgrHkAEyfWWeUF_O5LYImNh7r7WjuB1DcA1o-UU-DvRorlII8Xx52Gowa8IvFIKopscv3BVdFzeOTBt-4ONtizG8=w1800-h441-s-no-gm",
  url = "https://add-edit.fr",
  type = "website",
  article = false
}) => {
  const siteTitle = "ADD EDIT | Production Vidéo & Motion Design à Paris";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords\" content={keywords} />}
      <meta name="author" content="Alexandre Roussel" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={article ? 'article' : type} />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content="#227A8E" />

      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": article ? "Article" : "WebPage",
          "name": title,
          "description": description,
          "image": image,
          "url": url,
          "publisher": {
            "@type": "Organization",
            "name": "ADD EDIT",
            "logo": {
              "@type": "ImageObject",
              "url": "https://lh3.googleusercontent.com/pw/AP1GczPZA8nUQz6nlCwZ0044kDch9KI3LmsgwjwdrO5zvgllxUeTgzrqgWIGOzj4PsI2fgrHkAEyfWWeUF_O5LYImNh7r7WjuB1DcA1o-UU-DvRorlII8Xx52Gowa8IvFIKopscv3BVdFzeOTBt-4ONtizG8=w1800-h441-s-no-gm"
            }
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;