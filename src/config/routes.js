/** Canonical public route list, aligned with the V28 production application. */
export const siteRoutes = Object.freeze([
  { path: "/", key: "home", label: { ar: "الرئيسية", en: "Home" } },
  { path: "/about", key: "about", label: { ar: "من نحن", en: "About" } },
  { path: "/portfolio", key: "portfolio", label: { ar: "أعمالنا", en: "Portfolio" } },
  { path: "/spare-parts", key: "spareParts", label: { ar: "قطع الغيار", en: "Spare Parts" } },
  { path: "/services", key: "services", label: { ar: "خدماتنا", en: "Services" } },
  { path: "/contact", key: "contact", label: { ar: "تواصل معنا", en: "Contact" } },
]);

export const findSiteRoute = (pathname) =>
  siteRoutes.find((route) => route.path === pathname) ?? null;
