import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = 'MEHTYS is an engineering technology company founded by two co-founders, building resilient software products, applied AI systems, and high-performance digital solutions.',
  keywords = 'MEHTYS, software engineering, AI tools, Code Bridge, developer tools, digital solutions, cloud architecture',
  image = '/mehtys-logo.jpeg',
}) => {
  const location = useLocation();

  useEffect(() => {
    // Scroll window to top on page navigation
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Set page title
    const fullTitle = `${title} | MEHTYS`;
    document.title = fullTitle;

    // Helper to update meta tag content
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('og:title', fullTitle, true);
    updateMeta('og:description', description, true);
    updateMeta('og:url', `https://mehtys.com${location.pathname}`, true);
    updateMeta('og:image', image, true);
    updateMeta('twitter:title', fullTitle);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', image);
  }, [title, description, keywords, image, location.pathname]);

  return null;
};

export default SEO;
