# AtoZ Business Services - Complete Website Structure

## 🏢 Project Overview

**Business:** Abu Dhabi Typing Center & PRO Services  
**Target Market:** UAE (Abu Dhabi focus)  
**Locations:** 2 Physical Offices  
**Services:** 20 Government & Business Services  
**Primary Goal:** High SEO, Fast Performance, Lead Generation

---

## 🎯 Business Information

### Office Locations
1. **Khalidiya Branch (Main)**
   - Address: Mohammed Alhur Al Suwaidi St, opposite Khalidiya Mall, Khalidiya, Abu Dhabi
   - Status: Main/Primary Office
   
2. **Al Zahiyah Branch**
   - Address: Al Zahiyah - E16 02 - Abu Dhabi
   - Status: Secondary Office

### Brand Identity
- **Colors:**
  - Primary (Dark Blue): `#2A5298` - Royal Blue (stability, professionalism)
  - Secondary (Light Blue): `#2D86C7` - Cerulean Blue (vibrancy, modernization)
  - Accent: `#F59E0B` - Warm Orange (CTAs)
  
- **Logo:** `public/assets/logo.png`

### Competitor
- Al Tawakal Typing Center (main competitor to outrank)

---

## 🛠️ Technology Stack

### Core Framework
- **Astro** v5.16.11 - Static Site Generator
- **React** v19.2.3 - Interactive components only
- **TypeScript** - Type safety

### Styling
- **Tailwind CSS** v3.4.19 - Utility-first CSS
- **Lucide React** v0.562.0 - Icon system

### CMS
- **Sanity CMS** - Headless CMS for content management
- Developer/admin will manage content

### Deployment
- **Vercel** - Hosting & deployment platform
- **Adapter:** @astrojs/vercel

### React Client Directives Strategy
- `client:load` - Critical interactions (mobile menu, contact forms)
- `client:idle` - Secondary interactions (WhatsApp button)
- `client:visible` - Below-fold components (testimonials, lazy sections)

---

## 📁 Complete Folder Structure

