/* empty css                                    */
import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, n as renderSlot, u as unescapeHTML, h as addAttribute } from '../../chunks/astro/server_BZ7qSQHj.mjs';
import 'piccolore';
import { B as BUSINESS_INFO, S as SEO_DEFAULTS, $ as $$BaseLayout, a as $$Container } from '../../chunks/BaseLayout_CN0PIlj-.mjs';
import { $ as $$Button } from '../../chunks/Button_B0u9fRrD.mjs';
import { I as Icon } from '../../chunks/Icon_Dg0Sj1DE.mjs';
import { $ as $$SanityImage, a as $$CTASection } from '../../chunks/CTASection_CDmwLl9I.mjs';
import { F as FAQAccordion } from '../../chunks/FAQAccordion_eJv_rouA.mjs';
import { $ as $$Breadcrumbs } from '../../chunks/Breadcrumbs_B9q952N4.mjs';
import { s as sanityClient, b as serviceBySlugQuery, c as servicesQuery } from '../../chunks/queries_C-37W4Vo.mjs';
export { renderers } from '../../renderers.mjs';

function generateServiceSchema(props) {
  const {
    name,
    description,
    slug,
    image,
    category = "Professional Service",
    provider = BUSINESS_INFO.name,
    areaServed = "Abu Dhabi, UAE",
    offers
  } = props;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SEO_DEFAULTS.siteUrl}/services/${slug}#service`,
    name,
    description,
    ...image && {
      image: {
        "@type": "ImageObject",
        url: image
      }
    },
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SEO_DEFAULTS.siteUrl}/#organization`,
      name: provider,
      telephone: BUSINESS_INFO.phone,
      email: BUSINESS_INFO.email
    },
    serviceType: category,
    areaServed: {
      "@type": "City",
      name: areaServed
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${SEO_DEFAULTS.siteUrl}/services/${slug}`,
      servicePhone: {
        "@type": "ContactPoint",
        telephone: BUSINESS_INFO.phone,
        contactType: "customer service"
      }
    }
  };
  if (offers) {
    schema.offers = {
      "@type": "Offer",
      priceCurrency: offers.priceCurrency || "AED",
      ...offers.price && { price: offers.price },
      ...offers.priceRange && { priceRange: offers.priceRange },
      availability: offers.availability || "https://schema.org/InStock"
    };
  }
  return schema;
}
function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
function generateBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}
function generateServiceBreadcrumbs(serviceName, serviceSlug) {
  return generateBreadcrumbSchema([
    {
      name: "Home",
      url: SEO_DEFAULTS.siteUrl
    },
    {
      name: "Services",
      url: `${SEO_DEFAULTS.siteUrl}/services`
    },
    {
      name: serviceName,
      url: `${SEO_DEFAULTS.siteUrl}/services/${serviceSlug}`
    }
  ]);
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$7 = createAstro();
const $$ServiceLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ServiceLayout;
  const { service } = Astro2.props;
  const serviceSchema = generateServiceSchema({
    name: service.title,
    description: service.excerpt,
    slug: service.slug.current,
    image: service.featuredImage?.asset?.url,
    category: service.category,
    areaServed: "Abu Dhabi, UAE"
  });
  const faqSchema = service.faq ? generateFAQSchema(service.faq) : null;
  const breadcrumbSchema = generateServiceBreadcrumbs(service.title, service.slug.current);
  const schemas = [serviceSchema, faqSchema, breadcrumbSchema].filter(Boolean);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${service.title} in Abu Dhabi | A to Z Business`, "description": service.excerpt, "ogImage": service.featuredImage?.asset?.url || "/og-image.jpg" }, { "default": ($$result2) => renderTemplate`${schemas.map((schema) => renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema))))}${maybeRenderHead()}<main class="bg-neutral-50 pb-20"> ${renderSlot($$result2, $$slots["default"])} </main> ` })}`;
}, "D:/SMF/website/atozbusiness/src/layouts/ServiceLayout.astro", void 0);

const $$Astro$6 = createAstro();
const $$ServiceHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ServiceHero;
  const { name, description, icon, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative bg-gradient-to-br from-primary-900 to-primary-800 text-white py-20 lg:py-28 overflow-hidden"> ${image && renderTemplate`<div class="absolute inset-0 z-0 mix-blend-overlay opacity-30"> ${renderComponent($$result, "SanityImage", $$SanityImage, { "node": image, "width": 1600, "class": "w-full h-full object-cover", "priority": true })} </div>`} <div class="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10 z-0"></div> <div class="absolute -bottom-1 left-0 w-full overflow-hidden leading-none rotate-180 z-10"> <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="relative block w-[calc(100%+1.3px)] h-[60px] text-neutral-50 fill-current"> <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path> </svg> </div> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="relative z-10 max-w-4xl mx-auto text-center"> <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-8 border border-white/20 text-secondary-400"> ${renderComponent($$result2, "Icon", Icon, { "name": icon, "className": "w-8 h-8", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/SMF/website/atozbusiness/src/components/icons/Icon", "client:component-export": "default" })} </div> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"> ${name} </h1> <p class="text-lg md:text-xl text-primary-100 max-w-2xl mx-auto mb-10 leading-relaxed"> ${description} </p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> ${renderComponent($$result2, "Button", $$Button, { "href": "/contact", "variant": "outline", "size": "lg", "class": "bg-white/5 border-white/20 hover:bg-white/10 text-white" }, { "default": ($$result3) => renderTemplate`
