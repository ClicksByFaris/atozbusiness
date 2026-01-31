import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, r as renderTemplate, k as renderComponent } from './astro/server_BZ7qSQHj.mjs';
import { u as urlFor } from './queries_C-37W4Vo.mjs';
/* empty css                         */
import 'clsx';
import 'piccolore';
import { a as $$Container, B as BUSINESS_INFO } from './BaseLayout_CN0PIlj-.mjs';
import { $ as $$Section } from './Section_DEO5dccL.mjs';
import { I as Icon } from './Icon_Dg0Sj1DE.mjs';

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const $$Astro = createAstro();
const $$SanityImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SanityImage;
  const {
    node,
    width,
    height,
    className,
    class: classProp,
    style,
    alt,
    sizes = "(max-width: 768px) 100vw, 1200px",
    priority = false,
    quality = 80,
    ...attrs
  } = Astro2.props;
  let determinedWidth = width;
  let determinedHeight = height;
  const metadata = node?.asset?.metadata;
  if (!determinedWidth && !determinedHeight && metadata?.dimensions) {
    determinedWidth = metadata.dimensions.width;
    determinedHeight = metadata.dimensions.height;
  } else if (determinedWidth && !determinedHeight && metadata?.dimensions) {
    determinedHeight = Math.round(determinedWidth / metadata.dimensions.aspectRatio);
  } else if (!determinedWidth && determinedHeight && metadata?.dimensions) {
    determinedWidth = Math.round(determinedHeight * metadata.dimensions.aspectRatio);
  }
  if (!determinedWidth && !determinedHeight) {
    determinedWidth = 1200;
  }
  const PREDEFINED_WIDTHS = [640, 768, 1024, 1280, 1536, 1920, 2560];
  const availableWidths = metadata?.dimensions?.width ? PREDEFINED_WIDTHS.filter((w) => w <= metadata.dimensions.width) : PREDEFINED_WIDTHS;
  if (determinedWidth && !availableWidths.includes(determinedWidth) && determinedWidth < 3e3) {
    availableWidths.push(determinedWidth);
  }
  availableWidths.sort((a, b) => a - b);
  if (availableWidths.length === 0 && metadata?.dimensions?.width) {
    availableWidths.push(metadata.dimensions.width);
  }
  const srcset = availableWidths.map((w) => {
    let builder = urlFor(node).width(w).auto("format").quality(quality);
    if (width && height) {
      const targetHeight = Math.round(w * (height / width));
      builder = builder.height(targetHeight);
    }
    return `${builder.url()} ${w}w`;
  }).join(", ");
  let srcBuilder = urlFor(node).auto("format").quality(quality);
  if (determinedWidth) srcBuilder = srcBuilder.width(determinedWidth);
  if (width && height) {
    srcBuilder = srcBuilder.height(determinedHeight);
  }
  const src = srcBuilder.url();
  const lqip = metadata?.lqip;
  const finalClass = cn(
    "sanity-image w-full h-auto object-cover transition-all duration-500",
    lqip && "sanity-image-blur",
    // Only apply blur class if we have lqip
    classProp,
    className
  );
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(src, "src")}${addAttribute(srcset || src, "srcset")}${addAttribute(sizes, "sizes")}${addAttribute(alt || "", "alt")}${addAttribute(determinedWidth, "width")}${addAttribute(determinedHeight, "height")}${addAttribute(priority ? "high" : "auto", "fetchpriority")}${addAttribute(priority ? "eager" : "lazy", "loading")}${addAttribute(priority ? "sync" : "async", "decoding")}${addAttribute(finalClass, "class")}${addAttribute({
    ...style,
    ...lqip ? { backgroundImage: `url(${lqip})`, backgroundSize: "cover", backgroundPosition: "center" } : {}
  }, "style")} data-loaded="false" onload="this.setAttribute('data-loaded', 'true')"${spreadAttributes(attrs)} data-astro-cid-rnopuoin> `;
}, "D:/SMF/website/atozbusiness/src/components/ui/SanityImage.astro", void 0);

const $$CTASection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "background": "gradient", "padding": "lg" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="text-center"> <div class="reveal" data-animation="animate-fade-in-up"> <h2 class="mb-4 font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl">
Ready to Get Started?
</h2> <p class="mb-8 text-xl text-white/90 md:text-2xl">
Let us handle your documentation needs. Contact us today for fast, professional service.
</p> </div> <div class="mb-8 flex flex-wrap items-center justify-center gap-4 reveal" data-animation="animate-fade-in-up"${addAttribute({ animationDelay: "150ms" }, "style")}>  <a${addAttribute(`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/[^0-9]/g, "")}`, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-8 py-4 font-medium text-white shadow-lg transition-all duration-200 hover:bg-accent-600 hover:shadow-xl hover:scale-105"> ${renderComponent($$result3, "Icon", Icon, { "name": "MessageCircle", "size": 24, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/SMF/website/atozbusiness/src/components/icons/Icon", "client:component-export": "default" })} <span class="text-lg">WhatsApp Us Now</span> </a>  <a${addAttribute(`tel:${BUSINESS_INFO.phone}`, "href")} class="inline-flex items-center gap-2 rounded-lg border-2 border-white bg-white px-8 py-4 font-medium text-primary-600 shadow-lg transition-all duration-200 hover:bg-neutral-50 hover:shadow-xl hover:scale-105"> ${renderComponent($$result3, "Icon", Icon, { "name": "Phone", "size": 24, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/SMF/website/atozbusiness/src/components/icons/Icon", "client:component-export": "default" })} <span class="text-lg">Call ${BUSINESS_INFO.phone}</span> </a> </div>  <div class="flex flex-wrap items-center justify-center gap-6 text-white/90 reveal" data-animation="animate-fade-in-up"${addAttribute({ animationDelay: "300ms" }, "style")}> <div class="flex items-center gap-2"> ${renderComponent($$result3, "Icon", Icon, { "name": "Clock", "size": 20, "className": "text-accent-400", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/SMF/website/atozbusiness/src/components/icons/Icon", "client:component-export": "default" })} <span>Open Mon-Sat: 8 AM - 9 PM</span> </div> <div class="flex items-center gap-2"> ${renderComponent($$result3, "Icon", Icon, { "name": "MapPin", "size": 20, "className": "text-accent-400", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/SMF/website/atozbusiness/src/components/icons/Icon", "client:component-export": "default" })} <span>Khalidiya & Al Zahiyah</span> </div> <div class="flex items-center gap-2"> ${renderComponent($$result3, "Icon", Icon, { "name": "Mail", "size": 20, "className": "text-accent-400", "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/SMF/website/atozbusiness/src/components/icons/Icon", "client:component-export": "default" })} <a${addAttribute(`mailto:${BUSINESS_INFO.email}`, "href")} class="hover:text-white transition-colors"> ${BUSINESS_INFO.email} </a> </div> </div> </div> ` })} ` })}`;
}, "D:/SMF/website/atozbusiness/src/components/home/CTASection.astro", void 0);

export { $$SanityImage as $, $$CTASection as a };