```
atozbusiness/
├── .git/
├── .gitignore
├── .vscode/
├── node_modules/
├── public/
│   ├── assets/
│   │   ├── logo.png
│   │   ├── logo.svg (optimized version)
│   │   └── images/
│   │       ├── services/ (service images)
│   │       ├── locations/ (office photos)
│   │       ├── team/ (team photos)
│   │       └── gallery/ (portfolio/gallery images)
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml (auto-generated)
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   ├── Navigation.astro
│   │   │   ├── MobileMenu.tsx (React - client:load)
│   │   │   ├── Footer.astro
│   │   │   └── TopBar.astro (contact info bar)
│   │   │
│   │   ├── ui/ (Design System Components)
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   ├── Container.astro
│   │   │   ├── Section.astro
│   │   │   ├── Badge.astro
│   │   │   ├── Heading.astro
│   │   │   └── Grid.astro
│   │   │
│   │   ├── home/ (Homepage Sections)
│   │   │   ├── Hero.astro
│   │   │   ├── ServicesGrid.astro
│   │   │   ├── LocationsSection.astro
│   │   │   ├── WhyChooseUs.astro
│   │   │   ├── HowItWorks.astro
│   │   │   ├── FeaturedBlog.astro
│   │   │   ├── Testimonials.astro
│   │   │   ├── Stats.astro
│   │   │   └── CTASection.astro
│   │   │
│   │   ├── services/
│   │   │   ├── ServiceCard.astro
│   │   │   ├── ServiceHero.astro
│   │   │   ├── ServiceProcess.astro
│   │   │   ├── ServiceDocuments.astro
│   │   │   ├── ServicePricing.astro
│   │   │   ├── ServiceFeatures.astro
│   │   │   ├── RelatedServices.astro
│   │   │   └── ServiceFAQ.astro
│   │   │
│   │   ├── location/
│   │   │   ├── LocationCard.astro
│   │   │   ├── LocationHero.astro
│   │   │   ├── GoogleMap.tsx (React - client:visible)
│   │   │   ├── ContactInfo.astro
│   │   │   ├── Directions.astro
│   │   │   └── LocationServices.astro
│   │   │
│   │   ├── blog/
│   │   │   ├── BlogCard.astro
│   │   │   ├── BlogHero.astro
│   │   │   ├── BlogContent.astro
│   │   │   ├── TableOfContents.tsx (React - client:visible)
│   │   │   ├── RelatedPosts.astro
│   │   │   ├── BlogCategories.astro
│   │   │   └── BlogSearch.tsx (React - client:load)
│   │   │
│   │   ├── shared/
│   │   │   ├── Breadcrumbs.astro
│   │   │   ├── FAQ.astro
│   │   │   ├── ContactForm.tsx (React - client:load)
│   │   │   ├── WhatsAppButton.tsx (React - client:idle - sticky)
│   │   │   ├── CallButton.tsx (React - client:idle)
│   │   │   ├── LocationSelector.tsx (React - client:load)
│   │   │   ├── Schema.astro (JSON-LD generator)
│   │   │   ├── SEO.astro (Meta tags)
│   │   │   └── SocialShare.tsx (React - client:visible)
│   │   │
│   │   └── icons/
│   │       └── Icon.tsx (Lucide wrapper)
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro (Root layout - SEO, scripts, global structure)
│   │   ├── PageLayout.astro (Static pages - About, Contact, etc.)
│   │   ├── ServiceLayout.astro (Service page template)
│   │   ├── BlogLayout.astro (Blog post template)
│   │   ├── BlogListLayout.astro (Blog listing template)
│   │   └── LocationLayout.astro (Location page template)
│   │
│   ├── pages/
│   │   ├── index.astro (Homepage)
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── careers.astro
│   │   ├── gallery.astro
│   │   ├── privacy-policy.astro
│   │   ├── terms-of-service.astro
│   │   │
│   │   ├── services/
│   │   │   ├── index.astro (All services listing)
│   │   │   └── [slug].astro (Dynamic service pages from Sanity)
│   │   │
│   │   ├── locations/
│   │   │   ├── index.astro (All locations overview)
│   │   │   └── [slug].astro (Dynamic location pages)
│   │   │
│   │   └── blog/
│   │       ├── index.astro (Blog listing with pagination)
│   │       ├── category/
│   │       │   └── [slug].astro (Category pages)
│   │       └── [slug].astro (Individual blog posts)
│   │
│   ├── lib/
│   │   ├── sanity.ts (Sanity client configuration)
│   │   ├── queries.ts (GROQ queries for Sanity)
│   │   ├── utils.ts (Helper functions)
│   │   ├── constants.ts (Site-wide constants)
│   │   └── seo.ts (SEO helper functions)
│   │
│   ├── styles/
│   │   └── global.css (Global styles + Tailwind directives)
│   │
│   └── types/
│       ├── sanity.ts (TypeScript types for Sanity schemas)
│       ├── schema.ts (JSON-LD schema types)
│       └── index.ts (General TypeScript types)
│
├── sanity/ (Sanity Studio - separate app)
│   ├── schemas/
│   │   ├── index.ts
│   │   ├── service.ts
│   │   ├── location.ts
│   │   ├── blog.ts
│   │   ├── category.ts
│   │   ├── author.ts
│   │   └── settings.ts
│   ├── sanity.config.ts
│   └── package.json
│
├── astro.config.mjs
├── tailwind.config.js
├── tsconfig.json
├── package.json
├── package-lock.json
├── vercel.json (deployment config)
├── README.md
└── PROJECT_STRUCTURE.md (this file)
```

---

## 🌐 Complete URL Structure

### Main Pages
```
/ (Homepage)
/about
/contact
/careers
/gallery
/privacy-policy
/terms-of-service
```