Book Consultation
` })} </div> </div> ` })} </section>`;
}, "D:/SMF/website/atozbusiness/src/components/services/ServiceHero.astro", void 0);

const $$Astro$5 = createAstro();
const $$ServiceFeatures = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ServiceFeatures;
  const { features, fullDescription } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-neutral-50 relative"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start"> <div class="prose prose-lg text-neutral-600"> <h2 class="text-3xl font-bold text-neutral-900 mb-6 font-heading">About This Service</h2> <div class="whitespace-pre-line leading-relaxed"> ${fullDescription} </div> </div> <div class="bg-white rounded-3xl p-8 shadow-xl shadow-neutral-200/50 border border-neutral-100"> <h3 class="text-xl font-bold text-neutral-900 mb-6 flex items-center gap-2"> ${renderComponent($$result2, "Icon", Icon, { "name": "CheckCircle2", "className": "w-6 h-6 text-secondary-500", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/SMF/website/atozbusiness/src/components/icons/Icon", "client:component-export": "default" })}
What's Included
</h3> <ul class="space-y-4"> ${features.map((feature) => renderTemplate`<li class="flex items-start gap-3 text-neutral-700 bg-neutral-50 p-4 rounded-xl border border-neutral-100/50 transition-all hover:border-secondary-200 hover:bg-secondary-50/30"> <span class="mt-1 w-5 h-5 rounded-full bg-secondary-100 text-secondary-600 flex items-center justify-center flex-shrink-0"> ${renderComponent($$result2, "Icon", Icon, { "name": "Check", "className": "w-3.5 h-3.5", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/SMF/website/atozbusiness/src/components/icons/Icon", "client:component-export": "default" })} </span> <span class="font-medium">${feature}</span> </li>`)} </ul> </div> </div> ` })} </section>`;
}, "D:/SMF/website/atozbusiness/src/components/services/ServiceFeatures.astro", void 0);

const $$Astro$4 = createAstro();
const $$ServiceProcess = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ServiceProcess;
  const { process } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-white"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="text-center max-w-3xl mx-auto mb-16"> <h2 class="text-3xl font-bold text-neutral-900 mb-4">How It Works</h2> <p class="text-neutral-600">
Our streamlined process ensures your application is handled efficiently from start to
        finish.
</p> </div> <div class="relative">  <div class="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-neutral-100 -translate-y-1/2 z-0"></div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"> ${process.map((step, index) => renderTemplate`<div class="group relative bg-white p-6 rounded-2xl hover:bg-neutral-50 transition-colors border border-transparent hover:border-neutral-100"> <div${addAttribute(`w-12 h-12 mx-auto rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-sm border-4 border-white relative z-10
              ${index === 0 ? "bg-primary-600 text-white" : "bg-neutral-100 text-neutral-500 group-hover:bg-primary-100 group-hover:text-primary-700"}`, "class")}> ${step.step} </div> <h3 class="text-lg font-bold text-neutral-900 mb-3 text-center">${step.title}</h3> <p class="text-neutral-600 text-center text-sm leading-relaxed">${step.description}</p> </div>`)} </div> </div> ` })} </section>`;
}, "D:/SMF/website/atozbusiness/src/components/services/ServiceProcess.astro", void 0);

