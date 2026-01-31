import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, k as renderComponent, r as renderTemplate } from './astro/server_BZ7qSQHj.mjs';
import 'piccolore';
import { I as Icon } from './Icon_Dg0Sj1DE.mjs';

const $$Astro = createAstro();
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { items, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav aria-label="Breadcrumb"${addAttribute(["animate-fade-in-up ", className], "class:list")}> <ol class="flex items-start gap-2 px-4 py-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 shadow-soft"> <li> <a href="/" class="group flex items-center justify-center p-1 rounded-lg text-neutral-500 hover:text-primary-600 hover:bg-primary-50 dark:text-neutral-400 dark:hover:text-primary-400 dark:hover:bg-primary-900/30 transition-all duration-200" aria-label="Home"> ${renderComponent($$result, "Icon", Icon, { "name": "Home", "className": "w-5 h-5", "client:idle": true, "client:component-hydration": "idle", "client:component-path": "D:/SMF/website/atozbusiness/src/components/icons/Icon.tsx", "client:component-export": "default" })} </a> </li> ${items.map((item, index) => renderTemplate`<li class="flex items-center gap-2"> ${renderComponent($$result, "Icon", Icon, { "name": "ChevronRight", "className": "w-4 h-4 text-neutral-300 dark:text-neutral-600", "client:idle": true, "client:component-hydration": "idle", "client:component-path": "D:/SMF/website/atozbusiness/src/components/icons/Icon.tsx", "client:component-export": "default" })} ${index === items.length - 1 ? renderTemplate`<span class="px-2.5 py-1 text-sm font-semibold text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/20 rounded-md" aria-current="page"> ${item.name} </span>` : renderTemplate`<a${addAttribute(item.url, "href")} class="px-2 py-1 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-md transition-all duration-200"> ${item.name} </a>`} </li>`)} </ol> </nav>`;
}, "D:/SMF/website/atozbusiness/src/components/shared/Breadcrumbs.astro", void 0);

export { $$Breadcrumbs as $ };
