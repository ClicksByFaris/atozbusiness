import { e as createComponent, f as createAstro, r as renderTemplate, h as addAttribute, u as unescapeHTML } from './astro/server_BZ7qSQHj.mjs';
import 'piccolore';
import 'clsx';
import { g as getKeywordsString, S as SEO_DEFAULTS, B as BUSINESS_INFO, d as SOCIAL_DEFAULTS, L as LOCATIONS } from './BaseLayout_CN0PIlj-.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SEO;
  const {
    keywords = [],
    schema,
    breadcrumbs,
    author,
    publishDate,
    modifiedDate,
    additionalMeta = [],
    robots
  } = Astro2.props;
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  } : null;
  const allSchemas = [];
  if (schema) {
    allSchemas.push(...Array.isArray(schema) ? schema : [schema]);
  }
  if (breadcrumbSchema) {
    allSchemas.push(breadcrumbSchema);
  }
  return renderTemplate`<!-- Keywords (for traditional SEO) -->${keywords.length > 0 && renderTemplate`<meta name="keywords"${addAttribute(getKeywordsString(keywords), "content")}>`}<!-- Robots meta tag -->${robots && renderTemplate`<meta name="robots"${addAttribute(robots, "content")}>`}<!-- Author (for articles/blog posts) -->${author && renderTemplate`<meta name="author"${addAttribute(author, "content")}>`}<!-- Article dates (for blog posts) -->${publishDate && renderTemplate`<meta property="article:published_time"${addAttribute(publishDate.toString(), "content")}>`}${modifiedDate && renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedDate.toString(), "content")}>`}<!-- Additional custom meta tags -->${additionalMeta.map((meta) => renderTemplate`<meta${addAttribute(meta.name, "name")}${addAttribute(meta.content, "content")}>`)}<!-- Structured Data (Schema.org JSON-LD) -->${allSchemas.length > 0 && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(allSchemas.length === 1 ? allSchemas[0] : allSchemas)))}`;
}, "D:/SMF/website/atozbusiness/src/components/SEO.astro", void 0);

function generateLocalBusinessSchema(props = {}) {
  const {
    name = BUSINESS_INFO.name,
    description = "Professional typing, PRO services, visa processing and company formation in Abu Dhabi",
    location = "main",
    additionalTypes = ["ProfessionalService", "GovernmentOffice"]
  } = props;
  const mainOffice = {
    "@type": ["LocalBusiness", ...additionalTypes],
    "@id": `${SEO_DEFAULTS.siteUrl}/#organization`,
    name,
    description,
    url: SEO_DEFAULTS.siteUrl,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    logo: {
      "@type": "ImageObject",
      url: `${SEO_DEFAULTS.siteUrl}/logo.png`
    },
    image: {
      "@type": "ImageObject",
      url: `${SEO_DEFAULTS.siteUrl}/og-image.jpg`
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: LOCATIONS.main.address,
      addressLocality: LOCATIONS.main.area,
      addressRegion: LOCATIONS.main.city,
      addressCountry: "AE"
    },
    geo: {
      "@type": "GeoCoordinates"
      // Will be added when we have actual coordinates
      // latitude: 24.xxxx,
      // longitude: 54.xxxx,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "00:00",
        closes: "00:00"
        // Closed
      }
    ],
    priceRange: "AED",
    areaServed: {
      "@type": "City",
      name: "Abu Dhabi"
    },
    sameAs: [
      SOCIAL_DEFAULTS.ogLocale
      // Will add social media URLs when available
      // 'https://facebook.com/atozbusiness',
      // 'https://instagram.com/atozbusiness',
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS_INFO.phone,
      contactType: "customer service",
      availableLanguage: ["English", "Arabic", "Hindi", "Urdu"],
      areaServed: "AE"
    }
  };
  if (location === "all") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        mainOffice,
        {
          ...mainOffice,
          "@id": `${SEO_DEFAULTS.siteUrl}/#branch`,
          name: `${name} - ${LOCATIONS.branch.name}`,
          address: {
            "@type": "PostalAddress",
            addressLocality: LOCATIONS.branch.area,
            addressRegion: LOCATIONS.branch.city,
            addressCountry: "AE"
          }
        }
      ]
    };
  }
  return {
    "@context": "https://schema.org",
    ...mainOffice
  };
}
function generateLocationSchema(locationData) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${BUSINESS_INFO.name} - ${locationData.name}`,
    ...locationData.image && { image: locationData.image },
    address: {
      "@type": "PostalAddress",
      streetAddress: locationData.address,
      addressLocality: locationData.area,
      addressRegion: locationData.city,
      addressCountry: "AE"
    },
    ...locationData.latitude && locationData.longitude && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: locationData.latitude,
        longitude: locationData.longitude
      }
    },
    telephone: locationData.phone || BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    url: SEO_DEFAULTS.siteUrl
  };
}

export { $$SEO as $, generateLocalBusinessSchema as a, generateLocationSchema as g };