const $$Astro$3 = createAstro();
const $$ServiceDocuments = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ServiceDocuments;
  const { documents } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-neutral-50 border-t border-neutral-200/50"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="max-w-4xl mx-auto"> <div class="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-neutral-100"> <div class="text-center mb-10"> <div class="w-16 h-16 bg-secondary-50 text-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6"> ${renderComponent($$result2, "Icon", Icon, { "name": "FileText", "className": "w-8 h-8", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/SMF/website/atozbusiness/src/components/icons/Icon", "client:component-export": "default" })} </div> <h2 class="text-3xl font-bold text-neutral-900 mb-4">Required Documents</h2> <p class="text-neutral-600">
Please prepare the following documents to initiate the process.
</p> </div> <div class="grid sm:grid-cols-2 gap-4"> ${documents.map((doc) => renderTemplate`<div${addAttribute(`p-5 rounded-2xl border transition-all flex items-start gap-4 ${doc.required ? "bg-neutral-50 border-neutral-200/60" : "bg-white border-dashed border-neutral-200"}`, "class")}> <div${addAttribute(`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${doc.required ? "bg-secondary-500" : "bg-neutral-300"}`, "class")}></div> <div> <h4 class="font-bold text-neutral-900 text-sm md:text-base"> ${doc.name} ${doc.required && renderTemplate`<span class="text-xs font-normal text-secondary-600 bg-secondary-50 px-2 py-0.5 rounded-full ml-2">
Required
</span>`} </h4> ${doc.description && renderTemplate`<p class="text-neutral-500 text-xs md:text-sm mt-1">${doc.description}</p>`} </div> </div>`)} </div> <div class="mt-8 pt-8 border-t border-neutral-100 text-center"> <p class="text-neutral-500 text-sm flex items-center justify-center gap-2"> ${renderComponent($$result2, "Icon", Icon, { "name": "Info", "className": "w-4 h-4", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/SMF/website/atozbusiness/src/components/icons/Icon", "client:component-export": "default" })}
Need help with document attestation or translation? We can handle that too.
</p> </div> </div> </div> ` })} </section>`;
}, "D:/SMF/website/atozbusiness/src/components/services/ServiceDocuments.astro", void 0);

const $$Astro$2 = createAstro();
const $$ServiceFAQ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ServiceFAQ;
  const { faqs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-neutral-50"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="max-w-3xl mx-auto"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold text-neutral-900 mb-4">Frequently Asked Questions</h2> <p class="text-neutral-600">Common questions about this specific service.</p> </div> <div class="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-neutral-100"> ${renderComponent($$result2, "FAQAccordion", FAQAccordion, { "faqs": faqs, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/SMF/website/atozbusiness/src/components/home/FAQAccordion", "client:component-export": "default" })} </div> </div> ` })} </section>`;
}, "D:/SMF/website/atozbusiness/src/components/services/ServiceFAQ.astro", void 0);

const $$Astro$1 = createAstro();
const $$RelatedServices = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RelatedServices;
  const { services } = Astro2.props;
  const validServices = Array.isArray(services) ? services : [];
  return renderTemplate`${validServices.length > 0 && renderTemplate`${maybeRenderHead()}<section class="py-16 bg-white border-t border-neutral-100">${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate`<h2 class="text-2xl font-bold text-neutral-900 mb-8">Related Services</h2><div class="grid md:grid-cols-3 gap-6">${validServices.map((service) => renderTemplate`<a${addAttribute(`/services/${service.slug.current}`, "href")} class="group flex flex-col bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:border-primary-100"><div class="h-48 w-full bg-neutral-100 relative overflow-hidden">${service.featuredImage ? renderTemplate`${renderComponent($$result2, "SanityImage", $$SanityImage, { "node": service.featuredImage, "width": 400, "height": 300, "class": "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" })}` : renderTemplate`<div class="h-full w-full flex items-center justify-center bg-primary-50">${renderComponent($$result2, "Icon", Icon, { "name": service.icon || "FileText", "className": "w-12 h-12 text-primary-200", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/SMF/website/atozbusiness/src/components/icons/Icon", "client:component-export": "default" })}</div>`}</div><div class="p-6 flex flex-col flex-grow"><div class="flex items-center gap-3 mb-3">${!service.featuredImage && renderTemplate`<div class="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600">${renderComponent($$result2, "Icon", Icon, { "name": service.icon || "FileText", "className": "w-4 h-4", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/SMF/website/atozbusiness/src/components/icons/Icon", "client:component-export": "default" })}</div>`}<h3 class="text-lg font-bold text-neutral-900 group-hover:text-primary-700 transition-colors">${service.title}</h3></div><p class="text-neutral-500 text-sm line-clamp-2 mb-4 flex-grow">${service.excerpt}</p><span class="text-secondary-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
Learn More ${renderComponent($$result2, "Icon", Icon, { "name": "ArrowRight", "className": "w-4 h-4", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/SMF/website/atozbusiness/src/components/icons/Icon", "client:component-export": "default" })}</span></div></a>`)}</div>` })}</section>`}`;
}, "D:/SMF/website/atozbusiness/src/components/services/RelatedServices.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const services = await sanityClient.fetch(servicesQuery);
  return services.map((service) => ({
    params: { slug: service.slug.current }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const service = await sanityClient.fetch(serviceBySlugQuery, { slug });
  if (!service) {
    return new Response(null, {
      status: 404,
      statusText: "Not Found"
    });
  }
  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: service.title, url: `/services/${service.slug.current}` }
  ];
  const documents = service.documentsRequired?.map((doc) => ({ name: doc, required: true })) || [];
  const processMap = service.processSteps?.map((step, idx) => ({
    step: idx + 1,
    title: step.step || `Step ${idx + 1}`,
    description: step.description
  })) || [];
  return renderTemplate`${renderComponent($$result, "ServiceLayout", $$ServiceLayout, { "service": service }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ServiceHero", $$ServiceHero, { "name": service.title, "description": service.excerpt, "icon": service.icon || "FileText", "image": service.featuredImage })} ${renderComponent($$result2, "Container", $$Container, { "class": "pt-4 pb-4" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbs })} ` })} ${renderComponent($$result2, "ServiceFeatures", $$ServiceFeatures, { "features": service.features || [], "fullDescription": service.description })} ${processMap.length > 0 && renderTemplate`${renderComponent($$result2, "ServiceProcess", $$ServiceProcess, { "process": processMap })}`}${documents.length > 0 && renderTemplate`${renderComponent($$result2, "ServiceDocuments", $$ServiceDocuments, { "documents": documents })}`}${service.faq && service.faq.length > 0 && renderTemplate`${renderComponent($$result2, "ServiceFAQ", $$ServiceFAQ, { "faqs": service.faq })}`}${renderComponent($$result2, "RelatedServices", $$RelatedServices, { "services": service.relatedServices })} ${renderComponent($$result2, "CTASection", $$CTASection, {})} ` })}`;
}, "D:/SMF/website/atozbusiness/src/pages/services/[slug].astro", void 0);

const $$file = "D:/SMF/website/atozbusiness/src/pages/services/[slug].astro";
const $$url = "/services/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
