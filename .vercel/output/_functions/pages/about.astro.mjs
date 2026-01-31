/* empty css                                 */
import { e as createComponent, f as createAstro, m as maybeRenderHead, k as renderComponent, r as renderTemplate, l as Fragment, u as unescapeHTML } from '../chunks/astro/server_BZ7qSQHj.mjs';
import 'piccolore';
import { B as BUSINESS_INFO, S as SEO_DEFAULTS, $ as $$BaseLayout, a as $$Container } from '../chunks/BaseLayout_CN0PIlj-.mjs';
import { $ as $$Section } from '../chunks/Section_DEO5dccL.mjs';
import { $ as $$Heading } from '../chunks/Heading_D8gOLzol.mjs';
import { $ as $$Button } from '../chunks/Button_B0u9fRrD.mjs';
import { I as Icon } from '../chunks/Icon_Dg0Sj1DE.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ValueCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ValueCard;
  const { name, description, icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="group h-full flex flex-col gap-4 p-6 lg:p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary-500 hover:from-primary-50/10 hover:to-primary-100/5"> <!-- Icon Wrapper --> <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"> ${renderComponent($$result, "Icon", Icon, { "name": icon, "className": "w-8 h-8 text-white" })} </div> <!-- Value Name --> <h3 class="text-xl font-bold text-neutral-900 m-0">${name}</h3> <!-- Value Description --> <p class="text-base leading-relaxed text-neutral-600 m-0 flex-grow">${description}</p> </div>`;
}, "D:/SMF/website/atozbusiness/src/components/about/ValueCard.astro", void 0);

const ABOUT_DATA = {
  companyInfo: {
    foundingYear: "2017",
    history: "A to Z Business Services started with a simple goal: to make government paperwork in the UAE stress-free for everyone. We recognized that navigating immigration and licensing can be overwhelming, so we built a center where individuals and businesses can find every solution under one roof. Today, we are proud to be the bridge between our clients and government entities, ensuring every application is handled with precision and care."
  },
  statements: {
    mission: "To simplify life in the UAE by providing fast, accurate, and comprehensive government transaction services, ensuring peace of mind for every family and business we serve.",
    vision: 'To be Abu Dhabi’s most reliable "one-stop" destination for government services, known for efficiency, expert guidance, and a personal touch.'
  },
  values: [
    {
      name: "Efficiency & Speed",
      description: "We value your time. We work diligently to get your applications done right the first time, avoiding unnecessary delays.",
      icon: "Zap"
    },
    {
      name: "Transparency & Trust",
      description: "No hidden fees or confusing jargon. We provide honest guidance at every step so you never have to guess the status of your application.",
      icon: "Shield"
    },
    {
      name: "Customer-Centric Care",
      description: "We don’t just process documents; we listen. Whether for family or business, we offer the best solution for your specific situation.",
      icon: "Heart"
    }
  ],
  team: {
    teamDescription: "Our team consists of experienced PROs, typing specialists, and legal translation experts who are fluent in local regulations and committed to helpful service.",
    members: [
      {
        name: "Mohammed Alhur Al Suwaidi",
        role: "Senior PRO & Owner"
      },
      {
        name: "Ahmed Hassan",
        role: "PRO Specialist"
      },
      {
        name: "Fatima Al Mansouri",
        role: "Typing Center Manager"
      },
      {
        name: "Khalid Ibrahim",
        role: "Legal Translation Expert"
      },
      {
        name: "Sara Abdullah",
        role: "Customer Service Lead"
      }
    ]
  },
  statistics: [
    {
      label: "Years in Business",
      value: "8+",
      icon: "Calendar"
    },
    {
      label: "Happy Clients",
      value: "5,000+",
      icon: "Users"
    },
    {
      label: "Success Rate",
      value: "99%",
      icon: "TrendingUp"
    },
    {
      label: "Services Offered",
      value: "100+",
      icon: "Briefcase"
    }
  ]
};

