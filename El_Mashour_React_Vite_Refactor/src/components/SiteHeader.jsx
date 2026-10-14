import { useState } from 'react';
import { siteCopy, siteRoutes } from '../i18n/siteContent.js';

const PHONE = 'tel:+201016280756';
const FACEBOOK = 'https://www.facebook.com/elmashour.business';
const INSTAGRAM = 'https://www.instagram.com/elmashour.business/';

export default function SiteHeader({ language, onToggleLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const copy = siteCopy[language];
  return <>
    <a className="m-preview-skip" href="#migration-content">{copy.skip}</a>
    <div className="m-preview-topbar">
      <div className="m-preview-container m-preview-topbar-inner">
        <a href={PHONE} dir="ltr">+20 101 628 0756</a>
        <span>{copy.topNote}</span>
        <div className="m-preview-socials">
          <a href={FACEBOOK} target="_blank" rel="noreferrer">Facebook</a>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>
    </div>
    <header className="m-preview-header">
      <div className="m-preview-container m-preview-header-inner">
        <a className="m-preview-brand" href="/" aria-label="El Mashour home">
          <img src="/assets/embedded/embedded-01.png" alt="شعار المشهور" />
          <span><strong>{language === 'ar' ? 'المشهور' : 'EL MASHOUR'}</strong><small>{copy.tagline}</small></span>
        </a>
        <button className="m-preview-menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="m-preview-nav" onClick={() => setMenuOpen(v => !v)}>{menuOpen ? '✕' : '☰'} <span className="m-preview-sr-only">Menu</span></button>
        <nav id="m-preview-nav" className={`m-preview-nav${menuOpen ? ' is-open' : ''}`} aria-label={language === 'ar' ? 'التنقل الرئيسي' : 'Main navigation'}>
          {siteRoutes.map(route => <a key={route.path} href={route.path} aria-current={location.pathname.replace(/\/+$/, '') === route.path || (route.path === '/' && location.pathname === '/') ? 'page' : undefined} onClick={() => setMenuOpen(false)}>{route.label[language]}</a>)}
        </nav>
        <div className="m-preview-actions">
          <button className="m-preview-language" type="button" onClick={onToggleLanguage}>{copy.switchLanguage}</button>
          <a className="m-preview-quote" href="/contact">{copy.quote}</a>
        </div>
      </div>
    </header>
  </>;
}
