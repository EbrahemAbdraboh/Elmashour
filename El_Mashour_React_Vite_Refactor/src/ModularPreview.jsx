import { useEffect, useState } from 'react';
import SiteHeader from './components/SiteHeader.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import RoutePage from './pages/RoutePage.jsx';
import { getRoute, siteCopy } from './i18n/siteContent.js';
import './styles/modular-preview.css';

function initialLanguage() {
  try {
    const saved = localStorage.getItem('el-mashour-preview-language');
    if (saved === 'ar' || saved === 'en') return saved;
  } catch {}
  return document.documentElement.lang?.toLowerCase().startsWith('en') ? 'en' : 'ar';
}

export default function ModularPreview() {
  const [language, setLanguage] = useState(initialLanguage);
  const route = getRoute(window.location.pathname);
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.title = route.title[language];
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = route.description[language];
    try { localStorage.setItem('el-mashour-preview-language', language); } catch {}
    return () => { document.documentElement.lang = 'ar'; document.documentElement.dir = 'rtl'; };
  }, [language, route]);
  const toggleLanguage = () => setLanguage(current => current === 'ar' ? 'en' : 'ar');
  useEffect(() => {
    const nodes = [...document.querySelectorAll('[data-reveal]')];
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach(node => node.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { observer.unobserve(entry.target); entry.target.classList.add('is-visible'); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, [language, route]);
  return <div className="m-preview-site" data-route={route.key}>
    <div className="m-preview-notice">{siteCopy[language].previewLabel} — {language === 'ar' ? 'وضع تطوير مستقل؛ الموقع الأصلي لم يتغير' : 'Isolated development mode; original site remains unchanged'}</div>
    <SiteHeader language={language} onToggleLanguage={toggleLanguage} />
    <RoutePage language={language} />
    <SiteFooter language={language} />
  </div>;
}
