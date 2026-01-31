import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, n as renderSlot, r as renderTemplate } from './astro/server_BZ7qSQHj.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Section;
  const { background = "white", padding = "md", class: className = "" } = Astro2.props;
  const backgroundClasses = {
    white: "bg-white",
    light: "bg-neutral-50",
    gray: "bg-neutral-100",
    gradient: "bg-gradient-to-br from-primary-500 to-secondary-500",
    transparent: "bg-transparent"
  };
  const paddingClasses = {
    sm: "py-12 md:py-16",
    md: "py-16 md:py-24",
    lg: "py-20 md:py-32"
  };
  const classes = `${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(classes, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "D:/SMF/website/atozbusiness/src/components/ui/Section.astro", void 0);

export { $$Section as $ };
