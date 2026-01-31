import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function FAQAccordion({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(0);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-3xl space-y-4", children: faqs.map((faq, index) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: "overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md",
      children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => toggleFAQ(index),
            className: "flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-neutral-50",
            "aria-expanded": openIndex === index,
            children: [
              /* @__PURE__ */ jsx("span", { className: "font-display text-lg font-semibold text-neutral-900", children: faq.question }),
              /* @__PURE__ */ jsx(
                ChevronDown,
                {
                  size: 20,
                  className: `flex-shrink-0 text-primary-600 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96" : "max-h-0"}`,
            children: /* @__PURE__ */ jsx("div", { className: "border-t border-neutral-100 px-6 py-5 text-neutral-700", children: faq.answer })
          }
        )
      ]
    },
    index
  )) });
}

export { FAQAccordion as F };
