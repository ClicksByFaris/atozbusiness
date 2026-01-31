/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_BZ7qSQHj.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CN0PIlj-.mjs';
import { $ as $$LocationCard } from '../chunks/LocationCard_nv8svkti.mjs';
import { s as sanityClient, a as locationsQuery } from '../chunks/queries_C-37W4Vo.mjs';
import { MapPin } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const locations = await sanityClient.fetch(locationsQuery);
  const settings = {
    title: "Our Locations | AtoZ Business Services",
    description: "Visit our branches in Abu Dhabi. Conveniently located centers for all your typing and PRO service needs."
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": settings.title, "description": settings.description }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative bg-primary-900 py-24 overflow-hidden"> <!-- Background Effects --> <div class="absolute inset-0 z-0"> <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div> <div class="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/90 to-primary-800/80"></div> </div> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/20 rounded-full blur-[100px] opacity-30 pointer-events-none"></div> <div class="container relative z-10 mx-auto px-4 text-center"> <div class="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md border border-white/10 mb-6 animate-fade-in-up"> ${renderComponent($$result2, "MapPin", MapPin, { "className": "h-4 w-4 text-accent-400" })} <span>Serving Abu Dhabi</span> </div> <h1 class="font-display text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up [animation-delay:100ms] tracking-tight">
Find Your Nearest Center
</h1> <p class="mx-auto max-w-2xl text-lg text-primary-100/90 animate-fade-in-up [animation-delay:200ms] leading-relaxed">
We are strategically located across key areas in Abu Dhabi to serve you better. Visit any of
        our branches for premium government and business services.
</p> </div> </section>  <section class="py-24 bg-neutral-50 relative"> <div class="container mx-auto px-4"> ${locations && locations.length > 0 ? renderTemplate`<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"> ${locations.map((location, index) => renderTemplate`<div${addAttribute(`h-full animate-fade-in-up`, "class")}${addAttribute(`animation-delay: ${index * 100}ms`, "style")}> ${renderComponent($$result2, "LocationCard", $$LocationCard, { "location": location })} </div>`)} </div>` : renderTemplate`<div class="text-center py-20 bg-white rounded-3xl shadow-sm border border-neutral-100"> ${renderComponent($$result2, "MapPin", MapPin, { "className": "h-16 w-16 text-neutral-200 mx-auto mb-4" })} <h3 class="text-xl font-display font-semibold text-neutral-900 mb-2">
No Locations Found
</h3> <p class="text-neutral-500">
We are currently updating our branch listings. Please check back soon.
</p> </div>`} </div> </section>  <section class="bg-white py-24 border-t border-neutral-100"> <div class="container mx-auto px-4"> <div class="rounded-3xl bg-primary-900 p-8 md:p-16 text-center text-white shadow-2xl shadow-primary-900/20 relative overflow-hidden group"> <div class="relative z-10 max-w-3xl mx-auto"> <h2 class="font-display text-3xl md:text-4xl font-bold mb-6">
Can't visit us in person?
</h2> <p class="text-primary-100/90 text-lg mb-10 leading-relaxed">
We offer comprehensive digital services for many of our typing and PRO solutions. Handle
            your documents from the comfort of your home or office.
</p> <div class="flex flex-wrap justify-center gap-4"> <a href="/contact" class="rounded-xl bg-white px-8 py-3.5 font-semibold text-primary-900 transition hover:bg-neutral-100 hover:scale-105 active:scale-95 shadow-lg shadow-white/10">Contact Support</a> <a href="/services" class="rounded-xl border border-white/30 bg-white/5 px-8 py-3.5 font-semibold text-white transition hover:bg-white/10 backdrop-blur-sm">View Online Services</a> </div> </div> <!-- Decorative elements --> <div class="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent-500/20 transition-colors duration-700"></div> <div class="absolute bottom-0 left-0 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-primary-500/30 transition-colors duration-700"></div> </div> </div> </section> ` })}`;
}, "D:/SMF/website/atozbusiness/src/pages/locations/index.astro", void 0);

const $$file = "D:/SMF/website/atozbusiness/src/pages/locations/index.astro";
const $$url = "/locations";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
