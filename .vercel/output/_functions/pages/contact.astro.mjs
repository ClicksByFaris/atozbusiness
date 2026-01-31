/* empty css                                 */
import { e as createComponent, f as createAstro, m as maybeRenderHead, r as renderTemplate, h as addAttribute, k as renderComponent, u as unescapeHTML } from '../chunks/astro/server_BZ7qSQHj.mjs';
import 'piccolore';
import { $ as $$BaseLayout, a as $$Container, B as BUSINESS_INFO, L as LOCATIONS$1 } from '../chunks/BaseLayout_CN0PIlj-.mjs';
import { $ as $$Section } from '../chunks/Section_DEO5dccL.mjs';
import { $ as $$Heading } from '../chunks/Heading_D8gOLzol.mjs';
import 'clsx';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ContactCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactCard;
  const { icon, title, value, href, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="group relative bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary-300"> <!-- Icon --> <div class="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 mb-4 group-hover:scale-110 transition-transform duration-300"> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> ${icon === "Phone" && renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>`} ${icon === "Mail" && renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>`} ${icon === "MessageCircle" && renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>`} ${icon === "MapPin" && renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>`} ${icon === "Clock" && renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>`} </svg> </div> <!-- Content --> <div class="space-y-2"> <h3 class="text-lg font-semibold text-neutral-900">${title}</h3> ${href ? renderTemplate`<a${addAttribute(href, "href")} class="inline-block text-primary-600 hover:text-primary-700 font-medium transition-colors text-lg"> ${value} </a>` : renderTemplate`<p class="text-neutral-900 font-medium text-lg">${value}</p>`} ${description && renderTemplate`<p class="text-neutral-600 text-sm">${description}</p>`} </div> <!-- Hover effect indicator --> <div class="absolute inset-0 rounded-xl ring-2 ring-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div> </div>`;
}, "D:/SMF/website/atozbusiness/src/components/contact/ContactCard.astro", void 0);

