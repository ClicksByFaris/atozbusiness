/* empty css                                    */
import { e as createComponent, f as createAstro, m as maybeRenderHead, k as renderComponent, h as addAttribute, r as renderTemplate } from '../../chunks/astro/server_BZ7qSQHj.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CN0PIlj-.mjs';
import { g as getImageUrl, s as sanityClient, l as locationBySlugQuery, a as locationsQuery } from '../../chunks/queries_C-37W4Vo.mjs';
import { Home, ChevronRight, MapPin, Star, Phone, Mail, MessageCircle, Image, Briefcase, CircleCheck } from 'lucide-react';
import GoogleMap from '../../chunks/GoogleMap_BaPweA7l.mjs';
import { g as generateLocationSchema, $ as $$SEO } from '../../chunks/localBusiness_yJvJzMMy.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro();
const $$LocationHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LocationHero;
  const { location } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-primary-900 py-24"> <!-- Background Image with Overlay --> <div class="absolute inset-0 z-0"> ${location.image ? renderTemplate`<img${addAttribute(getImageUrl(location.image, 1920, 1080), "src")}${addAttribute(location.name, "alt")} class="h-full w-full object-cover opacity-30">` : renderTemplate`<div class="bg-[url('/images/pattern-bg.svg')] h-full w-full opacity-10"></div>`} <!-- Gradient Overlays for Depth --> <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-primary-900/80 to-primary-900/60 mix-blend-multiply"></div> <div class="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-50/5"></div> </div> <!-- Decorative Shapes --> <div class="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl filter"></div> <div class="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary-500/20 blur-3xl filter"></div> <!-- Content --> <div class="container relative z-10 mx-auto px-4 text-center"> <!-- Breadcrumbs --> <nav class="flex justify-center mb-8 animate-fade-in-up"> <ol class="flex items-center space-x-2 text-sm text-neutral-300"> <li> <a href="/" class="hover:text-white transition-colors flex items-center gap-1"> ${renderComponent($$result, "Home", Home, { "className": "h-4 w-4" })} <span class="sr-only">Home</span> </a> </li> <li>${renderComponent($$result, "ChevronRight", ChevronRight, { "className": "h-4 w-4" })}</li> <li> <a href="/locations" class="hover:text-white transition-colors">Locations</a> </li> <li>${renderComponent($$result, "ChevronRight", ChevronRight, { "className": "h-4 w-4" })}</li> <li class="text-accent-400 font-medium" aria-current="page">${location.name}</li> </ol> </nav> <div class="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md border border-white/10 mb-6 animate-fade-in-up [animation-delay:100ms]"> ${renderComponent($$result, "MapPin", MapPin, { "className": "h-4 w-4 text-accent-400" })} <span>${location.area}, Abu Dhabi</span> </div> <h1 class="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight animate-fade-in-up [animation-delay:200ms]"> ${location.name} </h1> <div class="flex flex-wrap justify-center gap-6 text-white/90 animate-fade-in-up [animation-delay:300ms]"> <div class="flex items-center gap-2 rounded-lg bg-black/20 backdrop-blur-sm px-4 py-2 border border-white/5"> <div class="flex text-accent-400"> ${renderComponent($$result, "Star", Star, { "className": "h-4 w-4 fill-current" })} ${renderComponent($$result, "Star", Star, { "className": "h-4 w-4 fill-current" })} ${renderComponent($$result, "Star", Star, { "className": "h-4 w-4 fill-current" })} ${renderComponent($$result, "Star", Star, { "className": "h-4 w-4 fill-current" })} ${renderComponent($$result, "Star", Star, { "className": "h-4 w-4 fill-current" })} </div> <span class="font-medium text-sm">Customer Favorite</span> </div> </div> </div> </section>`;
}, "D:/SMF/website/atozbusiness/src/components/location/LocationHero.astro", void 0);

const $$Astro$1 = createAstro();
const $$ContactInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactInfo;
  const { location } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-3xl bg-white p-8 shadow-soft border border-neutral-100 h-full"> <h2 class="text-2xl font-display font-bold text-primary-900 mb-8">Contact & Hours</h2> <div class="space-y-8"> <!-- Contact Details --> <div class="space-y-4"> <h3 class="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Get in Touch</h3> <a${addAttribute(`tel:${location.phone}`, "href")} class="flex items-center gap-4 group p-3 -mx-3 rounded-xl hover:bg-neutral-50 transition-colors"> <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-100 group-hover:text-primary-700"> ${renderComponent($$result, "Phone", Phone, { "className": "h-5 w-5" })} </div> <div> <p class="text-xs text-neutral-500 font-medium">Phone Number</p> <p class="font-medium text-neutral-900 group-hover:text-primary-700">${location.phone}</p> </div> </a> <a${addAttribute(`mailto:${location.email}`, "href")} class="flex items-center gap-4 group p-3 -mx-3 rounded-xl hover:bg-neutral-50 transition-colors"> <div class="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-50 text-secondary-600 transition-colors group-hover:bg-secondary-100 group-hover:text-secondary-700"> ${renderComponent($$result, "Mail", Mail, { "className": "h-5 w-5" })} </div> <div> <p class="text-xs text-neutral-500 font-medium">Email Address</p> <p class="font-medium text-neutral-900 break-all">${location.email}</p> </div> </a> <a${addAttribute(`https://wa.me/${location.whatsapp?.replace(/[^0-9]/g, "")}`, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 group p-3 -mx-3 rounded-xl hover:bg-neutral-50 transition-colors"> <div class="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-600 transition-colors group-hover:bg-green-100 group-hover:text-green-700"> ${renderComponent($$result, "MessageCircle", MessageCircle, { "className": "h-5 w-5" })} </div> <div> <p class="text-xs text-neutral-500 font-medium">WhatsApp</p> <p class="font-medium text-neutral-900">Chat with us</p> </div> </a> <div class="flex items-start gap-4 p-3 -mx-3"> <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600"> ${renderComponent($$result, "MapPin", MapPin, { "className": "h-5 w-5" })} </div> <div> <p class="text-xs text-neutral-500 font-medium mb-1">Visit Us</p> <p class="font-medium text-neutral-900 leading-relaxed">${location.address}</p> ${location.landmark && renderTemplate`<p class="text-sm text-neutral-500 mt-1">Near ${location.landmark}</p>`} </div> </div> </div> </div> </div>`;
}, "D:/SMF/website/atozbusiness/src/components/location/ContactInfo.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const locations = await sanityClient.fetch(locationsQuery);
  return locations.map((location) => ({
    params: { slug: location.slug.current }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const location = await sanityClient.fetch(locationBySlugQuery, { slug });
  if (!location) {
    return new Response(null, {
      status: 404,
      statusText: "Not Found"
    });
  }
  const title = `${location.name} - AtoZ Business Services`;
  const description = location.metaDescription || `Visit AtoZ Business Services at ${location.area}. We offer professional government and typing services in Abu Dhabi.`;
  const schema = generateLocationSchema({
    name: location.name,
    address: location.address,
    area: location.area,
    city: "Abu Dhabi",
    phone: location.phone,
    latitude: location.coordinates?.lat,
    longitude: location.coordinates?.lng,
    image: location.image ? getImageUrl(location.image) : void 0
  });
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Locations", url: "/locations" },
    { name: location.name, url: `/locations/${location.slug.current}` }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "LocationHero", $$LocationHero, { "location": location })} ${maybeRenderHead()}<div class="container mx-auto px-4 py-16 -mt-32 relative z-20"> <div class="grid gap-8 lg:grid-cols-12"> <!-- Main Content --> <div class="lg:col-span-8 space-y-8 animate-fade-in-up [animation-delay:300ms]"> <!-- Gallery Section --> ${location.gallery && location.gallery.length > 0 && renderTemplate`<div class="bg-white rounded-3xl p-8 shadow-soft border border-neutral-100"> <div class="flex items-center gap-3 mb-6"> <div class="p-2 bg-accent-50 rounded-lg text-accent-600"> ${renderComponent($$result2, "ImageIcon", Image, { "className": "h-6 w-6" })} </div> <h2 class="text-2xl font-display font-bold text-primary-900">Branch Gallery</h2> </div> <div class="grid grid-cols-2 md:grid-cols-3 gap-4"> ${location.gallery.map((image) => renderTemplate`<div class="aspect-square rounded-2xl overflow-hidden cursor-pointer hover:opacity-90 transition group relative shadow-sm"> <img${addAttribute(getImageUrl(image, 600, 600), "src")}${addAttribute(image.alt || "Location photo", "alt")} class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"> <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div> </div>`)} </div> </div>`} <!-- Services Section --> ${location.servicesAvailable && location.servicesAvailable.length > 0 && renderTemplate`<div class="bg-white rounded-3xl p-8 shadow-soft border border-neutral-100"> <div class="flex items-center gap-3 mb-6"> <div class="p-2 bg-primary-50 rounded-lg text-primary-600"> ${renderComponent($$result2, "Briefcase", Briefcase, { "className": "h-6 w-6" })} </div> <h2 class="text-2xl font-display font-bold text-primary-900">Services Available</h2> </div> <div class="grid gap-4 sm:grid-cols-2"> ${location.servicesAvailable.map((service) => renderTemplate`<a${addAttribute(`/services/${service.slug.current}`, "href")} class="flex items-center gap-3 p-4 rounded-xl bg-neutral-50 hover:bg-primary-50 hover:shadow-sm transition-all group border border-transparent hover:border-primary-100"> <div class="shrink-0 rounded-full bg-white p-1 text-green-500 shadow-sm"> ${renderComponent($$result2, "CircleCheck", CircleCheck, { "className": "h-4 w-4" })} </div> <span class="font-medium text-neutral-700 group-hover:text-primary-700"> ${service.title} </span> </a>`)} </div> </div>`} <!-- Map Section --> <div class="h-[400px] md:h-[500px] rounded-3xl shadow-soft bg-white border border-neutral-100 overflow-hidden"> ${renderComponent($$result2, "GoogleMap", GoogleMap, { "server:defer": true, "embedUrl": location.mapEmbedUrl, "className": "w-full h-full", "server:component-directive": "defer", "server:component-path": "D:/SMF/website/atozbusiness/src/components/location/GoogleMap", "server:component-export": "default" }, { "fallback": async ($$result3) => renderTemplate`<div class="flex h-full w-full flex-col items-center justify-center bg-neutral-100 text-neutral-400 relative overflow-hidden"> <div class="absolute inset-0 bg-[url('https://www.gstatic.com/images/branding/product/2x/maps_96dp.png')] opacity-5 bg-center bg-no-repeat grayscale"></div> <div class="relative z-10 flex flex-col items-center animate-pulse"> <div class="h-12 w-12 rounded-full bg-neutral-200 flex items-center justify-center mb-3"> <div class="h-6 w-6 text-neutral-400"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg> </div> </div> <span class="font-medium text-sm">Loading Map...</span> </div> </div>` })} </div> </div> <!-- Sidebar --> <div class="lg:col-span-4 animate-fade-in-up [animation-delay:400ms]"> <div class="sticky top-24"> ${renderComponent($$result2, "ContactInfo", $$ContactInfo, { "location": location })} <!-- Helper CTA --> <div class="mt-6 rounded-3xl bg-neutral-900 p-8 text-center text-white relative overflow-hidden"> <div class="relative z-10"> <h3 class="font-display font-bold text-xl mb-2">Need immediate help?</h3> <p class="text-neutral-400 text-sm mb-6">Our experts are ready to assist you.</p> <a${addAttribute(`tel:${location.phone}`, "href")} class="block w-full rounded-xl bg-white text-neutral-900 font-bold py-3 hover:bg-neutral-200 transition-colors">
Call Now
</a> </div> <!-- Background blobs --> <div class="absolute top-0 right-0 w-32 h-32 bg-primary-500/20 blur-2xl rounded-full"></div> <div class="absolute bottom-0 left-0 w-32 h-32 bg-accent-500/20 blur-2xl rounded-full"></div> </div> </div> </div> </div> </div> `, "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "SEO", $$SEO, { "slot": "head", "schema": schema, "breadcrumbs": breadcrumbs, "keywords": ["typing center", location.area, "PRO services", location.name, "Abu Dhabi"] })}` })}`;
}, "D:/SMF/website/atozbusiness/src/pages/locations/[slug].astro", "self");

const $$file = "D:/SMF/website/atozbusiness/src/pages/locations/[slug].astro";
const $$url = "/locations/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
