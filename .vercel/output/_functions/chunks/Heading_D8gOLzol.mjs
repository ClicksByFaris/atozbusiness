import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, n as renderSlot } from './astro/server_BZ7qSQHj.mjs';
import 'piccolore';

const $$Astro = createAstro();
const $$Heading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Heading;
  const {
    as: Tag = "h2",
    size,
    gradient = false,
    class: className = ""
  } = Astro2.props;
  const defaultSizes = {
    h1: "4xl",
    h2: "3xl",
    h3: "2xl",
    h4: "xl",
    h5: "lg",
    h6: "lg"
  };
  const actualSize = size || defaultSizes[Tag];
  const sizeClasses = {
    "6xl": "text-4xl md:text-5xl lg:text-6xl",
    "5xl": "text-3xl md:text-4xl lg:text-5xl",
    "4xl": "text-3xl md:text-4xl",
    "3xl": "text-2xl md:text-3xl",
    "2xl": "text-xl md:text-2xl",
    xl: "text-lg md:text-xl",
    lg: "text-base md:text-lg"
  };
  const baseClasses = "font-display font-bold text-gray-900";
  const gradientClass = gradient ? "bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent" : "";
  const classes = `${baseClasses} ${sizeClasses[actualSize]} ${gradientClass} ${className}`;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": classes }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "D:/SMF/website/atozbusiness/src/components/ui/Heading.astro", void 0);

export { $$Heading as $ };