### Service Pages (20 Services)
```
/services (All services listing page)

Category: Visa Services
├── /services/golden-visa
├── /services/family-visa
├── /services/employment-visa
├── /services/investor-visa
└── /services/tourist-visa

Category: PRO Services
├── /services/trade-license
├── /services/company-formation
├── /services/trade-license-renewal
├── /services/business-setup
└── /services/pro-services

Category: Government Typing
├── /services/mohre-typing
├── /services/tamm-services
├── /services/labour-typing
├── /services/amer-services
└── /services/government-documents

Category: Document Services
├── /services/attestation
├── /services/translation
├── /services/certificate-attestation
├── /services/document-clearing
└── /services/notary-services

[TOTAL: 20 service pages - exact list to be finalized with client]
```

### Location Pages (2 Locations)
```
/locations (All locations overview)
├── /locations/khalidiya (Main office)
└── /locations/[area-2] (Secondary office - to be named)
```

### Blog Pages
```
/blog (Main blog listing - paginated)
/blog/page/[number] (Pagination)
/blog/category/[category-slug] (Category filter pages)
/blog/[post-slug] (Individual blog posts)

Example blog posts (area-targeted SEO):
├── /blog/golden-visa-abu-dhabi-complete-guide
├── /blog/mohre-typing-services-khalidiya
├── /blog/document-attestation-requirements-uae
└── /blog/family-visa-process-abu-dhabi
```

---

## 📄 Page Structures

### Homepage Structure (`/`)
```
1. Hero Section
   - H1: "Abu Dhabi's Trusted Typing & PRO Services Center"
   - Subheading: Value proposition
   - CTA buttons (WhatsApp, Call, Contact)
   - Background: Gradient or hero image

2. Services Grid (Featured Services)
   - 6-8 most popular services
   - Icons + titles + short description
   - "View All Services" CTA

3. Location Section
   - "Visit Our Offices"
   - 2 location cards (Khalidiya + Area 2)
   - Map preview, address, CTA

4. Why Choose Us
   - 4 key benefits with icons
   - Trust signals (years in business, clients served, etc.)

5. How It Works (Process)
   - 3-4 step visual process
   - Simple, clear icons

6. Featured Blog Posts
   - Latest 3 blog posts
   - "Read Our Blog" CTA

7. Testimonials/Reviews
   - 3-4 client testimonials
   - Star ratings
   - Optional: GBP reviews integration

8. Stats Section
   - Clients served, years in business, success rate
   - Animated counters

9. CTA Section
   - Final conversion push
   - WhatsApp + Call buttons
   - "Get Started Today"

10. FAQ Section
    - 5-6 common questions
    - Expandable accordion

Schema: Organization + FAQPage
```

### Service Page Structure (`/services/[slug]`)
```
1. Breadcrumbs
   Home > Services > [Service Name]

2. Service Hero
   - H1: Service name
   - Short description
   - Location selector: "Available at: [Khalidiya] [Area 2]"
   - CTA buttons

3. Service Overview
   - What is this service
   - Who needs it
   - Benefits

4. What's Included
   - Bullet points or cards
   - What client gets

5. Process/Steps
   - Step-by-step guide
   - Visual timeline or numbered steps

6. Documents Required
   - Checklist format
   - Icons for each document type

7. Pricing & Timeline
   - Starting from [price]
   - Typical processing time
   - Optional: Comparison table

8. Why Choose Us for This Service
   - Service-specific advantages
   - Trust signals

9. Related Services
   - 3-4 related service cards

10. FAQ Section
    - Service-specific questions

11. CTA Section
    - Contact form or WhatsApp CTA

Schema: Service + Organization (with both locations)
```

### Location Page Structure (`/locations/[slug]`)
```
1. Breadcrumbs
   Home > Locations > [Area Name]

2. Location Hero
   - H1: "Typing Services in [Area], Abu Dhabi"
   - Office photo
   - Quick contact (phone, WhatsApp)

3. Address & Contact
   - Full address
   - Phone, WhatsApp, email
   - Opening hours
   - CTA: Get Directions

4. Google Map Embed
   - Interactive map
   - GBP integration

5. Services at This Location
   - Grid of all 20 services available
   - Links to individual service pages

6. Why Visit This Office
   - Location-specific benefits
   - Nearby landmarks
   - Parking info

7. Office Gallery
   - 4-6 photos of the office
   - Team photos (optional)

8. Directions & Landmarks
   - "How to reach us"
   - Public transport info
   - Nearby landmarks

9. Contact Form
   - Location-specific inquiry

Schema: LocalBusiness (ONLY this location)
```

