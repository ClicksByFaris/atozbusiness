import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, n as renderSlot, r as renderTemplate } from './astro/server_BZ7qSQHj.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const {
    variant = "default",
    padding = "md",
    class: className = ""
  } = Astro2.props;
  const baseClasses = "bg-white rounded-xl transition-all duration-300";
  const variantClasses = {
    default: "shadow-soft",
    hover: "shadow-soft hover:shadow-lg hover:-translate-y-1",
    bordered: "border-2 border-gray-200 hover:border-primary-300"
  };
  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  };
  const classes = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classes, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "D:/SMF/website/atozbusiness/src/components/ui/Card.astro", void 0);

export { $$Card as $ };
