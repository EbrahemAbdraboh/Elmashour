import { siteCopy, siteRoutes } from '../i18n/siteContent.js';

const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=332P%2B7V%20Kerdasa';
const MAP_EMBED = 'https://www.google.com/maps?q=332P%2B7V%20Kerdasa%2C%20Giza%2C%20Egypt&output=embed';

export default function SiteFooter({ language }) {
  const copy = siteCopy[language];
  const serviceLinks = language === 'ar'
    ? ['خطوط الإنتاج', 'ماكينات التعبئة والتغطية', 'ماكينات التغليف', 'كشف المعادن', 'حلول نهاية الخط', 'الصيانة والدعم']
    : ['Production Lines', 'Filling & Capping Machines', 'Packaging Machines', 'Metal Detection', 'End of Line Solutions', 'Maintenance & Support'];
  return <footer className="m-preview-footer">
    <div className="m-preview-container m-preview-footer-grid">
      <section className="m-preview-footer-brand">
        <a className="m-preview-brand" href="/"><img src="/assets/embedded/embedded-01.png" alt="El Mashour logo" /><span><strong>{language === 'ar' ? 'المشهور' : 'EL MASHOUR'}</strong><small>{copy.tagline}</small></span></a>
        <p>{copy.footerAbout}</p>
        <a href="mailto:elmashour.business@gmail.com">elmashour.business@gmail.com</a>
        <a href="tel:+201016280756" dir="ltr">+20 101 628 0756</a>
      </section>
      <section><h2>{copy.quickLinks}</h2><ul>{siteRoutes.map(route => <li key={route.path}><a href={route.path}>{route.label[language]}</a></li>)}</ul></section>
      <section><h2>{copy.ourServices}</h2><ul>{serviceLinks.map(label => <li key={label}><a href="/services">{label}</a></li>)}</ul></section>
      <section className="m-preview-map"><h2>{copy.visitUs}</h2><p>332P+7V Kerdasa, Giza, Egypt</p><iframe title={copy.visitUs} src={MAP_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><a href={MAP_URL} target="_blank" rel="noreferrer">{copy.map} ↗</a></section>
    </div>
    <div className="m-preview-footer-bottom"><div className="m-preview-container">© {new Date().getFullYear()} El Mashour. {copy.rights}</div></div>
  </footer>;
}
