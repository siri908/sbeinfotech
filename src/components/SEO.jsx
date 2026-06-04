import React, { useEffect } from 'react';

export default function SEO({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage = 'https://sbenterprises.in/og-image.jpg',
  ogUrl,
  twitterTitle,
  twitterDescription,
  twitterImage
}) {
  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title;
    }

    const updateMeta = (attr, attrVal, contentVal) => {
      if (contentVal === undefined || contentVal === null) return;
      const selector = `meta[${attr}="${attrVal}"]`;
      let el = document.head.querySelector(selector);
      if (el) {
        el.setAttribute('content', contentVal);
      } else {
        el = document.createElement('meta');
        el.setAttribute(attr, attrVal);
        el.setAttribute('content', contentVal);
        document.head.appendChild(el);
      }
    };

    // 2. Update Description & Keywords
    updateMeta('name', 'description', description);
    updateMeta('name', 'keywords', keywords);

    // 3. Update Open Graph tags
    updateMeta('property', 'og:title', ogTitle || title);
    updateMeta('property', 'og:description', ogDescription || description);
    updateMeta('property', 'og:url', ogUrl || window.location.href);
    updateMeta('property', 'og:image', ogImage);

    // 4. Update Twitter Card tags
    updateMeta('name', 'twitter:title', twitterTitle || ogTitle || title);
    updateMeta('name', 'twitter:description', twitterDescription || ogDescription || description);
    updateMeta('name', 'twitter:image', twitterImage || ogImage);

  }, [
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    twitterTitle,
    twitterDescription,
    twitterImage
  ]);

  return null;
}