### Blog Post Structure (`/blog/[slug]`)
```
1. Breadcrumbs
   Home > Blog > [Category] > [Post Title]

2. Blog Hero
   - H1: Post title
   - Featured image
   - Meta: Author, date, reading time, category

3. Table of Contents (Sticky Sidebar)
   - Auto-generated from H2/H3 headings
   - Jump links

4. Blog Content
   - Rich text from Sanity
   - Images, headings, lists, etc.
   - Proper heading hierarchy

5. Related Services CTA
   - "Need help with [service]?"
   - Link to relevant service page

6. Author Bio
   - Author info
   - Photo, name, role

7. Related Posts
   - 3 related blog posts

8. Social Share Buttons
   - Share to social media

9. Comments (Optional)
   - Can integrate later

Schema: Article + BreadcrumbList
```

### About Page Structure (`/about`)
```
1. Hero
   - Company overview
   - Mission statement

2. Our Story
   - Company history
   - Achievements

3. Our Team
   - Team photos (optional)
   - Key people

4. Why Choose Us
   - Unique selling points

5. Offices
   - Link to both locations

6. CTA

Schema: Organization + LocalBusiness
```

### Contact Page Structure (`/contact`)
```
1. Hero
   - H1: "Contact Us"

2. Contact Methods
   - Phone, WhatsApp, Email
   - Quick links

3. Contact Form
   - Name, email, phone, service, message
   - Location preference

4. Office Locations
   - Both offices side by side
   - Map previews
   - Addresses

5. FAQ
   - Business hours
   - Response time

Schema: ContactPage + LocalBusiness (both)
```

### Careers Page Structure (`/careers`)
```
1. Hero
   - "Join Our Team"

2. Why Work With Us
   - Company culture
   - Benefits

3. Open Positions
   - Job listings (from Sanity or static)
   - Apply button

4. Application Form
   - Form or email link

Schema: Organization
```

### Gallery Page Structure (`/gallery`)
```
1. Hero
   - "Our Work & Offices"

2. Gallery Grid
   - Office photos
   - Team photos
   - Client success stories (optional)
   - Events/achievements

3. Categories
   - Filter by type (offices, team, events)

4. CTA

Schema: ImageGallery
```

---

## 🎨 Design System (Tailwind Configuration)

### Color Palette
```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#2A5298',
        50: '#EFF4FB',
        100: '#D9E6F6',
        200: '#B3CCF0',
        300: '#8DB3E9',
        400: '#5989D0',
        500: '#2A5298',
        600: '#224280',
        700: '#1A3260',
        800: '#122140',
        900: '#0A1120',
      },
      secondary: {
        DEFAULT: '#2D86C7',
        50: '#EBF5FC',
        100: '#D1E9F8',
        200: '#A3D3F1',
        300: '#75BDEA',
        400: '#51A0D9',
        500: '#2D86C7',
        600: '#246BA0',
        700: '#1B5078',
        800: '#123550',
        900: '#091A28',
      },
      accent: {
        DEFAULT: '#F59E0B',
        50: '#FEF7E8',
        100: '#FDEFD1',
        200: '#FBE0A3',
        300: '#F9D075',
        400: '#F7B947',
        500: '#F59E0B',
        600: '#C47E09',
        700: '#935F07',
        800: '#623F04',
        900: '#312002',
      },
      neutral: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
      }
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      display: ['Outfit', 'Inter', 'sans-serif'],
    },
    fontSize: {
      'xs': ['0.75rem', { lineHeight: '1rem' }],
      'sm': ['0.875rem', { lineHeight: '1.25rem' }],
      'base': ['1rem', { lineHeight: '1.5rem' }],
      'lg': ['1.125rem', { lineHeight: '1.75rem' }],
      'xl': ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
    },
    spacing: {
      '128': '32rem',
      '144': '36rem',
    },
    borderRadius: {
      '4xl': '2rem',
    },
    boxShadow: {
      'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      'glow': '0 0 20px rgba(42, 82, 152, 0.3)',
    }
  }
}
```