function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SEO_DEFAULTS.siteUrl}/#organization`,
    name: BUSINESS_INFO.name,
    description: ABOUT_DATA.statements.mission,
    url: SEO_DEFAULTS.siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${SEO_DEFAULTS.siteUrl}/logo.png`
    },
    image: {
      "@type": "ImageObject",
      url: `${SEO_DEFAULTS.siteUrl}/og-image.jpg`
    },
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    foundingDate: ABOUT_DATA.companyInfo.foundingYear,
    address: {
      "@type": "PostalAddress",
      addressCountry: "AE",
      addressRegion: "Abu Dhabi",
      addressLocality: "Abu Dhabi"
    },
    sameAs: [
      // Will add social media URLs when available
      // 'https://facebook.com/atozbusiness',
      // 'https://instagram.com/atozbusiness',
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS_INFO.phone,
      contactType: "customer service",
      availableLanguage: ["English", "Arabic", "Hindi", "Urdu"],
      areaServed: "AE"
    },
    award: ABOUT_DATA.statistics.filter((stat) => stat.label.includes("Success Rate") || stat.label.includes("Happy Clients")).map((stat) => `${stat.value} ${stat.label}`)
  };
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$About = createComponent(($$result, $$props, $$slots) => {
  const organizationSchema = generateOrganizationSchema();
  const pageTitle = "About Us | A to Z Business Services";
  const pageDescription = "Learn about A to Z Business Services - Abu Dhabi's trusted PRO services and typing center. Our mission, values, and experienced team dedicated to simplifying government transactions.";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "ogImage": "/og-about.jpg" }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="relative bg-primary-900 py-24 overflow-hidden"> <!-- Background Effects --> <div class="absolute inset-0 z-0"> <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div> <div class="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/90 to-primary-800/80"></div> </div> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/20 rounded-full blur-[100px] opacity-30 pointer-events-none"></div> <div class="container relative z-10 mx-auto px-4 text-center"> <div class="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md border border-white/10 mb-6 animate-fade-in-up"> ${renderComponent($$result2, "Icon", Icon, { "name": "Building2", "className": "w-5 h-5" })} <span>Since ${ABOUT_DATA.companyInfo.foundingYear}</span> </div> <h1 class="font-display text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up [animation-delay:100ms] tracking-tight">
Your Trusted Partner in Government Services
</h1> <p class="mx-auto max-w-2xl text-lg text-primary-100/90 animate-fade-in-up [animation-delay:200ms] leading-relaxed">
Making life in the UAE easier, one service at a time
</p> </div> </section>  ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Container", $$Container, {}, { "default": ($$result4) => renderTemplate` <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"> <!-- Story Content --> <div class="space-y-6"> <div class="inline-block text-sm font-bold uppercase tracking-wider text-primary-600 mb-4">
Our Story
</div> ${renderComponent($$result4, "Heading", $$Heading, { "level": "h2", "size": "3xl" }, { "default": ($$result5) => renderTemplate`
Building Trust Since ${ABOUT_DATA.companyInfo.foundingYear}` })} <p class="text-lg leading-relaxed text-neutral-600"> ${ABOUT_DATA.companyInfo.history} </p> </div> <!-- Story Image --> <div class="order-first lg:order-last"> <div class="relative rounded-2xl overflow-hidden aspect-[4/3]"> <div class="w-full h-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center"> ${renderComponent($$result4, "Icon", Icon, { "name": "Building2", "className": "w-24 h-24 text-white/50" })} </div> </div> </div> </div> ` })} ` })}  ${renderComponent($$result2, "Section", $$Section, { "background": "gradient" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Container", $$Container, {}, { "default": ($$result4) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"> <!-- Mission Card --> <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 lg:p-12 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"> <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mx-auto mb-6"> ${renderComponent($$result4, "Icon", Icon, { "name": "Target", "className": "w-9 h-9 text-white" })} </div> <h3 class="text-2xl font-bold text-white mb-4">Our Mission</h3> <p class="text-base leading-relaxed text-white/80"> ${ABOUT_DATA.statements.mission} </p> </div> <!-- Vision Card --> <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 lg:p-12 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"> <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mx-auto mb-6"> ${renderComponent($$result4, "Icon", Icon, { "name": "Eye", "className": "w-9 h-9 text-white" })} </div> <h3 class="text-2xl font-bold text-white mb-4">Our Vision</h3> <p class="text-base leading-relaxed text-white/80"> ${ABOUT_DATA.statements.vision} </p> </div> </div> ` })} ` })}  ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Container", $$Container, {}, { "default": ($$result4) => renderTemplate`  <div class="text-center max-w-3xl mx-auto mb-12 lg:mb-16"> <div class="inline-block text-sm font-bold uppercase tracking-wider text-primary-600 mb-4">
Our Values
</div> ${renderComponent($$result4, "Heading", $$Heading, { "level": "h2", "size": "3xl", "className": "mb-4" }, { "default": ($$result5) => renderTemplate` What We Stand For ` })} <p class="text-lg leading-relaxed text-neutral-600">
These core values guide everything we do, ensuring exceptional service and peace of mind
          for every client.