const SERVICES = [
  "Golden Visa Services",
  "PRO Services",
  "Family Visa Typing",
  "New Company Formation",
  "TAMM Services",
  "Certificate Attestation",
  "Trade License Renewal",
  "Emirates ID Services",
  "Visa Cancellation Services",
  "Health Insurance Assistance",
  "Investor Visa Services",
  "Business License Amendment",
  "Legal Translation Services",
  "Document Clearing",
  "Tenancy Contract Registration",
  "Immigration Consultation",
  "Power of Attorney Services",
  "Notary Public Services",
  "Ministry Approvals",
  "Free Zone Setup"
];
const LOCATIONS = [
  "Khalidiya Branch",
  "Al Zahiyah Branch",
  "No Preference"
];
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-+()]{8,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.service) {
      newErrors.service = "Please select a service";
    }
    if (!formData.location) {
      newErrors.location = "Please select a preferred location";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      const whatsappMessage = `Hello! I'm interested in ${formData.service}.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Preferred Location: ${formData.location}

Message: ${formData.message}`;
      const whatsappUrl = `https://wa.me/971503489891?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, "_blank");
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        location: "",
        message: ""
      });
      setTimeout(() => setSubmitStatus("idle"), 5e3);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5e3);
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: void 0 }));
    }
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("label", { htmlFor: "name", className: "block text-sm font-medium text-neutral-700 mb-2", children: [
        "Full Name ",
        /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
      ] }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          id: "name",
          name: "name",
          value: formData.name,
          onChange: handleChange,
          className: `w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${errors.name ? "border-red-500 focus:ring-red-500" : "border-neutral-300 focus:ring-primary-500 focus:border-primary-500"}`,
          placeholder: "John Doe"
        }
      ),
      errors.name && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-red-500", children: errors.name })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("label", { htmlFor: "email", className: "block text-sm font-medium text-neutral-700 mb-2", children: [
        "Email Address ",
        /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
      ] }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "email",
          id: "email",
          name: "email",
          value: formData.email,
          onChange: handleChange,
          className: `w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${errors.email ? "border-red-500 focus:ring-red-500" : "border-neutral-300 focus:ring-primary-500 focus:border-primary-500"}`,
          placeholder: "john@example.com"
        }
      ),
      errors.email && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-red-500", children: errors.email })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("label", { htmlFor: "phone", className: "block text-sm font-medium text-neutral-700 mb-2", children: [
        "Phone Number ",
        /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
      ] }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "tel",
          id: "phone",
          name: "phone",
          value: formData.phone,
          onChange: handleChange,
          className: `w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${errors.phone ? "border-red-500 focus:ring-red-500" : "border-neutral-300 focus:ring-primary-500 focus:border-primary-500"}`,
          placeholder: "+971 50 123 4567"
        }
      ),
      errors.phone && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-red-500", children: errors.phone })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("label", { htmlFor: "service", className: "block text-sm font-medium text-neutral-700 mb-2", children: [
        "Service Interested In ",
        /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
      ] }),
      /* @__PURE__ */ jsxs(
        "select",
        {
          id: "service",
          name: "service",
          value: formData.service,
          onChange: handleChange,
          className: `w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${errors.service ? "border-red-500 focus:ring-red-500" : "border-neutral-300 focus:ring-primary-500 focus:border-primary-500"}`,
          children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "Select a service..." }),
            SERVICES.map((service) => /* @__PURE__ */ jsx("option", { value: service, children: service }, service))
          ]
        }
      ),
      errors.service && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-red-500", children: errors.service })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("label", { htmlFor: "location", className: "block text-sm font-medium text-neutral-700 mb-2", children: [
        "Preferred Location ",
        /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
      ] }),
      /* @__PURE__ */ jsxs(
        "select",
        {
          id: "location",
          name: "location",
          value: formData.location,
          onChange: handleChange,
          className: `w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${errors.location ? "border-red-500 focus:ring-red-500" : "border-neutral-300 focus:ring-primary-500 focus:border-primary-500"}`,
          children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "Select a location..." }),
            LOCATIONS.map((location) => /* @__PURE__ */ jsx("option", { value: location, children: location }, location))
          ]
        }
      ),
      errors.location && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-red-500", children: errors.location })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("label", { htmlFor: "message", className: "block text-sm font-medium text-neutral-700 mb-2", children: [
        "Message ",
        /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
      ] }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          id: "message",
          name: "message",
          value: formData.message,
          onChange: handleChange,
          rows: 5,
          className: `w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors resize-none ${errors.message ? "border-red-500 focus:ring-red-500" : "border-neutral-300 focus:ring-primary-500 focus:border-primary-500"}`,
          placeholder: "Please describe how we can help you..."
        }
      ),
      errors.message && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-red-500", children: errors.message })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        disabled: isSubmitting,
        className: "w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold py-4 px-6 rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
        children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("svg", { className: "animate-spin h-5 w-5 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
            /* @__PURE__ */ jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
          ] }),
          "Sending..."
        ] }) : "Send Message"
      }
    ),
    submitStatus === "success" && /* @__PURE__ */ jsx("div", { className: "p-4 bg-green-50 border border-green-200 rounded-lg", children: /* @__PURE__ */ jsx("p", { className: "text-green-800 text-sm font-medium", children: "✓ Message sent successfully! We'll get back to you soon." }) }),
    submitStatus === "error" && /* @__PURE__ */ jsx("div", { className: "p-4 bg-red-50 border border-red-200 rounded-lg", children: /* @__PURE__ */ jsx("p", { className: "text-red-800 text-sm font-medium", children: "✗ Failed to send message. Please try calling us instead." }) })
  ] });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Contact Us - A to Z Business Services";
  const pageDescription = "Get in touch with A to Z Business for all your typing, PRO, and business setup needs in Abu Dhabi. Visit our Khalidiya or Al Zahiyah branches.";
  const contactMethods = [
    {
      icon: "Phone",
      title: "Call Us",
      value: BUSINESS_INFO.phone,
      href: `tel:${BUSINESS_INFO.phone.replace(/[\s-]/g, "")}`,
      description: "Monday - Saturday: 8:00 AM - 9:00 PM"
    },
    {
      icon: "MessageCircle",
      title: "WhatsApp",
      value: BUSINESS_INFO.whatsapp,
      href: `https://wa.me/${BUSINESS_INFO.whatsapp.replace(/[\s+-]/g, "")}`,
      description: "Quick response via WhatsApp"
    },
    {
      icon: "Mail",
      title: "Email",
      value: BUSINESS_INFO.email,
      href: `mailto:${BUSINESS_INFO.email}`,
      description: "We respond within 24 hours"
    },
    {
      icon: "Clock",
      title: "Business Hours",
      value: "Mon-Sat: 8 AM - 9 PM",
      description: "Closed on Sundays"
    }
  ];
  const locationCards = [
    {
      icon: "MapPin",
      title: LOCATIONS$1.main.name,
      value: LOCATIONS$1.main.address,
      href: "https://maps.google.com/?q=Khalidiya+Mall+Abu+Dhabi",
      description: "Opposite Khalidiya Mall, Abu Dhabi"
    },
    {
      icon: "MapPin",
      title: LOCATIONS$1.branch.name,
      value: LOCATIONS$1.branch.area + ", " + LOCATIONS$1.branch.city,
      description: "Serving Al Zahiyah and surrounding areas"
    }
  ];
  const contactFAQs = [
    {
      question: "Do I need an appointment?",
      answer: "No appointment necessary! We welcome walk-ins during business hours. However, for complex services like company formation, calling ahead ensures we have a specialist ready for you."
    },
    {
      question: "Can I get same-day service?",
      answer: "Yes! For many typing services, we offer same-day completion. For urgent requirements, please call us at " + BUSINESS_INFO.phone + " to confirm availability."
    },
    {
      question: "Which location should I visit?",
      answer: "Both locations offer the same services. Choose Khalidiya for central Abu Dhabi or Al Zahiyah for the city area. We can also come to you for corporate clients."
    },
    {
      question: "How can I track my application?",
      answer: "Once you submit documents, we provide regular updates via WhatsApp or phone. You can also call us anytime for status updates on your application."
    }
  ];
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: pageTitle,
    description: pageDescription,
    url: BUSINESS_INFO.website + "/contact",
    mainEntity: {
      "@type": "LocalBusiness",
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.phone,
      email: BUSINESS_INFO.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: LOCATIONS$1.main.address,
        addressLocality: LOCATIONS$1.main.area,
        addressRegion: LOCATIONS$1.main.city,
        addressCountry: "AE"
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "21:00"
      }
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', "<\/script>  ", `<section class="relative bg-primary-900 py-24 overflow-hidden"> <!-- Background Effects --> <div class="absolute inset-0 z-0"> <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div> <div class="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/90 to-primary-800/80"></div> </div> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/20 rounded-full blur-[100px] opacity-30 pointer-events-none"></div> <div class="container relative z-10 mx-auto px-4 text-center"> <div class="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md border border-white/10 mb-6 animate-fade-in-up"> <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> <span>We're Here to Help</span> </div> <h1 class="font-display text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up [animation-delay:100ms] tracking-tight">
Contact A to Z Business
</h1> <p class="mx-auto max-w-2xl text-lg text-primary-100/90 animate-fade-in-up [animation-delay:200ms] leading-relaxed">
Ready to get started? Reach out to us through any of the channels below. Our team is here to
        assist you with all your government documentation needs.