### Typography System
```
H1: text-4xl md:text-5xl font-bold
H2: text-3xl md:text-4xl font-bold
H3: text-2xl md:text-3xl font-semibold
H4: text-xl md:text-2xl font-semibold
H5: text-lg md:text-xl font-medium
Body: text-base text-neutral-600
Small: text-sm text-neutral-500
```

### Spacing System
```
Section padding: py-16 md:py-24
Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
Card padding: p-6 md:p-8
Button padding: px-6 py-3
```

### Component Styles
```
Button Primary: bg-primary-500 text-white hover:bg-primary-600
Button Secondary: bg-secondary-500 text-white hover:bg-secondary-600
Button Accent: bg-accent-500 text-white hover:bg-accent-600
Card: bg-white rounded-xl shadow-soft hover:shadow-lg
```

---

## 🔍 SEO Strategy

### On-Page SEO Elements (Every Page)
```
1. Unique H1 (one per page)
2. Proper heading hierarchy (H1 > H2 > H3)
3. Meta title (50-60 characters)
4. Meta description (150-160 characters)
5. Canonical URL
6. Open Graph tags (for social sharing)
7. Twitter Card tags
8. Breadcrumbs (visual + schema)
9. Alt text for all images
10. Internal linking strategy
```

### Meta Title Formulas
```
Homepage: "AtoZ Business Services | Typing & PRO Services Abu Dhabi"
Service: "[Service Name] in Abu Dhabi | Fast & Reliable | AtoZ Business"
Location: "Typing Center in [Area] | Opposite [Landmark] | AtoZ Business"
Blog: "[Post Title] | AtoZ Business Blog"
```

### Meta Description Formulas
```
Service: "Professional [service name] in Abu Dhabi. Fast processing, competitive prices, expert assistance. Visit our Khalidiya or [Area 2] offices. Call +971-XXX"
Location: "Visit AtoZ Business Services in [Area], Abu Dhabi. [Landmark]. All typing & PRO services. Open [hours]. Call for quick assistance."
```

### JSON-LD Schema Strategy

#### Homepage Schema
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "AtoZ Business Services",
      "url": "https://yoursite.com",
      "logo": "https://yoursite.com/assets/logo.png",
      "address": [
        {
          "@type": "PostalAddress",
          "name": "Khalidiya Branch",
          "streetAddress": "Mohammed Alhur Al Suwaidi St, opposite Khalidiya Mall",
          "addressLocality": "Khalidiya",
          "addressRegion": "Abu Dhabi",
          "addressCountry": "AE"
        },
        {
          "@type": "PostalAddress",
          "name": "[Area 2] Branch",
          "streetAddress": "[Address]",
          "addressLocality": "[Area 2]",
          "addressRegion": "Abu Dhabi",
          "addressCountry": "AE"
        }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+971-XX-XXXXXXX",
        "contactType": "customer service",
        "availableLanguage": "en"
      },
      "sameAs": [
        "https://facebook.com/yourpage",
        "https://instagram.com/yourpage"
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        // FAQ items
      ]
    }
  ]
}
```

#### Service Page Schema
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "serviceType": "[Service Name]",
      "provider": {
        "@type": "Organization",
        "name": "AtoZ Business Services",
        "address": [
          // BOTH office addresses
        ]
      },
      "areaServed": {
        "@type": "City",
        "name": "Abu Dhabi"
      },
      "description": "[Service description]",
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "AED"
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        // Breadcrumb items
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        // Service-specific FAQs
      ]
    }
  ]
}
```

