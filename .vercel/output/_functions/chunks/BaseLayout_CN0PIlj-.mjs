import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, n as renderSlot, r as renderTemplate, k as renderComponent, o as renderScript, p as renderHead } from './astro/server_BZ7qSQHj.mjs';
import 'piccolore';
import 'clsx';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { X, Menu, Facebook, Instagram, Linkedin, MapPin, Mail } from 'lucide-react';
/* empty css                          */

const $$Astro$3 = createAstro();
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Container;
  const { maxWidth = "7xl", padding = true, class: className = "" } = Astro2.props;
  const maxWidthClasses = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    "2xl": "max-w-screen-2xl",
    "7xl": "max-w-7xl",
    full: "max-w-full"
  };
  const paddingClass = padding ? "px-4 sm:px-6 lg:px-8" : "";
  const classes = `${maxWidthClasses[maxWidth]} mx-auto ${paddingClass} ${className}`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "D:/SMF/website/atozbusiness/src/components/ui/Container.astro", void 0);

const $$Astro$2 = createAstro();
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navigation;
  const currentPath = Astro2.url.pathname;
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Locations", href: "/locations" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];
  function isActive(href) {
    if (href === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(href);
  }
  return renderTemplate`${maybeRenderHead()}<nav class="hidden lg:flex items-center gap-8"> ${navigation.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute([
    "text-gray-700 hover:text-primary-500 font-medium transition-colors relative py-2",
    isActive(item.href) && "text-primary-500"
  ], "class:list")}> ${item.name} ${isActive(item.href) && renderTemplate`<span class="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500"></span>`} </a>`)} <a href="/contact" class="btn btn-primary"> Get Started </a> </nav>`;
}, "D:/SMF/website/atozbusiness/src/components/layout/Navigation.astro", void 0);

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Locations", href: "/locations" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" }
];
function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "lg:hidden", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: "p-2 text-gray-700 hover:text-primary-500 transition-colors",
        "aria-label": "Toggle menu",
        children: isOpen ? /* @__PURE__ */ jsx(X, { size: 28 }) : /* @__PURE__ */ jsx(Menu, { size: 28 })
      }
    ),
    isOpen && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "fixed inset-0 bg-black bg-opacity-50 z-40",
          onClick: () => setIsOpen(false)
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "fixed top-[136px] right-0 bottom-0 w-full sm:w-80 bg-white shadow-xl z-50 animate-slide-down", children: /* @__PURE__ */ jsxs("nav", { className: "p-6 space-y-4", children: [
        navigation.map((item) => /* @__PURE__ */ jsx(
          "a",
          {
            href: item.href,
            className: "block py-3 px-4 text-lg font-medium text-gray-700 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-colors",
            onClick: () => setIsOpen(false),
            children: item.name
          },
          item.href
        )),
        /* @__PURE__ */ jsx("div", { className: "pt-4 border-t border-gray-200", children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "/contact",
            className: "block w-full text-center py-3 px-6 bg-primary-500 text-white rounded-lg hover:bg-primary-600 font-medium transition-colors",
            onClick: () => setIsOpen(false),
            children: "Get Started"
          }
        ) })
      ] }) })
    ] })
  ] });
}

const BUSINESS_INFO = {
  name: "A to Z Business",
  tagline: "Official Typing, Residency & Business Setup Services – The A to Z Solution.",
  phone: "+971-50-3489891",
  whatsapp: "+971-50-3489891",
  email: "contact@atozbusiness.ae",
  website: "https://atozbusiness.ae"
};
const BUSINESS_HOURS = {
  weekdays: "Monday - Saturday: 8:00 AM - 9:00 PM"};
const LOCATIONS = {
  main: {
    name: "Khalidiya Branch",
    address: "Mohammed Alhur Al Suwaidi St, opposite Khalidiya Mall",
    area: "Khalidiya",
    city: "Abu Dhabi"},
  branch: {
    name: "Al Zahiyah Branch",
    address: "Al Zahiyah - E16 02",
    area: "Al Zahiyah",
    city: "Abu Dhabi",
    phone: "056 663 6476"}
};
const WHY_CHOOSE_US = [
  {
    title: "13+ Hours Daily Service",
    description: "We're open from 8 AM to 9 PM Monday to Saturday, providing extended hours to serve you better and meet urgent requirements.",
    icon: "Clock"
  },
  {
    title: "One-Stop Solution",
    description: "From visa services to company formation, TAMM services to attestation - we handle all your government documentation needs under one roof.",
    icon: "CheckCircle2"
  },
  {
    title: "Expert Team",
    description: "Our experienced professionals are well-versed in UAE government procedures, ensuring fast processing and accurate documentation every time.",
    icon: "Users"
  },
  {
    title: "Prime Location",
    description: "Conveniently located opposite Khalidiya Mall in Abu Dhabi with easy access, parking facilities, and proximity to government departments.",
    icon: "MapPin"
  }
];
const STATISTICS = {
  yearsInBusiness: "10+",
  clientsServed: "15,000+",
  successRate: "99%",
  servicesOffered: "20",
  officeLocations: "2"
};
const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Contact Us",
    description: "Call +971-50-3489891, WhatsApp, or visit our office in Khalidiya",
    icon: "Phone"
  },
  {
    step: 2,
    title: "Submit Documents",
    description: "Provide required documents - we'll guide you on exactly what you need",
    icon: "FileText"
  },
  {
    step: 3,
    title: "We Process",
    description: "Our expert team handles all government procedures and typing work",
    icon: "Settings"
  },
  {
    step: 4,
    title: "Receive Results",
    description: "Get your approved documents, visas, or licenses quickly and hassle-free",
    icon: "CheckCircle"
  }
];
const FAQS = [
  {
    question: "What are your business hours?",
    answer: "We're open Monday to Saturday from 8:00 AM to 9:00 PM. We are closed on Sundays."
  },
  {
    question: "Where is your office located?",
    answer: "Our main office is located on Mohammed Alhur Al Suwaidi Street, opposite Khalidiya Mall in Khalidiya, Abu Dhabi."
  },
  {
    question: "Do you provide same-day service?",
    answer: "Yes, we offer express services for urgent requirements. Contact us to check availability for your specific service."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, credit/debit cards, and bank transfers for your convenience."
  },
  {
    question: "Can you help with Golden Visa applications?",
    answer: "Absolutely! We provide complete assistance for Golden Visa applications with expert guidance and documentation support to ensure approval."
  },
  {
    question: "Do you offer services in multiple languages?",
    answer: "Yes, our multilingual team can assist you in English, Arabic, Hindi, and Urdu."
  }
];

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 bg-white shadow-sm"> <!-- Top Bar --> <div class="bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-2"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="flex justify-between items-center text-sm"> <div class="hidden md:flex items-center gap-4"> <a${addAttribute(`tel:${BUSINESS_INFO.phone}`, "href")} class="flex items-center gap-2 hover:text-primary-100 transition-colors"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"> <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path> </svg> ${BUSINESS_INFO.phone} </a> <a${addAttribute(`mailto:${BUSINESS_INFO.email}`, "href")} class="flex items-center gap-2 hover:text-primary-100 transition-colors"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"> <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path> <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path> </svg> ${BUSINESS_INFO.email} </a> </div> <div class="ml-auto flex items-center gap-3"> <span class="hidden sm:inline">${BUSINESS_HOURS.weekdays}</span> </div> </div> ` })} </div> <!-- Main Header --> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="flex items-center justify-between h-20"> <!-- Logo --> <a href="/" class="flex items-center"> <img src="/assets/logo.svg" alt="AtoZ Business Services" class="h-12 w-auto"> </a> <!-- Desktop Navigation --> ${renderComponent($$result2, "Navigation", $$Navigation, {})} <!-- Mobile Menu Button --> ${renderComponent($$result2, "MobileMenu", MobileMenu, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/SMF/website/atozbusiness/src/components/layout/MobileMenu", "client:component-export": "default" })} </div> ` })} </header>`;
}, "D:/SMF/website/atozbusiness/src/components/layout/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const footerLinks = {
    services: [
      { name: "Golden Visa", href: "/services/golden-visa-services" },
      { name: "Family Visa", href: "/services/family-visa-typing" },
      { name: "Company Formation", href: "/services/new-company-formation" },
      { name: "PRO Services", href: "/services/pro-services" }
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Locations", href: "/locations" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" }
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Gallery", href: "/gallery" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" }
    ]
  };
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900 text-gray-300"> <!-- Main Footer --> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="py-16"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> <!-- Company Info --> <div> <img src="/assets/logo.svg" alt="AtoZ Business Services" class="h-12 w-auto mb-4 brightness-0 invert"> <p class="text-sm mb-4">
Your trusted partner for typing and PRO services in Abu Dhabi. Fast, reliable, and
            professional assistance for all your government documentation needs.