</p> <!-- Quick Contact Buttons --> <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-fade-in-up [animation-delay:300ms]"> <a`, ' target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-900 rounded-xl font-bold hover:bg-neutral-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path> </svg>\nWhatsApp Us\n</a> <a', ' class="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-xl font-bold hover:bg-white/20 transition-all duration-300"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> ', " </a> </div> </div> </section>  ", "  ", "  ", " "])), unescapeHTML(JSON.stringify(contactPageSchema)), maybeRenderHead(), addAttribute(`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/[\s+-]/g, "")}`, "href"), addAttribute(`tel:${BUSINESS_INFO.phone.replace(/[\s-]/g, "")}`, "href"), BUSINESS_INFO.phone, renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Container", $$Container, {}, { "default": ($$result4) => renderTemplate` <div class="text-center mb-12"> ${renderComponent($$result4, "Heading", $$Heading, { "tag": "h2", "size": "3xl" }, { "default": ($$result5) => renderTemplate` How to Reach Us ` })} <p class="text-neutral-600 mt-4 text-lg max-w-2xl mx-auto">
Choose the most convenient way to get in touch. We're available through multiple channels.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> ${contactMethods.map((method) => renderTemplate`${renderComponent($$result4, "ContactCard", $$ContactCard, { ...method })}`)} </div> ` })} ` }), renderComponent($$result2, "Section", $$Section, { "background": "light" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Container", $$Container, {}, { "default": ($$result4) => renderTemplate` <div class="text-center mb-12"> ${renderComponent($$result4, "Heading", $$Heading, { "tag": "h2", "size": "3xl" }, { "default": ($$result5) => renderTemplate` Our Locations ` })} <p class="text-neutral-600 mt-4 text-lg max-w-2xl mx-auto">
Visit us at either of our convenient Abu Dhabi locations. Both offices offer the full
          range of our services.
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto"> ${locationCards.map((location) => renderTemplate`${renderComponent($$result4, "ContactCard", $$ContactCard, { ...location })}`)} </div> ` })} ` }), renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Container", $$Container, {}, { "default": ($$result4) => renderTemplate` <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"> <!-- Left: Info --> <div class="space-y-6"> <div> ${renderComponent($$result4, "Heading", $$Heading, { "tag": "h2", "size": "3xl" }, { "default": ($$result5) => renderTemplate` Send Us a Message ` })} <p class="text-neutral-600 mt-4 text-lg">
Fill out the form and we'll get back to you within 24 hours. For urgent matters,
              please call or WhatsApp us directly.
</p> </div> <div class="space-y-4"> <h3 class="text-xl font-semibold text-neutral-900">Why Choose A to Z Business?</h3> <ul class="space-y-3"> <li class="flex items-start gap-3"> <svg class="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-neutral-700"><strong class="text-neutral-900">Extended Hours:</strong> Open 8 AM - 9 PM, Monday
                  to Saturday</span> </li> <li class="flex items-start gap-3"> <svg class="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-neutral-700"><strong class="text-neutral-900">Expert Team:</strong> Experienced PROs familiar with
                  all government procedures</span> </li> <li class="flex items-start gap-3"> <svg class="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-neutral-700"><strong class="text-neutral-900">Fast Processing:</strong> Same-day service available
                  for many typing services</span> </li> <li class="flex items-start gap-3"> <svg class="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-neutral-700"><strong class="text-neutral-900">Two Locations:</strong> Khalidiya and Al Zahiyah for
                  >
</span> </li> </ul> <!-- Trust Signals --> <div class="grid grid-cols-2 gap-4 pt-6"> <div class="text-center p-4 bg-neutral-50 rounded-lg"> <div class="text-3xl font-bold text-primary-600">10+</div> <div class="text-sm text-neutral-600 mt-1">Years Experience</div> </div> <div class="text-center p-4 bg-neutral-50 rounded-lg"> <div class="text-3xl font-bold text-primary-600">15,000+</div> <div class="text-sm text-neutral-600 mt-1">Clients Served</div> </div> </div> </div> <!-- Right: Form --> <div class="bg-white border border-neutral-200 rounded-2xl p-8 shadow-lg"> ${renderComponent($$result4, "ContactForm", ContactForm, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "D:/SMF/website/atozbusiness/src/components/contact/ContactForm", "client:component-export": "default" })} </div> </div> </div> ` })}  ${renderComponent($$result3, "Section", $$Section, { "background": "light" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Container", $$Container, {}, { "default": ($$result5) => renderTemplate` <div class="text-center mb-12"> ${renderComponent($$result5, "Heading", $$Heading, { "tag": "h2", "size": "3xl" }, { "default": ($$result6) => renderTemplate` Frequently Asked Questions ` })} <p class="text-neutral-600 mt-4 text-lg max-w-2xl mx-auto">
Common questions about contacting and visiting us.
</p> </div> <div class="max-w-3xl mx-auto space-y-4"> ${contactFAQs.map((faq, index) => renderTemplate`<details class="group bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-md transition-shadow"> <summary class="flex items-center justify-between cursor-pointer list-none"> <h3 class="text-lg font-semibold text-neutral-900 pr-8">${faq.question}</h3> <svg class="w-5 h-5 text-neutral-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </summary> <p class="text-neutral-600 mt-4 leading-relaxed">${faq.answer}</p> </details>`)} </div> ` })} ` })}  ${renderComponent($$result3, "Section", $$Section, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Container", $$Container, {}, { "default": ($$result5) => renderTemplate` <div class="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-12 text-center"> ${renderComponent($$result5, "Heading", $$Heading, { "tag": "h2", "size": "3xl", "className": "text-white" }, { "default": ($$result6) => renderTemplate` Ready to Get Started? ` })} <p class="text-white/90 text-lg mt-4 max-w-2xl mx-auto">
Don't wait! Contact us today and let our expert team handle all your government
            documentation needs.
</p> <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"> <a${addAttribute(`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/[\s+-]/g, "")}`, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-neutral-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path> </svg>
Chat on WhatsApp
</a> <a${addAttribute(`tel:${BUSINESS_INFO.phone.replace(/[\s-]/g, "")}`, "href")} class="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg>
Call Now
</a> </div> </div> ` })} ` })} ` })) })}`;
}, "D:/SMF/website/atozbusiness/src/pages/contact.astro", void 0);

const $$file = "D:/SMF/website/atozbusiness/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