#### Location Page Schema
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "AtoZ Business Services - [Area] Branch",
  "image": "[Office photo URL]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Street address]",
    "addressLocality": "[Area]",
    "addressRegion": "Abu Dhabi",
    "postalCode": "[Postal code]",
    "addressCountry": "AE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "XX.XXXX",
    "longitude": "XX.XXXX"
  },
  "url": "https://yoursite.com/locations/[slug]",
  "telephone": "+971-XX-XXXXXXX",
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    }
  ],
  "hasMap": "https://maps.google.com/...",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150"
  }
}
```

#### Blog Post Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Post title]",
  "image": "[Featured image]",
  "datePublished": "[ISO date]",
  "dateModified": "[ISO date]",
  "author": {
    "@type": "Person",
    "name": "[Author name]"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AtoZ Business Services",
    "logo": {
      "@type": "ImageObject",
      "url": "[Logo URL]"
    }
  },
  "description": "[Meta description]",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "[Post URL]"
  }
}
```

### Sitemap Structure
```xml
Automatically generated by Astro
Priority levels:
- Homepage: 1.0
- Service pages: 0.9
- Location pages: 0.9
- Blog posts: 0.7
- About/Contact: 0.6
- Other pages: 0.5

Change frequency:
- Homepage: weekly
- Service/Location pages: monthly
- Blog: weekly
- Static pages: yearly
```

### Robots.txt
```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Sitemap: https://yoursite.com/sitemap.xml
```

---

## 🗄️ Sanity CMS Structure

### Content Types (Schemas)

#### 1. Service Schema
```typescript
{
  name: 'service',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      options: { source: 'title' }
    },
    {
      name: 'category',
      type: 'string',
      options: {
        list: [
          { title: 'Visa Services', value: 'visa' },
          { title: 'PRO Services', value: 'pro' },
          { title: 'Government Typing', value: 'government' },
          { title: 'Document Services', value: 'documents' }
        ]
      }
    },
    {
      name: 'excerpt',
      type: 'text',
      description: 'Short description for cards'
    },
    {
      name: 'description',
      type: 'text',
      description: 'Long description'
    },
    {
      name: 'featuredImage',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'icon',
      type: 'string',
      description: 'Lucide icon name'
    },
    {
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'documentsRequired',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'processSteps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'step', type: 'string' },
            { name: 'description', type: 'text' }
          ]
        }
      ]
    },
    {
      name: 'pricing',
      type: 'object',
      fields: [
        { name: 'startingFrom', type: 'number' },
        { name: 'currency', type: 'string', initialValue: 'AED' },
        { name: 'duration', type: 'string' }
      ]
    },
    {
      name: 'features',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'relatedServices',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }]
    },
    {
      name: 'faq',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', type: 'string' },
            { name: 'answer', type: 'text' }
          ]
        }
      ]
    },
    {
      name: 'isPopular',
      type: 'boolean',
      description: 'Show on homepage featured section'
    },
    {
      name: 'metaTitle',
      type: 'string'
    },
    {
      name: 'metaDescription',
      type: 'text'
    },
    {
      name: 'keywords',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ]
}
```

#### 2. Location Schema
```typescript
{
  name: 'location',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'slug', type: 'slug' },
    { name: 'address', type: 'text' },
    { name: 'area', type: 'string' },
    { name: 'landmark', type: 'string' },
    { name: 'phone', type: 'string' },
    { name: 'whatsapp', type: 'string' },
    { name: 'email', type: 'string' },
    {
      name: 'coordinates',
      type: 'geopoint'
    },
    { name: 'mapEmbedUrl', type: 'url' },
    { name: 'gbpUrl', type: 'url' },
    {
      name: 'hours',
      type: 'object',
      fields: [
        { name: 'monday', type: 'string' },
        { name: 'tuesday', type: 'string' },
        { name: 'wednesday', type: 'string' },
        { name: 'thursday', type: 'string' },
        { name: 'friday', type: 'string' },
        { name: 'saturday', type: 'string' },
        { name: 'sunday', type: 'string' }
      ]
    },
    { name: 'image', type: 'image' },
    {
      name: 'gallery',
      type: 'array',
      of: [{ type: 'image' }]
    },
    {
      name: 'servicesAvailable',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }]
    },
    { name: 'isPrimary', type: 'boolean' },
    { name: 'metaDescription', type: 'text' }
  ]
}
```