</p> <div class="flex gap-4"> <a${addAttribute(BUSINESS_INFO.website, "href")} class="text-gray-400 hover:text-white transition-colors" aria-label="Facebook"> ${renderComponent($$result2, "Facebook", Facebook, { "size": 20 })} </a> <a${addAttribute(BUSINESS_INFO.website, "href")} class="text-gray-400 hover:text-white transition-colors" aria-label="Instagram"> ${renderComponent($$result2, "Instagram", Instagram, { "size": 20 })} </a> <a${addAttribute(BUSINESS_INFO.website, "href")} class="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn"> ${renderComponent($$result2, "Linkedin", Linkedin, { "size": 20 })} </a> </div> </div> <!-- Quick Links - Services --> <div> <h3 class="text-white font-semibold text-lg mb-4">Our Services</h3> <ul class="space-y-2"> ${footerLinks.services.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-sm hover:text-white transition-colors"> ${link.name} </a> </li>`)} </ul> </div> <!-- Quick Links - Company --> <div> <h3 class="text-white font-semibold text-lg mb-4">Company</h3> <ul class="space-y-2"> ${footerLinks.company.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-sm hover:text-white transition-colors"> ${link.name} </a> </li>`)} </ul> </div> <!-- Contact Info --> <div> <h3 class="text-white font-semibold text-lg mb-4">Contact Us</h3> <ul class="space-y-4"> <li class="flex items-start gap-2 text-sm"> ${renderComponent($$result2, "MapPin", MapPin, { "size": 16, "className": "mt-1 flex-shrink-0 text-primary-500" })} <div> <span class="block text-white font-medium mb-1">${LOCATIONS.main.name}</span> <span class="block text-xs mb-1 text-gray-400">${LOCATIONS.main.address}</span> <a${addAttribute(`tel:${BUSINESS_INFO.phone}`, "href")} class="hover:text-white transition-colors text-primary-400 block"> ${BUSINESS_INFO.phone} </a> </div> </li> <li class="flex items-start gap-2 text-sm"> ${renderComponent($$result2, "MapPin", MapPin, { "size": 16, "className": "mt-1 flex-shrink-0 text-primary-500" })} <div> <span class="block text-white font-medium mb-1">${LOCATIONS.branch.name}</span> <span class="block text-xs mb-1 text-gray-400">${LOCATIONS.branch.address}</span> <a${addAttribute(`tel:${LOCATIONS.branch.phone}`, "href")} class="hover:text-white transition-colors text-primary-400 block"> ${LOCATIONS.branch.phone} </a> </div> </li> <li class="flex items-start gap-2 text-sm pt-2 border-t border-gray-800"> ${renderComponent($$result2, "Mail", Mail, { "size": 16, "className": "mt-1 flex-shrink-0" })} <a${addAttribute(`mailto:${BUSINESS_INFO.email}`, "href")} class="hover:text-white transition-colors"> ${BUSINESS_INFO.email} </a> </li> </ul> </div> </div> </div> ` })} <!-- Bottom Bar --> <div class="border-t border-gray-800"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="py-6 flex flex-col md:flex-row justify-between items-center text-sm"> <p>
© ${currentYear} AtoZ Business Services. All rights reserved.
</p> <div class="flex gap-6 mt-4 md:mt-0"> ${footerLinks.resources.slice(-2).map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="hover:text-white transition-colors"> ${link.name} </a>`)} </div> </div> ` })} </div> </footer>`;
}, "D:/SMF/website/atozbusiness/src/components/layout/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "D:/SMF/website/atozbusiness/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/SMF/website/atozbusiness/node_modules/astro/components/ClientRouter.astro", void 0);

const SEO_DEFAULTS = {
  siteName: "A to Z Business",
  siteUrl: "https://atozbusiness.ae",
  defaultTitle: "A to Z Business | Typing & PRO Services Abu Dhabi",
  defaultDescription: "Professional typing, PRO services, visa processing, and company formation in Abu Dhabi. Expert assistance for all your government documentation needs.",
  defaultImage: "/og-image.jpg",
  twitterHandle: "@atozbusiness",
  locale: "en_AE"};
const TARGET_KEYWORDS = {
  primary: [
    "typing center abu dhabi",
    "company formation abu dhabi",
    "visa typing khalidiya",
    "typing center khalidiya mall",
    "family visa typing abu dhabi"
  ]};
const PAGE_SEO = {
  home: {
    description: "Professional typing, PRO services, visa processing & company formation in Abu Dhabi. 13+ hours daily service in Khalidiya & Al Zahiyah. Call +971-50-3489891",
    keywords: [
      ...TARGET_KEYWORDS.primary,
      "typing center",
      "PRO services",
      "abu dhabi",
      "khalidiya"
    ]
  }};
const SOCIAL_DEFAULTS = {
  ogLocale: "en_AE"};
function getKeywordsString(keywords) {
  return keywords.join(", ");
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description = SEO_DEFAULTS.defaultDescription,
    ogImage = SEO_DEFAULTS.defaultImage,
    noindex = false
  } = Astro2.props;
  const canonicalURL = Astro2.site ? new URL(Astro2.url.pathname, Astro2.site).href : Astro2.url.href;
  const fullTitle = title === "Home" ? SEO_DEFAULTS.defaultTitle : `${title} | ${SEO_DEFAULTS.siteName}`;
  const fullOgImage = ogImage.startsWith("http") ? ogImage : `${SEO_DEFAULTS.siteUrl}${ogImage}`;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="canonical"', '><meta name="generator"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', ">", '<!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:locale"', '><meta property="og:site_name"', '><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:url"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:site"', '><!-- Progressive Web App --><meta name="theme-color" content="#2A5298"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="default">', "", "", "</head> <body> ", " <main> ", " </main> ", " ", " <script>\n      // Optimization for reduced motion\n      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;\n\n      const observerOptions = {\n        root: null,\n        rootMargin: '0px 0px -50px 0px', // Trigger slightly before the element enters\n        threshold: 0.1,\n      };\n\n      const observer = new IntersectionObserver((entries) => {\n        entries.forEach((entry) => {\n          if (entry.isIntersecting) {\n            const el = entry.target;\n            if (prefersReducedMotion) {\n              el.classList.add('is-visible');\n              observer.unobserve(el);\n              return;\n            }\n\n            const animation = el.getAttribute('data-animation') || 'animate-fade-in-up';\n\n            // Add classes in the next frame to prevent layout thrashing and flicker\n            requestAnimationFrame(() => {\n              el.classList.add(animation);\n              el.classList.add('is-visible');\n            });\n\n            observer.unobserve(el);\n          }\n        });\n      }, observerOptions);\n\n      function initReveal() {\n        const revealElements = document.querySelectorAll('.reveal');\n        revealElements.forEach((el) => {\n          // If already visible (e.g., top of page), trigger immediately\n          const rect = el.getBoundingClientRect();\n          if (rect.top < window.innerHeight && rect.bottom > 0) {\n            const animation = el.getAttribute('data-animation') || 'animate-fade-in-up';\n            el.classList.add(animation);\n            el.classList.add('is-visible');\n          } else {\n            observer.observe(el);\n          }\n        });\n      }\n\n      initReveal();\n      document.addEventListener('astro:after-swap', initReveal);\n    <\/script> </body> </html>"])), addAttribute(canonicalURL, "href"), addAttribute(Astro2.generator, "content"), fullTitle, addAttribute(fullTitle, "content"), addAttribute(description, "content"), noindex && renderTemplate`<meta name="robots" content="noindex, nofollow">`, addAttribute(canonicalURL, "content"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(fullOgImage, "content"), addAttribute(SEO_DEFAULTS.locale, "content"), addAttribute(SEO_DEFAULTS.siteName, "content"), addAttribute(canonicalURL, "content"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(fullOgImage, "content"), addAttribute(SEO_DEFAULTS.twitterHandle, "content"), renderComponent($$result, "ClientRouter", $$ClientRouter, {}), renderSlot($$result, $$slots["head"]), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "SmoothScroll", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/SMF/website/atozbusiness/src/components/ui/SmoothScroll", "client:component-export": "default" }));
}, "D:/SMF/website/atozbusiness/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, BUSINESS_INFO as B, FAQS as F, HOW_IT_WORKS as H, LOCATIONS as L, PAGE_SEO as P, SEO_DEFAULTS as S, WHY_CHOOSE_US as W, $$Container as a, BUSINESS_HOURS as b, STATISTICS as c, SOCIAL_DEFAULTS as d, getKeywordsString as g };
