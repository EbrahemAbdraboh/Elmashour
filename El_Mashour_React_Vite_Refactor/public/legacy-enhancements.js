(function(){
  const PHONE_DISPLAY='+20 101 628 0756';
  const PHONE_HREF='tel:+201016280756';
  const FB='https://www.facebook.com/elmashour.business';
  const MAP='https://www.google.com/maps/search/?api=1&query=332P%2B7V%20Kerdasa';
  const icon={
    phone:'<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M6.6 2.8 9.2 3.4l1.2 3.4-1.8 1.8a13.4 13.4 0 0 0 6.8 6.8l1.8-1.8 3.4 1.2.6 2.6c.2 1-.6 1.9-1.6 2-7.9.5-14.2-5.8-13.7-13.7.1-1 .9-1.8 1.9-1.7Z"/></svg>',
    facebook:'<svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true"><path fill="currentColor" d="M13.7 21v-7.1h2.4l.4-2.8h-2.8V9.3c0-.8.2-1.4 1.4-1.4h1.5V5.2c-.7-.1-1.4-.2-2.2-.2-2.2 0-3.7 1.3-3.7 3.8v2.3H8.3v2.8h2.4V21h3Z"/></svg>',
    instagram:'<svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true"><rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.7" r="1.1" fill="currentColor"/></svg>',
    map:'<svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z"/><path fill="none" stroke="currentColor" stroke-width="2" d="M9 3v15m6-12v15"/></svg>'
  };
  function addTopbar(){
    if(document.querySelector('.site-topbar')) return;
    const header=document.querySelector('.site-header');
    if(!header || !header.parentNode) return;
    const bar=document.createElement('div');
    bar.className='site-topbar';
    bar.setAttribute('role','region');
    bar.setAttribute('aria-label','Quick contact bar');
    bar.innerHTML='<div class="container site-topbar-inner">'+
      '<div class="site-topbar-contact"><a class="site-topbar-phone" href="'+PHONE_HREF+'" aria-label="Phone"><span class="site-topbar-phone-icon">'+icon.phone+'</span><span>'+PHONE_DISPLAY+'</span></a><span class="site-topbar-note">Food Packaging Machines</span></div>'+
      '<div class="site-topbar-socials" aria-label="Social links">'+
      '<a class="site-topbar-social" href="'+FB+'" target="_blank" rel="noopener noreferrer" aria-label="Facebook">'+icon.facebook+'</a>'+
      '<a class="site-topbar-social" href="https://www.instagram.com/elmashour.business/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">'+icon.instagram+'</a>'+
      '<a class="site-topbar-social" href="'+MAP+'" target="_blank" rel="noopener noreferrer" aria-label="Google Maps">'+icon.map+'</a>'+
      '</div></div>';
    header.parentNode.insertBefore(bar,header);
  }
  function init(){
    addTopbar();
    // Keep the existing React scroll state as the source of truth; this fallback ensures the class is present even if React rerenders.
    const sync=()=>{const h=document.querySelector('.site-header'); if(h) h.classList.toggle('is-scrolled',window.scrollY>12)};
    sync(); window.addEventListener('scroll',sync,{passive:true});
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else setTimeout(init,0);
  const observer=new MutationObserver(()=>{if(!document.querySelector('.site-topbar')) addTopbar();});
  observer.observe(document.documentElement,{childList:true,subtree:true});
})();
;
(function(){
  function numberServices(){document.querySelectorAll('.services-detail-section .service-row').forEach((row,i)=>{const v=String(i+1).padStart(2,'0'); if(row.getAttribute('data-service-index')!==v) row.setAttribute('data-service-index',v)})}
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>setTimeout(numberServices,50)); else setTimeout(numberServices,100);
  new MutationObserver(numberServices).observe(document.body,{childList:true,subtree:true});
})();
;
/* V5 DOM enhancer superseded by V8 robust enhancer. */
;
(function(){
  'use strict';
  const ROUTES={
    '/':{ar:['المشهور | ماكينات تغليف وخطوط إنتاج غذائية','المشهور لتجهيز وصيانة خطوط إنتاج المواد الغذائية، ماكينات التغليف، كشف المعادن، قطع الغيار والدعم الفني.'],en:['El Mashour | Food Packaging Machines','El Mashour provides food packaging machines, production-line solutions, spare parts, maintenance and technical support.']},
    '/about':{ar:['من نحن | المشهور لماكينات التغليف','تعرف على المشهور وخبرتنا في تجهيز وتطوير وصيانة خطوط إنتاج الصناعات الغذائية.'],en:['About El Mashour | Food Packaging Machines','Learn about El Mashour, our engineering approach and experience in food production-line solutions.']},
    '/services':{ar:['خدماتنا | المشهور','حلول وخدمات المشهور لتجهيز خطوط الإنتاج، التغليف، الصيانة، قطع الغيار والدعم الفني.'],en:['Services | El Mashour','Production-line, packaging, maintenance, spare-parts and technical-support services from El Mashour.']},
    '/portfolio':{ar:['أعمالنا | المشهور','استعرض حلول ومشروعات المشهور في ماكينات التغليف وتجهيز خطوط إنتاج الصناعات الغذائية.'],en:['Portfolio | El Mashour','Explore El Mashour projects and solutions for food packaging and production lines.']},
    '/spare-parts':{ar:['قطع الغيار | المشهور','قطع غيار وحلول دعم فني للمساعدة في استمرارية تشغيل خطوط الإنتاج بكفاءة.'],en:['Spare Parts | El Mashour','Spare parts and technical support solutions designed to help production lines run reliably.']},
    '/contact':{ar:['تواصل معنا | المشهور','تواصل مع المشهور للحصول على استشارة وحلول لخطوط إنتاج وتغليف الصناعات الغذائية.'],en:['Contact El Mashour | Food Packaging Machines','Contact El Mashour for consultation and solutions for food packaging and production lines.']}
  };
  const PHONE='+201016280756', WA='https://wa.me/201016280756', FB='https://www.facebook.com/elmashour.business', IG='https://www.instagram.com/elmashour.business/', MAP='https://www.google.com/maps/search/?api=1&query=332P%2B7V%20Kerdasa';
  function upsertMeta(name,content,attr){let q=attr==='property'?`meta[property="${name}"]`:`meta[name="${name}"]`;let el=document.head.querySelector(q);if(!el){el=document.createElement('meta');el.setAttribute(attr||'name',name);document.head.appendChild(el)}el.setAttribute('content',content)}
  function upsertLink(rel,href){let el=document.head.querySelector(`link[rel="${rel}"]`);if(!el){el=document.createElement('link');el.rel=rel;document.head.appendChild(el)}el.href=href}
  function routeKey(){let p=location.pathname.replace(/\/+$/,'')||'/';return p}
  function syncSEO(){
    const key=routeKey(), data=ROUTES[key]||ROUTES['/'];
    const lang=(document.documentElement.lang||'ar').toLowerCase().startsWith('en')?'en':'ar';
    const [title,desc]=data[lang]; document.title=title; document.documentElement.lang=lang; document.documentElement.dir=lang==='ar'?'rtl':'ltr';
    upsertMeta('description',desc,'name'); upsertMeta('robots','index, follow','name');
    const canonical=(location.protocol==='http:'||location.protocol==='https:')?location.origin+(key==='/'?'':key):''; if(canonical) upsertLink('canonical',canonical);
    upsertMeta('og:title',title,'property');upsertMeta('og:description',desc,'property');upsertMeta('og:type','website','property');if(canonical) upsertMeta('og:url',canonical,'property');
    upsertMeta('twitter:title',title,'name');upsertMeta('twitter:description',desc,'name');
    let ld=document.getElementById('el-mashour-schema'); if(!ld){ld=document.createElement('script');ld.id='el-mashour-schema';ld.type='application/ld+json';document.head.appendChild(ld)}
    ld.textContent=JSON.stringify({
      '@context':'https://schema.org','@type':'LocalBusiness','name':'El Mashour','alternateName':'المشهور','description':desc,'telephone':'+20 101 628 0756','email':'elmashour.business@gmail.com','url':canonical||undefined,
      'address':{'@type':'PostalAddress','addressLocality':'Kerdasa','addressRegion':'Giza','addressCountry':'EG'},
      'hasMap':MAP,'sameAs':[FB],'areaServed':'Egypt','knowsAbout':['Food Packaging Machines','Production Lines','Packaging','Metal Detection','Maintenance','Spare Parts']
    });
  }
  function restructureFooter(){
    document.querySelectorAll('.site-footer').forEach(footer=>{
      const grid=footer.querySelector('.footer-grid'), map=footer.querySelector('.footer-map-wrap');
      if(grid&&map&&!grid.contains(map)){map.classList.add('footer-map-column');grid.appendChild(map)}
      footer.querySelectorAll('.footer-bottom span').forEach(el=>{el.textContent=el.textContent.replace(/\.+\s*$/,'')});
    });
  }
  function markConversions(){
    document.querySelectorAll('a[href^="tel:"]:not([data-ads-marked]),a[href*="wa.me"]:not([data-ads-marked])').forEach(a=>{a.dataset.adsMarked='1';a.addEventListener('click',()=>{const event=a.href.startsWith('tel:')?'phone_click':'whatsapp_click';if(typeof window.gtag==='function')window.gtag('event',event,{event_category:'lead',transport_type:'beacon'});window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:event,ads_conversion_ready:true})})});
    document.querySelectorAll('a:not([data-ads-cta])').forEach(a=>{const t=(a.textContent||'').trim().toLowerCase();if(/quote|consult|استشارة|عرض سعر|تواصل/.test(t)){a.dataset.adsCta='1';a.addEventListener('click',()=>{if(typeof window.gtag==='function')window.gtag('event','generate_lead',{event_category:'engagement',event_label:t})})}});
  }
  function run(){restructureFooter();syncSEO();markConversions()}
  const schedule=()=>setTimeout(run,80);
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',schedule);else schedule();
  window.addEventListener('popstate',schedule);window.addEventListener('hashchange',schedule);
  document.addEventListener('click',e=>{const a=e.target.closest&&e.target.closest('a');if(a&&a.getAttribute('href')&&a.getAttribute('href').startsWith('/'))schedule()},{capture:true});
  const obs=new MutationObserver(()=>{clearTimeout(window.__emV6Timer);window.__emV6Timer=setTimeout(run,120)});obs.observe(document.body,{childList:true,subtree:true});
})();
;
(function(){
  'use strict';
  const SERVICES=[
    ['Production Lines','/services'],
    ['Filling & Capping Machines','/services'],
    ['Packaging Machines','/services'],
    ['Metal Detection','/services'],
    ['End of Line Solutions','/services'],
    ['Maintenance & Support','/services']
  ];
  const MAP_URL='https://www.google.com/maps/search/?api=1&query=332P%2B7V%20Kerdasa';
  function buildIndustrialFooter(){
    document.querySelectorAll('.site-footer').forEach(function(footer){
      const grid=footer.querySelector('.footer-grid');
      if(!grid || grid.dataset.v7Ready==='1') return;
      grid.dataset.v7Ready='1';
      const existingServices=grid.querySelector('.footer-services-col');
      if(!existingServices){
        const col=document.createElement('div');
        col.className='footer-col footer-services-col';
        col.innerHTML='<h4>Our Services</h4><ul>'+SERVICES.map(function(item){return '<li><a href="'+item[1]+'">'+item[0]+'</a></li>';}).join('')+'</ul>';
        const contact=grid.querySelector('.footer-col:nth-of-type(3)') || grid.querySelectorAll('.footer-col')[1];
        if(contact) grid.insertBefore(col,contact); else grid.appendChild(col);
      }
      let map=grid.querySelector('.footer-map-wrap');
      if(!map){
        map=document.createElement('div');
        map.className='footer-map-wrap footer-map-column';
        map.innerHTML='<div class="footer-map-head"><h3 class="footer-map-title">Visit Us</h3><span class="footer-map-code">332P+7V Kerdasa</span></div>'+
          '<iframe class="footer-map-frame" title="El Mashour location map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=332P%2B7V%20Kerdasa%2C%20Giza%2C%20Egypt&output=embed"></iframe>'+
          '<div class="footer-map-actions"><span class="footer-map-address">332P+7V Kerdasa, Giza, Egypt</span><a class="footer-map-link" href="'+MAP_URL+'" target="_blank" rel="noopener noreferrer">VIEW ON MAP ↗</a></div>';
        grid.appendChild(map);
      } else {
        map.classList.add('footer-map-column');
        const head=map.querySelector('.footer-map-head');
        if(head) head.innerHTML='<h3 class="footer-map-title">Visit Us</h3><span class="footer-map-code">332P+7V Kerdasa</span>';
        let frame=map.querySelector('.footer-map-frame');
        if(!frame){
          frame=document.createElement('iframe');
          frame.className='footer-map-frame';
          frame.title='El Mashour location map';
          frame.loading='lazy';
          frame.referrerPolicy='no-referrer-when-downgrade';
          frame.src='https://www.google.com/maps?q=332P%2B7V%20Kerdasa%2C%20Giza%2C%20Egypt&output=embed';
          const headEl=map.querySelector('.footer-map-head');
          if(headEl) headEl.after(frame); else map.prepend(frame);
        }
        let actions=map.querySelector('.footer-map-actions');
        if(!actions){
          actions=document.createElement('div');
          actions.className='footer-map-actions';
          actions.innerHTML='<span class="footer-map-address">332P+7V Kerdasa, Giza, Egypt</span><a class="footer-map-link" href="'+MAP_URL+'" target="_blank" rel="noopener noreferrer">VIEW ON MAP ↗</a>';
          map.appendChild(actions);
        }
      }
      const bottom=footer.querySelector('.footer-bottom');
      if(bottom){bottom.style.justifyContent='center';bottom.style.textAlign='center';}
    });
  }
  const run=()=>setTimeout(buildIndustrialFooter,120);
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',run); else run();
  new MutationObserver(function(){run()}).observe(document.body,{childList:true,subtree:true});
  window.addEventListener('popstate',run);
})();
;
(function(){
  const stories=[
    {
      ar:{text:'ساعدتنا حلول المشهور على تنظيم خط الإنتاج بصورة أكثر كفاءة، وأصبح التشغيل اليومي أكثر استقرارًا وسهولة في المتابعة.',meta:'إدارة المصنع · الصناعات الغذائية'},
      en:{text:'El Mashour solutions helped us organize our production line more efficiently, making daily operation more stable and easier to monitor.',meta:'Factory Management · Food Manufacturing'}
    },
    {
      ar:{text:'من اختيار الماكينات إلى التشغيل والدعم الفني، كان التركيز على احتياجات المصنع الفعلية سببًا في تطوير طريقة العمل لدينا.',meta:'فريق الإنتاج · مصنع تعبئة وتغليف'},
      en:{text:'From machine selection to commissioning and technical support, the focus on our factory’s actual needs helped us improve the way we work.',meta:'Production Team · Packaging Factory'}
    },
    {
      ar:{text:'تطوير خط التعبئة لم يكن مجرد إضافة ماكينة جديدة؛ أصبح لدينا تصور أوضح للتوسع وتحسين جودة التشغيل مع نمو الإنتاج.',meta:'العمليات · مصنع أغذية'},
      en:{text:'Upgrading the packaging line was more than adding a new machine; it gave us a clearer path to scale and improve operating quality as production grew.',meta:'Operations · Food Factory'}
    },
    {
      ar:{text:'المتابعة بعد التركيب والتدريب الفني أعطيا فريقنا ثقة أكبر في التشغيل والصيانة اليومية وتقليل التوقفات غير المخططة.',meta:'الفريق الفني · التصنيع'},
      en:{text:'Post-installation follow-up and technical training gave our team greater confidence in daily operation and maintenance while reducing unplanned downtime.',meta:'Technical Team · Manufacturing'}
    }
  ];
  const copy={
    ar:{
      aria:'قصص العملاء',
      eyebrow:'قصص العملاء',
      title:'ثقة المصانع. ونتائج ملموسة.',
      subtitle:'تجارب من مصنّعي الأغذية الذين تعاونوا مع المشهور لتحسين الإنتاج والتعبئة وأداء المصنع اليومي.',
      navigation:'التنقل بين قصص العملاء',
      story:'القصة'
    },
    en:{
      aria:'Client Stories',
      eyebrow:'Client Stories',
      title:'Trusted by Factories. Driven by Results.',
      subtitle:'Experiences from food manufacturers who worked with El Mashour to improve production, packaging and day-to-day factory performance.',
      navigation:'Client stories navigation',
      story:'Story'
    }
  };
  function currentLang(){
    try{
      const stored=window.localStorage.getItem('elmashour_lang');
      if(stored==='ar'||stored==='en') return stored;
    }catch(e){}
    const htmlLang=document.documentElement.lang;
    return htmlLang==='en'?'en':'ar';
  }
  function internalPage(){ return true; }
  function renderStories(sec,lang,idx){
    const t=copy[lang]||copy.ar;
    sec.setAttribute('aria-label',t.aria);
    sec.setAttribute('dir',lang==='ar'?'rtl':'ltr');
    sec.innerHTML='<div class="container"><div class="client-stories-head"><div class="client-stories-eyebrow">'+t.eyebrow+'</div><h2 class="client-stories-title">'+t.title+'</h2><p class="client-stories-sub">'+t.subtitle+'</p></div><div class="client-stories-slider">'+stories.map((x,i)=>{const y=x[lang]||x.en;return '<article class="client-story '+(i===idx?'active':'')+'" aria-hidden="'+(i===idx?'false':'true')+'"><div class="client-story-quote">“</div><p class="client-story-text">'+y.text+'</p><div class="client-story-meta">'+y.meta+'</div></article>'}).join('')+'</div><div class="client-story-controls" aria-label="'+t.navigation+'">'+stories.map((_,i)=>'<button class="client-story-dot '+(i===idx?'active':'')+'" type="button" aria-label="'+t.story+' '+(i+1)+'"></button>').join('')+'</div></div>';
  }
  function mountStories(){
    if(!internalPage())return;
    const footer=document.querySelector('.site-footer');
    if(!footer)return;
    let sec=document.querySelector('.client-stories');
    if(!sec){
      sec=document.createElement('section');
      sec.className='client-stories';
      footer.parentNode.insertBefore(sec,footer);
      sec.__storiesIdx=0;
      sec.__storiesTimer=null;
      sec.__storiesLang=null;
      sec.addEventListener('mouseenter',()=>clearInterval(sec.__storiesTimer));
      sec.addEventListener('mouseleave',()=>restart(sec));
      sec.addEventListener('click',e=>{
        const dot=e.target.closest('.client-story-dot');
        if(!dot)return;
        const dots=[...sec.querySelectorAll('.client-story-dot')];
        const i=dots.indexOf(dot);
        if(i>=0){go(sec,i);restart(sec);}
      });
    }
    const lang=currentLang();
    if(sec.__storiesLang!==lang){
      renderStories(sec,lang,sec.__storiesIdx||0);
      sec.__storiesLang=lang;
    }
    if(!sec.__storiesTimer)restart(sec);
  }
  function go(sec,n){
    const slides=[...sec.querySelectorAll('.client-story')];
    const dots=[...sec.querySelectorAll('.client-story-dot')];
    if(!slides.length)return;
    sec.__storiesIdx=(n+slides.length)%slides.length;
    slides.forEach((s,i)=>{s.classList.toggle('active',i===sec.__storiesIdx);s.setAttribute('aria-hidden',i===sec.__storiesIdx?'false':'true')});
    dots.forEach((d,i)=>d.classList.toggle('active',i===sec.__storiesIdx));
  }
  function restart(sec){
    clearInterval(sec.__storiesTimer);
    sec.__storiesTimer=setInterval(()=>go(sec,(sec.__storiesIdx||0)+1),5200);
  }
  function unifyIcons(){
    document.querySelectorAll('.social-btn,.social-btn-navy').forEach(btn=>{
      btn.classList.remove('social-btn-navy');
      if(!btn.classList.contains('social-btn'))btn.classList.add('social-btn');
    });
  }
  function run(){unifyIcons();mountStories();}
  let queued=false;
  const schedule=()=>{if(queued)return;queued=true;setTimeout(()=>{queued=false;run()},120)};
  new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true});
  new MutationObserver(schedule).observe(document.documentElement,{attributes:true,attributeFilter:['lang','dir']});
  window.addEventListener('popstate',()=>setTimeout(run,80));
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
})();
;
(function(){
  'use strict';
  const SERVICES=[
    ['Production Lines','خطوط الإنتاج'],
    ['Filling & Capping Machines','ماكينات التعبئة والتغطية'],
    ['Packaging Machines','ماكينات التغليف'],
    ['Metal Detection','كاشف المعادن'],
    ['End of Line Solutions','حلول نهاية خط الإنتاج'],
    ['Maintenance & Support','الصيانة والدعم الفني']
  ];
  const FB='https://www.facebook.com/elmashour.business';
  const PHONE='+20 101 628 0756';
  function lang(){return (document.documentElement.lang||'ar').toLowerCase().startsWith('en')?'en':'ar'}
  function icon(type){
    if(type==='facebook') return '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M13.7 21v-7.1h2.4l.4-2.8h-2.8V9.3c0-.8.2-1.4 1.4-1.4h1.5V5.2c-.7-.1-1.4-.2-2.2-.2-2.2 0-3.7 1.3-3.7 3.8v2.3H8.3v2.8h2.4V21h3Z"/></svg>';
    return '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.7" r="1.1" fill="currentColor"/></svg>';
  }
  function updateFooter(){
    const ar=lang()==='ar';
    document.querySelectorAll('.site-footer').forEach(footer=>{
      const col=footer.querySelector('.footer-services-col'); if(!col) return;
      const h=col.querySelector('h4'); if(h) h.textContent=ar?'خدماتنا':'Our Services';
      const links=[...col.querySelectorAll('li a')];
      links.forEach((a,i)=>{if(SERVICES[i]) a.textContent=ar?SERVICES[i][1]:SERVICES[i][0]});
    });
  }
  function addSocialCards(){
    document.querySelectorAll('.contact-section .contact-channels').forEach(wrap=>{
      const list=wrap.querySelector('.channel-list'); if(!list) return;
      let box=wrap.querySelector('.contact-social-cards');
      if(!box){
        box=document.createElement('div'); box.className='contact-social-cards';
        box.innerHTML='<a class="contact-social-card" href="'+FB+'" target="_blank" rel="noopener noreferrer"><span class="contact-social-icon">'+icon('facebook')+'</span><span><span class="contact-social-label"></span><span class="contact-social-value"></span></span></a><a class="contact-social-card" href="https://www.instagram.com/elmashour.business/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><span class="contact-social-icon">'+icon('instagram')+'</span><span><span class="contact-social-label"></span><span class="contact-social-value"></span></span></a>';
        list.after(box);
      }
      const cards=box.querySelectorAll('.contact-social-card');
      const ar=lang()==='ar';
      const copy=ar?[
        ['فيسبوك','تابعنا على Facebook'],
        ['إنستجرام','تابعنا على Instagram']
      ]:[
        ['Facebook','Follow us on Facebook'],
        ['Instagram','Follow us on Instagram']
      ];
      cards.forEach((c,i)=>{c.querySelector('.contact-social-label').textContent=copy[i][0];c.querySelector('.contact-social-value').textContent=copy[i][1]});
    });
  }
  function fixContactPhone(){
    document.querySelectorAll('.contact-section .channel-card[href^="tel:"], .contact-section .channel-card[href*="wa.me"]').forEach(card=>{
      const v=card.querySelector('.channel-value'); if(v) v.textContent=PHONE;
    });
  }
  function fixFooterContactAndRights(){
    const ar=lang()==='ar';
    document.querySelectorAll('.site-footer').forEach(footer=>{
      const phone=footer.querySelector('.footer-contact-row span');
      if(phone) phone.textContent=PHONE;
      const bottom=footer.querySelector('.footer-bottom span');
      if(bottom){
        const year=new Date().getFullYear();
        bottom.textContent='© '+year+' EL MASHOUR — FOOD PACKAGING MACHINES. '+(ar?'جميع الحقوق محفوظة':'ALL RIGHTS RESERVED')+'.';
        bottom.setAttribute('dir', ar?'rtl':'ltr');
      }
    });
  }
  function run(){updateFooter();addSocialCards();fixContactPhone();fixFooterContactAndRights()}
  let timer; function schedule(){clearTimeout(timer);timer=setTimeout(run,80)}
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',run); else run();
  new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true});
  new MutationObserver(schedule).observe(document.documentElement,{attributes:true,attributeFilter:['lang','dir']});
  window.addEventListener('popstate',schedule);
})();