#### 3. Blog Post Schema
```typescript
{
  name: 'blog',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug' },
    { name: 'publishedAt', type: 'datetime' },
    {
      name: 'author',
      type: 'reference',
      to: [{ type: 'author' }]
    },
    {
      name: 'categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }]
    },
    { name: 'excerpt', type: 'text' },
    { name: 'mainImage', type: 'image' },
    {
      name: 'content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image' }
      ]
    },
    {
      name: 'relatedServices',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }]
    },
    { name: 'metaTitle', type: 'string' },
    { name: 'metaDescription', type: 'text' },
    { name: 'tags', type: 'array', of: [{ type: 'string' }] }
  ]
}
```

#### 4. Category Schema
```typescript
{
  name: 'category',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug' },
    { name: 'description', type: 'text' }
  ]
}
```

#### 5. Author Schema
```typescript
{
  name: 'author',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'slug', type: 'slug' },
    { name: 'image', type: 'image' },
    { name: 'bio', type: 'text' },
    { name: 'role', type: 'string' }
  ]
}
```

#### 6. Site Settings Schema
```typescript
{
  name: 'settings',
  type: 'document',
  fields: [
    { name: 'siteName', type: 'string' },
    { name: 'siteDescription', type: 'text' },
    { name: 'logo', type: 'image' },
    { name: 'primaryColor', type: 'color' },
    { name: 'secondaryColor', type: 'color' },
    { name: 'contactEmail', type: 'string' },
    { name: 'contactPhone', type: 'string' },
    { name: 'whatsappNumber', type: 'string' },
    {
      name: 'socialLinks',
      type: 'object',
      fields: [
        { name: 'facebook', type: 'url' },
        { name: 'instagram', type: 'url' },
        { name: 'linkedin', type: 'url' },
        { name: 'twitter', type: 'url' }
      ]
    },
    { name: 'footerText', type: 'text' }
  ]
}
```

---

## ⚡ Performance Strategy

### Build Strategy
```
Services: SSG (Static Site Generation)
- Pre-rendered at build time
- Rarely changes
- Lightning fast

Locations: SSG
- Pre-rendered
- Static content

Blog Listing: SSR (Server-Side Rendering)
- Fresh content on each request
- Shows latest posts immediately

Blog Posts: SSG with ISR
- Pre-rendered
- Incremental regeneration every 24h

Homepage: SSG with ISR
- Pre-rendered
- Regenerates every hour for fresh content
```

### Image Optimization
```
Service images: 800x600px, WebP format
Blog featured images: 1200x630px (OG share size)
Logo: SVG (scalable) + PNG fallback
Gallery images: 1200x800px, lazy loaded
Thumbnails: 400x300px
```

### JavaScript Strategy
```
Minimal JS usage:
- Static pages: ~5KB
- Interactive pages: ~20KB
- Only load what's needed per page

React components only for:
- Mobile menu
- Forms
- Maps
- Interactive widgets
```

### Loading Strategy
```
Above the fold: Inline critical CSS
Below the fold: Lazy load images
Third-party scripts: Defer or async
Fonts: Self-hosted, preloaded
```

### Target Performance Metrics
```
PageSpeed Insights Score: 95+
Largest Contentful Paint (LCP): < 2.5s
First Input Delay (FID): < 100ms
Cumulative Layout Shift (CLS): < 0.1
Time to Interactive (TTI): < 3s
```

---

## 🚀 Deployment & Environment

