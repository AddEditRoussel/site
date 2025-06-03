import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/portfolio', changefreq: 'weekly', priority: 0.9 },
  { url: '/blog', changefreq: 'weekly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.6 },
  { url: '/privacy', changefreq: 'yearly', priority: 0.3 },
  { url: '/terms', changefreq: 'yearly', priority: 0.3 }
];

const stream = new SitemapStream({ hostname: 'https://add-edit.fr' });

streamToPromise(Readable.from(links).pipe(stream))
  .then((data) => {
    createWriteStream('./dist/sitemap.xml').write(data.toString());
  })
  .catch(console.error);