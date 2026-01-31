/* empty css                                 */
import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_BZ7qSQHj.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CN0PIlj-.mjs';
import { I as Icon } from '../chunks/Icon_Dg0Sj1DE.mjs';
import { $ as $$SanityImage, a as $$CTASection } from '../chunks/CTASection_CDmwLl9I.mjs';
import { s as sanityClient, c as servicesQuery } from '../chunks/queries_C-37W4Vo.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { name, description, icon, slug, category, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/services/${slug}`, "href")} class="group flex flex-col bg-white rounded-2xl shadow-sm border border-neutral-200 hover:shadow-xl hover:border-primary-100 transition-all duration-300 overflow-hidden"> ${image ? renderTemplate`<div class="relative h-48 w-full overflow-hidden bg-neutral-100"> ${renderComponent($$result, "SanityImage", $$SanityImage, { "node": image, "width": 400, "height": 225, "class": "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" })} <div class="absolute top-4 left-4"> <span class="text-xs font-medium px-3 py-1 bg-white/90 backdrop-blur-sm text-neutral-700 rounded-full shadow-sm"> ${category} </span> </div> </div>` : renderTemplate`<div class="p-6 pb-0 flex items-start justify-between"> <div class="w-14 h-14 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300"> ${renderComponent($$result, "Icon", Icon, { "name": icon, "className": "w-7 h-7", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/SMF/website/atozbusiness/src/components/icons/Icon", "client:component-export": "default" })} </div> <span class="text-xs font-medium px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full group-hover:bg-primary-50 group-hover:text-primary-700 transition-colors"> ${category} </span> </div>`} <div class="p-6 flex flex-col flex-grow"> ${image && renderTemplate`<div class="flex items-start justify-between mb-4"> <div class="w-10 h-10 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300"> ${renderComponent($$result, "Icon", Icon, { "name": icon, "className": "w-5 h-5", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/SMF/website/atozbusiness/src/components/icons/Icon", "client:component-export": "default" })} </div> </div>`} <h3 class="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors"> ${name} </h3> <p class="text-neutral-500 mb-6 line-clamp-3 text-sm leading-relaxed flex-grow"> ${description} </p> <div class="flex items-center gap-2 text-secondary-600 font-semibold text-sm group-hover:text-secondary-700 mt-auto">
View Details
${renderComponent($$result, "Icon", Icon, { "name": "ArrowRight", "className": "w-4 h-4 transition-transform group-hover:translate-x-1", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/SMF/website/atozbusiness/src/components/icons/Icon", "client:component-export": "default" })} </div> </div> </a>`;
}, "D:/SMF/website/atozbusiness/src/components/services/ServiceCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const services = await sanityClient.fetch(servicesQuery);
  const categories = [...new Set(services.map((s) => s.category))];
  const servicesByCategory = categories.map((category) => ({
    name: category.charAt(0).toUpperCase() + category.slice(1),
    // Capitalize
    services: services.filter((s) => s.category === category)
  }));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Our Services | A to Z Business Abu Dhabi", "description": "Explore our comprehensive range of government and business services in Abu Dhabi. From visas to company formation, we handle it all." }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative bg-primary-900 py-24 overflow-hidden"> <!-- Background Effects --> <div class="absolute inset-0 z-0"> <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div> <div class="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/90 to-primary-800/80"></div> </div> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/20 rounded-full blur-[100px] opacity-30 pointer-events-none"></div> <div class="container relative z-10 mx-auto px-4 text-center"> <div class="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md border border-white/10 mb-6 animate-fade-in-up"> <span class="w-2 h-2 rounded-full bg-accent-400 animate-pulse"></span> <span>A to Z Business Services</span> </div> <h1 class="font-display text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up [animation-delay:100ms] tracking-tight">
Type Less, Do More.
</h1> <p class="mx-auto max-w-2xl text-lg text-primary-100/90 animate-fade-in-up [animation-delay:200ms] leading-relaxed">
Professional government, visa, and business setup services designed to save you time and
        hassle.
</p> </div> </section>  <section class="py-24 bg-neutral-50 relative"> <div class="container mx-auto px-4"> ${servicesByCategory.map((category, index) => renderTemplate`<div${addAttribute(index !== 0 ? "mt-20" : "", "class")}> <div class="flex items-center gap-4 mb-8"> <div class="h-10 w-1 bg-secondary-500 rounded-full"></div> <h2 class="text-3xl font-display font-bold text-neutral-900"> ${category.name} Services
</h2> </div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> ${category.services.map((service, idx) => renderTemplate`<div class="animate-fade-in-up"${addAttribute(`animation-delay: ${idx * 100}ms`, "style")}> ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "name": service.title, "description": service.excerpt, "icon": service.icon || "FileText", "slug": service.slug.current, "category": service.category, "image": service.featuredImage })} </div>`)} </div> </div>`)} </div> </section> ${renderComponent($$result2, "CTASection", $$CTASection, {})} ` })}`;
}, "D:/SMF/website/atozbusiness/src/pages/services/index.astro", void 0);

const $$file = "D:/SMF/website/atozbusiness/src/pages/services/index.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