### Vercel Configuration
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro",
  "regions": ["iad1"],
  "env": {
    "SANITY_PROJECT_ID": "@sanity-project-id",
    "SANITY_DATASET": "@sanity-dataset"
  }
}
```

### Environment Variables
```
# Sanity
SANITY_PROJECT_ID=xxx
SANITY_DATASET=production
SANITY_API_VERSION=2024-01-01
SANITY_TOKEN=xxx (for preview/write access)

# Site
PUBLIC_SITE_URL=https://yoursite.com
PUBLIC_CONTACT_EMAIL=info@yoursite.com
PUBLIC_WHATSAPP=971XXXXXXXXX

# Analytics (future)
PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 📋 Content & SEO Requirements

### Service Pages - Content Needed (×20)
For each service, need:
1. Service name
2. Icon name (Lucide)
3. Short description (50-100 words)
4. Long description (200-300 words)
5. Documents required (list)
6. Process steps (3-5 steps)
7. Pricing (starting from AED X)
8. Processing time
9. 4-6 FAQ items
10. Related services
11. Meta title & description

### Location Pages - Content Needed (×2)
For each location:
1. Office name
2. Full address
3. Landmark/directions
4. Phone number
5. WhatsApp number
6. Email
7. Google Maps coordinates
8. Map embed URL
9. GBP link
10. Opening hours
11. Office photos (4-6)
12. Parking info
13. Public transport info

### Blog Posts - Strategy
Weekly posts targeting:
1. Service guides ("How to get Golden Visa in Abu Dhabi 2026")
2. Area-specific content ("Best Typing Center in Khalidiya")
3. Document requirements ("Documents Needed for Family Visa UAE")
4. Government updates ("New MOHRE Requirements 2026")
5. Tips & advice ("Fastest Way to Attest Documents in Abu Dhabi")

---

## ✅ Next Steps

### Phase 1: Setup & Foundation
1. ✅ Install dependencies (React, Tailwind, Lucide)
2. ⬜ Set up Sanity CMS
3. ⬜ Configure Tailwind design system
4. ⬜ Create base layouts

### Phase 2: Components
5. ⬜ Build UI components (Button, Card, Container, etc.)
6. ⬜ Build layout components (Header, Footer, Navigation)
7. ⬜ Build shared components (Schema, SEO, Breadcrumbs)

### Phase 3: Pages
8. ⬜ Homepage
9. ⬜ Service pages (template + dynamic routing)
10. ⬜ Location pages
11. ⬜ Blog (listing + post template)
12. ⬜ About, Contact, Careers, Gallery

### Phase 4: Integration
13. ⬜ Connect Sanity CMS
14. ⬜ Implement schema markup
15. ⬜ Set up SEO optimization
16. ⬜ Add contact forms
17. ⬜ Add WhatsApp/Call buttons

### Phase 5: Testing & Launch
18. ⬜ Performance testing
19. ⬜ SEO audit
20. ⬜ Mobile responsiveness check
21. ⬜ Browser compatibility
22. ⬜ Deploy to Vercel

---

## 📝 Notes & Decisions

### Confirmed Decisions
- ✅ Use Astro + React (minimal JS)
- ✅ Use Tailwind CSS for styling
- ✅ Use Sanity CMS for content
- ✅ Use Lucide React for icons
- ✅ Deploy to Vercel
- ✅ 2 office locations (Khalidiya + Area 2)
- ✅ 20 services total
- ✅ Schema strategy: Service pages show both locations
- ✅ Add Careers & Gallery pages
- ✅ Weekly blog updates

### Pending Information
- ⏳ 2nd office location details (area, address)
- ⏳ Final list of all 20 services with names
- ⏳ Contact phone numbers (both offices)
- ⏳ WhatsApp number
- ⏳ Email addresses
- ⏳ Social media links
- ⏳ Opening hours (both offices)
- ⏳ Google Maps coordinates
- ⏳ Team photos (if available)
- ⏳ Office photos
- ⏳ Any existing content to migrate

---

**This document serves as the COMPLETE blueprint for the AtoZ Business Services website.**

**Last Updated:** 2026-01-19  
**Status:** Ready to start development  
**Next Action:** Begin Phase 1 - Setup & Foundation