</p> </div>  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"> ${ABOUT_DATA.values.map((value) => renderTemplate`${renderComponent($$result4, "ValueCard", $$ValueCard, { "name": value.name, "description": value.description, "icon": value.icon })}`)} </div> ` })} ` })}  ${renderComponent($$result2, "Section", $$Section, { "background": "gradient" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Container", $$Container, {}, { "default": ($$result4) => renderTemplate` <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"> ${ABOUT_DATA.statistics.map((stat) => renderTemplate`<div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 lg:p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"> <div class="w-14 h-14 rounded-xl bg-white flex items-center justify-center mx-auto mb-4"> ${renderComponent($$result4, "Icon", Icon, { "name": stat.icon, "className": "w-8 h-8 text-primary-600" })} </div> <div class="text-4xl lg:text-5xl font-extrabold text-white mb-2">${stat.value}</div> <div class="text-sm font-semibold uppercase tracking-wide text-white/80"> ${stat.label} </div> </div>`)} </div> ` })} ` })}  ${renderTemplate`${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Container", $$Container, {}, { "default": ($$result4) => renderTemplate`<div class="text-center max-w-3xl mx-auto mb-12 lg:mb-16"> <div class="inline-block text-sm font-bold uppercase tracking-wider text-primary-600 mb-4">
Our Team
</div> ${renderComponent($$result4, "Heading", $$Heading, { "level": "h2", "size": "3xl", "className": "mb-4" }, { "default": ($$result5) => renderTemplate`
Meet the Experts
` })} ${renderTemplate`<p class="text-lg leading-relaxed text-neutral-600"> ${ABOUT_DATA.team.teamDescription} </p>`} </div> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8"> ${ABOUT_DATA.team.members?.map((member) => renderTemplate`<div class="group text-center p-6 bg-gradient-to-br from-white/5 to-white/2 border border-neutral-200 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"> <div class="w-28 h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mx-auto mb-6 overflow-hidden"> ${renderComponent($$result4, "Icon", Icon, { "name": "User", "className": "w-14 h-14 lg:w-16 lg:h-16 text-white" })} </div> <h3 class="text-lg font-bold text-neutral-900 mb-2">${member.name}</h3> <p class="text-sm text-neutral-600">${member.role}</p> </div>`)} </div> ` })} ` })}`} ${renderComponent($$result2, "Section", $$Section, { "background": "gradient" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Container", $$Container, {}, { "default": ($$result4) => renderTemplate` <div class="text-center max-w-3xl mx-auto space-y-8"> ${renderComponent($$result4, "Heading", $$Heading, { "level": "h2", "size": "3xl", "className": "text-white" }, { "default": ($$result5) => renderTemplate` Ready to Get Started? ` })} <p class="text-xl text-white/90">
Let our experienced team handle your government services with care and efficiency.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> ${renderComponent($$result4, "Button", $$Button, { "variant": "primary", "size": "lg", "href": "https://wa.me/971503489891" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Icon", Icon, { "name": "MessageCircle", "className": "w-5 h-5" })}
WhatsApp Us
` })} ${renderComponent($$result4, "Button", $$Button, { "variant": "outline", "size": "lg", "href": "/contact" }, { "default": ($$result5) => renderTemplate`Get in Touch` })} </div> </div> ` })} ` })} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify(organizationSchema))) })}` })}`;
}, "D:/SMF/website/atozbusiness/src/pages/about.astro", void 0);

const $$file = "D:/SMF/website/atozbusiness/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
