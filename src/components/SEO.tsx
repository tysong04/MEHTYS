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
  description = 'MEHTYS is an independent, early-stage technology venture founded by Tyson Garfield and Mehvish (Ajmeri), building useful software products and practical digital tools.',
  keywords = 'MEHTYS, MTCodeBridge, MTCB, MTnote, technology venture, developer tools, knowledge organizer, Tyson Garfield, Mehvish Ajmeri',
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
