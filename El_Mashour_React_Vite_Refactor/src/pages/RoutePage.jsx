import { getRoute, siteCopy } from '../i18n/siteContent.js';

export default function RoutePage({ language }) {
  const route = getRoute(window.location.pathname);
  const copy = siteCopy[language];
  const isHome = route.key === 'home';
  return <main id="migration-content" className={`m-preview-main${isHome ? ' is-home' : ''}`}>
    <section className="m-preview-hero m-reveal" data-reveal>
      <div className="m-preview-container m-preview-hero-inner">
        <p className="m-preview-eyebrow">{isHome ? copy.homeEyebrow : copy.pageEyebrow}</p>
        <h1>{isHome ? copy.homeHeading : route.label[language]}</h1>
        <p className="m-preview-lead">{isHome ? copy.homeBody : route.description[language] || copy.pageBody}</p>
        <div className="m-preview-hero-actions"><a className="m-preview-quote" href="/contact">{copy.contact}</a><a className="m-preview-secondary" href="/services">{copy.services}</a></div>
      </div>
      <div className="m-preview-hero-art"><img src={isHome ? '/assets/embedded/embedded-02.jpg' : '/assets/embedded/embedded-18.jpg'} alt="" /></div>
    </section>
    <section className="m-preview-summary m-preview-container m-reveal" data-reveal>
      <p className="m-preview-eyebrow">{route.label[language]}</p>
      <h2>{route.title[language]}</h2>
      <p>{route.description[language]}</p>
      <div className="m-preview-summary-meta"><span>01 / 06</span><span>{copy.previewLabel}</span></div>
    </section>
    {route.key === 'about' && <section className="m-about m-preview-container m-reveal" data-reveal aria-labelledby="m-about-title">
      <p className="m-preview-eyebrow">{copy.aboutEyebrow}</p>
      <h2 id="m-about-title">{copy.aboutTitle}</h2>
      <p className="m-home-section-lead">{copy.aboutLead}</p>
      <div className="m-about-grid">{copy.aboutPillars.map((item, index) => <article className="m-about-card" key={item.title}>
        <span className="m-home-card-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p>
      </article>)}</div>
      <aside className="m-about-note"><p>{copy.aboutNote}</p><a className="m-preview-quote" href="/contact">{copy.contact}</a></aside>
    </section>}
    {route.key === 'contact' && <section className="m-contact m-preview-container m-reveal" data-reveal aria-labelledby="m-contact-title">
      <p className="m-preview-eyebrow">{copy.contactEyebrow}</p><h2 id="m-contact-title">{copy.contactTitle}</h2><p className="m-home-section-lead">{copy.contactLead}</p>
      <div className="m-contact-grid">
        <article className="m-contact-card"><span className="m-contact-icon" aria-hidden="true">☎</span><h3>{copy.phoneLabel}</h3><p>{copy.phoneHelp}</p><a href="tel:+201016280756" dir="ltr">+20 101 628 0756</a></article>
        <article className="m-contact-card"><span className="m-contact-icon" aria-hidden="true">✉</span><h3>{copy.emailLabel}</h3><p>{copy.emailHelp}</p><a href="mailto:elmashour.business@gmail.com">elmashour.business@gmail.com</a></article>
        <article className="m-contact-card"><span className="m-contact-icon" aria-hidden="true">⌖</span><h3>{copy.locationLabel}</h3><p>{copy.locationHelp}</p><a href="https://www.google.com/maps/search/?api=1&query=332P%2B7V%20Kerdasa" target="_blank" rel="noreferrer">{copy.map} ↗</a></article>
      </div>
      <aside className="m-contact-note"><strong>{copy.contactNoteTitle}</strong><p>{copy.contactNoteBody}</p><a className="m-preview-quote" href="mailto:elmashour.business@gmail.com?subject=El%20Mashour%20Inquiry">{copy.emailUs}</a></aside>
    </section>}
    {route.key === 'portfolio' && <section className="m-portfolio-note m-preview-container m-reveal" data-reveal aria-labelledby="m-portfolio-title">
      <div className="m-portfolio-note-mark" aria-hidden="true">EM</div><h2 id="m-portfolio-title">{copy.portfolioTitle}</h2><p>{copy.portfolioBody}</p><a className="m-preview-quote" href="/contact">{copy.contact}</a>
    </section>}
    {route.key === 'services' && <section className="m-services m-preview-container m-reveal" data-reveal aria-labelledby="m-services-title">
      <p className="m-preview-eyebrow">{copy.servicesEyebrow}</p><h2 id="m-services-title">{copy.servicesTitle}</h2><p className="m-home-section-lead">{copy.servicesLead}</p>
      <div className="m-services-grid">{copy.serviceCards.map((item, index) => <article className="m-service-card" key={item.title}>
        <div className="m-service-card-image"><img src={item.image} alt="" loading="lazy" /></div>
        <div className="m-service-card-content"><span className="m-home-card-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p><a href="/contact">{copy.contact} <span aria-hidden="true">↗</span></a></div>
      </article>)}</div>
      <aside className="m-services-note"><strong>{copy.servicesNoteTitle}</strong><p>{copy.servicesNoteBody}</p><a className="m-preview-quote" href="/contact">{copy.contact}</a></aside>
    </section>}
    {route.key === 'spareParts' && <section className="m-spares m-preview-container m-reveal" data-reveal aria-labelledby="m-spares-title">
      <p className="m-preview-eyebrow">{copy.sparesEyebrow}</p><h2 id="m-spares-title">{copy.sparesTitle}</h2><p className="m-home-section-lead">{copy.sparesLead}</p>
      <div className="m-spares-grid">{copy.spareCategories.map((item, index) => <article className="m-spare-card" key={item.title}>
        <div className="m-spare-card-image"><img src={item.image} alt="" loading="lazy" /></div>
        <div className="m-spare-card-content"><span className="m-home-card-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p><a href="/contact">{copy.spareInquiry} <span aria-hidden="true">↗</span></a></div>
      </article>)}</div>
      <aside className="m-spares-note"><strong>{copy.sparesNoteTitle}</strong><p>{copy.sparesNoteBody}</p><a className="m-preview-quote" href="/contact">{copy.contact}</a></aside>
    </section>}
    {isHome && <>
      <section className="m-home-solutions m-preview-container m-reveal" data-reveal aria-labelledby="m-home-solutions-title">
        <p className="m-preview-eyebrow">{copy.solutionsEyebrow}</p>
        <h2 id="m-home-solutions-title">{copy.solutionsTitle}</h2>
        <p className="m-home-section-lead">{copy.solutionsLead}</p>
        <div className="m-home-card-grid">
          {copy.solutionCards.map((card, index) => <article className="m-home-card m-reveal" data-reveal style={{ "--m-reveal-delay": `${index * 80}ms` }} key={card.title}>
            <span className="m-home-card-number">0{index + 1}</span>
            <h3>{card.title}</h3><p>{card.body}</p>
            <a href={card.href}>{copy.learnMore} <span aria-hidden="true">↗</span></a>
          </article>)}
        </div>
      </section>
      <section className="m-home-process m-preview-container m-reveal" data-reveal aria-labelledby="m-home-process-title">
        <p className="m-preview-eyebrow">{copy.processEyebrow}</p>
        <h2 id="m-home-process-title">{copy.processTitle}</h2>
        <p className="m-home-section-lead">{copy.processLead}</p>
        <ol className="m-home-process-grid">
          {copy.processSteps.map((step, index) => <li className="m-home-process-step" key={step.title}>
            <span className="m-home-process-number">0{index + 1}</span>
            <div><h3>{step.title}</h3><p>{step.body}</p></div>
          </li>)}
        </ol>
      </section>
      <section className="m-home-cta m-reveal" data-reveal>
        <div className="m-preview-container m-home-cta-inner">
          <div><p className="m-preview-eyebrow">{copy.ctaEyebrow}</p><h2>{copy.ctaTitle}</h2><p>{copy.ctaBody}</p></div>
          <a className="m-preview-quote" href="/contact">{copy.contact}</a>
        </div>
      </section>
    </>}
  </main>;
}
