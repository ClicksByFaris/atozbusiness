# AtoZ Business Services - Development Roadmap

## 📊 Project Overview

**Business:** Abu Dhabi Typing Center & PRO Services  
**Total Phases:** 12  
**Current Phase:** Phase 7  
**Overall Progress:** 50% Complete (Phase 1 ✅, Phase 2 ✅, Phase 3 ✅, Phase 4 ✅, Phase 5 ✅, Phase 6 ✅)

---

## ✅ Phase 1: Foundation Setup (COMPLETED)

### Status: ✅ COMPLETE
### Completion Date: January 19, 2026

### What Was Built:
- [x] Design system with Tailwind configuration
- [x] Global CSS styles
- [x] TypeScript types (index.ts)
- [x] Sanity CMS client setup
- [x] 8 UI Components
  - [x] Button.astro
  - [x] Card.astro
  - [x] Container.astro
  - [x] Section.astro
  - [x] Heading.astro
  - [x] Badge.astro
  - [x] Grid.astro
  - [x] Icon.tsx (React)
- [x] 4 Layout Components
  - [x] Header.astro
  - [x] Navigation.astro
  - [x] MobileMenu.tsx (React)
  - [x] Footer.astro
- [x] BaseLayout.astro
- [x] Homepage placeholder (index.astro)
- [x] Component demo page (components-demo.astro)

### Files Created: 22
### Documentation: PHASE_1_COMPLETE.md

---

## 🚀 Phase 2: Homepage Sections

### Status: ✅ COMPLETE
### Completion Date: January 20, 2026
### Estimated Files: 15

### Components to Build:

#### Home Section Components (10 components)
- [ ] `src/components/home/Hero.astro`
  - Gradient background
  - H1 heading with location keywords
  - Value proposition
  - CTA buttons (WhatsApp, Call, Contact)
  - Background image or gradient

- [ ] `src/components/home/ServicesGrid.astro`
  - Featured 6-8 services
  - Service cards with icons
  - "View All Services" CTA
  - Grid layout (responsive)

- [ ] `src/components/home/LocationsSection.astro`
  - 2 location cards (Khalidiya + Area 2)
  - Map preview images
  - Address, phone, CTA
  - "Visit Us" buttons

- [ ] `src/components/home/WhyChooseUs.astro`
  - 4-6 benefit cards
  - Icons + descriptions
  - Trust signals (years, clients, success rate)

- [ ] `src/components/home/HowItWorks.astro`
  - 3-4 step process
  - Visual timeline
  - Icons for each step
  - Simple, clear flow

- [ ] `src/components/home/FeaturedBlog.astro`
  - Latest 3 blog posts
  - BlogCard reuse
  - "Read Our Blog" CTA
  - Grid layout

- [ ] `src/components/home/Testimonials.astro`
  - 3-4 client testimonials
  - Star ratings
  - Client names/photos
  - Carousel or grid
  - Optional: Google Business Profile integration

- [ ] `src/components/home/Stats.astro`
  - 4 key statistics
  - Animated counters (React)
  - Icons for each stat
  - (Clients served, years in business, services, locations)

- [ ] `src/components/home/CTASection.astro`
  - Final conversion section
  - Strong headline
  - WhatsApp + Call buttons
  - "Get Started Today" message
  - Contrasting background

- [ ] `src/components/home/FAQ.astro`
  - 5-6 common questions
  - Accordion component (React or CSS)
  - SEO-optimized Q&A
  - FAQPage schema

#### Shared Components Needed:
- [ ] `src/components/shared/Breadcrumbs.astro`
- [ ] `src/components/shared/WhatsAppButton.tsx` (React - sticky)
- [ ] `src/components/shared/CallButton.tsx` (React)

#### Pages to Update:
- [ ] `src/pages/index.astro` - Integrate all homepage sections

#### Additional Files:
- [ ] `src/lib/utils.ts` - Helper functions (if needed)
- [ ] `src/lib/constants.ts` - Site constants (phone, email, addresses)

### Deliverables:
- Fully functional homepage with all 10 sections
- Responsive design (mobile, tablet, desktop)
- SEO-optimized with proper schema
- Fast loading with optimized images

---

## 📄 Phase 3: Service Pages System

### Status: ✅ COMPLETE
### Completion Date: January 20, 2026
### Estimated Files: 13

### Components to Build:

#### Service Components (8 components)
- [ ] `src/components/services/ServiceCard.astro`
  - Reusable service card
  - Icon, title, excerpt
  - "Learn More" link
  
- [ ] `src/components/services/ServiceHero.astro`
  - Service name (H1)
  - Short description
  - Location selector
  - CTA buttons
  
- [ ] `src/components/services/ServiceProcess.astro`
  - Step-by-step guide
  - Visual timeline
  - Numbered steps
  
- [ ] `src/components/services/ServiceDocuments.astro`
  - Required documents checklist
  - Icons for document types
  - Download/print option
  
- [ ] `src/components/services/ServicePricing.astro`
  - Pricing table
  - "Starting from" prices
  - Processing time
  - Comparison options
  
- [ ] `src/components/services/ServiceFeatures.astro`
  - What's included
  - Service highlights
  - Benefit cards
  
- [ ] `src/components/services/RelatedServices.astro`
  - 3-4 related service cards
  - Smart recommendations
  - Cross-linking
  
- [ ] `src/components/services/ServiceFAQ.astro`
  - Service-specific FAQs
  - Accordion format
  - Schema markup

#### Layouts to Build:
- [ ] `src/layouts/ServiceLayout.astro`
  - Template for all service pages
  - SEO optimization
  - Schema integration
  - Breadcrumbs

#### Pages to Build:
- [ ] `src/pages/services/index.astro`
  - All services listing
  - Category filters
  - Search functionality
  
- [ ] `src/pages/services/[slug].astro`
  - Dynamic service pages
  - Fetch from Sanity
  - 20 services total

### Additional Files:
- [ ] Update `src/lib/queries.ts` - Add service queries
- [ ] Update `src/types/index.ts` - Service types (if needed)

### Deliverables:
- Service listing page
- 20 individual service pages (dynamic)
- All service components functional
- SEO-optimized with Service schema

---

## 📖 Phase 4: About Page

### Status: ✅ COMPLETE
### Completion Date: January 20, 2026
### Estimated Files: 3

### Page to Build:

- [x] `src/pages/about.astro`
  - Company overview section
  - Mission statement
  - Our story
  - Core values (3-5 values)
  - Why choose us section (reuse from homepage)
  - Team section (optional)
  - CTA to contact
  - Schema: Organization

### Components Needed:

- [x] `src/components/about/ValueCard.astro`
  - Display individual core values
  - Icon, title, description

### Utility Files (if not exists):

- [x] `src/lib/about-data.ts`
  - Company info, mission, values, team

### Deliverables:
- ✅ About page fully functional
- ✅ Company story and values displayed
- ✅ Organization schema markup
- ✅ Responsive design with animations


---

## 📞 Phase 5: Contact Page

### Status: ✅ COMPLETE
### Completion Date: January 21, 2026
### Estimated Files: 4

### Page to Build:

- [x] `src/pages/contact.astro`
  - Contact hero section
  - Contact methods cards (phone, WhatsApp, email)
  - Contact form
  - Office locations display (Khalidiya + Mussafah)
  - Map previews (optional)
  - Contact FAQ section
  - Schema: ContactPage

### Components to Build:

- [x] `src/components/contact/ContactForm.tsx` (React)
  - Name field (required)
  - Email field (required)
  - Phone field (required)
  - Service dropdown (from services list)
  - Preferred location dropdown
  - Message textarea
  - Form validation
  - Submit handling
  - client:load directive

- [x] `src/components/contact/ContactCard.astro`
  - Display contact methods
  - Icon, label, value
  - Click-to-call/WhatsApp links

### Deliverables:
- ✅ Contact page fully functional
- ✅ Working contact form with validation
- ✅ All contact info displayed
- ✅ ContactPage schema markup
- ✅ Mobile responsive
- ✅ WhatsApp integration

---

## ⚖️ Phase 6: Legal Pages + Shared Components

### Status: ✅ COMPLETE
### Completion Date: January 21, 2026
### Estimated Files: 8

### Pages to Build:

- [x] `src/pages/privacy-policy.astro`
  - Privacy policy content
  - Company legal info
  - Data collection details
  - Last updated date
  - Legal text formatting

- [x] `src/pages/terms-of-service.astro`
  - Terms of service content
  - Service terms
  - Payment & refund policy
  - Last updated date
  - Legal text formatting

### Shared Components to Build:

- [x] `src/components/shared/Breadcrumbs.astro`
  - Dynamic breadcrumb generation
  - BreadcrumbList schema
  - Proper hierarchy

- [x] `src/components/shared/WhatsAppButton.tsx` (React)
  - Sticky WhatsApp button
  - Fixed bottom-right position
  - client:idle directive

- [x] `src/components/shared/Schema.astro` (Merged into SEO.astro)
  - Reusable JSON-LD schema generator
  - Support: Organization, Service, LocalBusiness, etc.

- [x] `src/components/shared/SEO.astro` (Moved to src/components/SEO.astro)
  - Reusable SEO component
  - Meta tags, Open Graph, Twitter Card

### Utility Files:

- [x] `src/lib/utils.ts`
  - formatDate(), truncateText(), slugify()
  - Helper functions

- [x] Update `src/lib/constants.ts`
  - Add legal info (if needed)

### Deliverables:
### Deliverables:
- 2 legal pages (Privacy, Terms)
- Breadcrumbs and WhatsApp button
- Utility functions ready
- Reusable across all pages

---

## 🎨 Phase 7: Sanity CMS Setup

### Status: 🔄 IN PROGRESS
### Estimated Time: 2-3 hours
   
### Tasks:

#### 1. Create Sanity Project
- [ ] Visit sanity.io and create account
- [ ] Create new project "atozbusiness"
- [ ] Get project ID
- [ ] Create dataset: "production"
- [ ] Add environment variables to `.env`

#### 2. Create Sanity Schemas
- [x] `sanity/schemas/location.ts`
  - Location name, slug
  - Complete address, coordinates
  - Phone, email, WhatsApp
  - Opening hours
  - Office photos
  - Parking info, directions, landmarks
  - Google Maps link
  
- [x] `sanity/schemas/blog.ts` (Renamed to post.ts)
  - Post title, slug
  - Featured image
  - Category reference
  - Author reference
  - Content (Portable Text)
  - SEO fields
  - Published date
  
- [x] `sanity/schemas/category.ts`
  - Category name, slug
  - Description, color code
  
- [x] `sanity/schemas/author.ts`
  - Author name, slug
  - Photo, bio, role
  
- [x] `sanity/schemas/career.ts`
  - Job title, slug
  - Job description
  - Requirements, benefits
  - Location, employment type
  - Posted date
  
- [x] `sanity/schemas/gallery.ts`
  - Album name, slug
  - Photos array
  - Description, category
  
- [x] `sanity/schemas/settings.ts` (Renamed to siteSettings.ts)
  - Site title, description
  - Contact info
  - Social media links
  - Logo, favicon

- [x] `sanity/schemas/index.ts`
  - Export all schemas

#### 3. Sanity Studio Configuration
- [x] `sanity/sanity.config.ts`
- [x] `sanity/package.json`

#### 4. Add Content to Sanity
- [ ] Add 2 locations (Khalidiya + Mussafah) with ALL details
- [ ] Add 5-10 initial blog posts
- [ ] Add blog categories
- [ ] Add author profile
- [ ] Add career postings (if any)
- [ ] Add gallery photos/albums
- [ ] Configure site settings

#### 5. Deploy Sanity Studio
- [ ] Run `sanity deploy`
- [ ] Access studio at `yourproject.sanity.studio`

### Status: ✅ COMPLETE
### Completion Date: January 31, 2026

### Deliverables:
- Sanity project created
- All schemas defined
- Content added (locations, blog, gallery, careers)
- Studio deployed
- Frontend ready to fetch content

### Components to Build:

#### Blog Components (7 components)
- [ ] `src/components/blog/BlogCard.astro`
  - Reusable blog card
  - Fetch from Sanity
  - Featured image, title, excerpt
  - Category badge, reading time
  
- [ ] `src/components/blog/BlogHero.astro`
  - Post title (H1)
  - Featured image from Sanity
  - Author, date, reading time
  - Category badge
  
- [ ] `src/components/blog/BlogContent.astro`
  - Portable Text renderer
  - Proper typography
  - Image handling
  - Code blocks (if needed)
  
- [ ] `src/components/blog/TableOfContents.tsx` (React)
  - Auto-generated from headings
  - Sticky sidebar
  - Jump links, active highlighting
  - client:visible directive
  
- [ ] `src/components/blog/RelatedPosts.astro`
  - 3 related blog posts from Sanity
  - Smart recommendations
  - Same category priority
  
- [ ] `src/components/blog/BlogCategories.astro`
  - Category filter from Sanity
  - Post counts
  - Active category highlighting
  
- [ ] `src/components/blog/BlogSearch.tsx` (React)
  - Search functionality
  - Client-side search
  - client:load directive

#### Layouts to Build:
- [ ] `src/layouts/BlogLayout.astro`
  - Blog post template
  - Article schema
  - Author bio from Sanity
  - Social share
  
- [ ] `src/layouts/BlogListLayout.astro`
  - Blog listing template
  - Pagination support

#### Pages to Build:
- [ ] `src/pages/blog/index.astro`
  - Main blog listing
  - Fetch posts from Sanity
  - Pagination
  
- [ ] `src/pages/blog/category/[slug].astro`
  - Category filter pages
  - Fetch by category from Sanity
  
- [ ] `src/pages/blog/[slug].astro`
  - Individual blog posts
  - Fetch from Sanity by slug

### Additional Files:
- [ ] Update `src/lib/queries.ts` - Blog queries for Sanity
- [ ] `src/components/shared/SocialShare.tsx` - Share buttons

### Deliverables:
- Blog listing page with pagination
- Category pages
- Individual blog post pages
- All content from Sanity CMS
- Search functionality
- Article schema markup

---

## 📍 Phase 8: Location Pages

### Status: 🚀 NEXT STAGE
### Estimated Files: 10

### Components to Build:

#### Location Components (6 components)
- [ ] `src/components/location/LocationCard.astro`
  - Reusable location card
  - Fetch from Sanity
  - Address, phone, map preview
  - CTA buttons
  
- [ ] `src/components/location/LocationHero.astro`
  - Location-specific hero
  - Office photo from Sanity
  - Contact info
  - Opening hours
  
- [ ] `src/components/location/GoogleMap.tsx` (React)
  - Google Maps embed
  - Use coordinates from Sanity
  - Interactive map
  - client:visible directive
  
- [ ] `src/components/location/ContactInfo.astro`
  - Address block from Sanity
  - Phone, WhatsApp, email
  - Opening hours
  - "Get Directions" CTA
  
- [ ] `src/components/location/Directions.astro`
  - Directions from Sanity
  - Nearby landmarks
  - Parking info
  - Public transport
  
- [ ] `src/components/location/LocationServices.astro`
  - All 20 services available
  - Grid layout
  - Links to service pages

#### Layouts to Build:
- [ ] `src/layouts/LocationLayout.astro`
  - Template for location pages
  - LocalBusiness schema
  - Breadcrumbs

#### Pages to Build:
- [ ] `src/pages/locations/index.astro`
  - All locations overview
  - Fetch 2 locations from Sanity
  - Map showing both
  
- [ ] `src/pages/locations/[slug].astro`
  - Dynamic location pages
  - Fetch from Sanity by slug
  - Khalidiya + Mussafah

### Additional Files:
- [ ] Update `src/lib/queries.ts` - Location queries for Sanity
- [ ] Add environment variables for Google Maps API

### Deliverables:
- Locations overview page
- 2 individual location pages
- All data from Sanity CMS
- Google Maps integration
- LocalBusiness schema for each location

### Pages to Build:

- [ ] `src/pages/careers.astro`
  - Hero section
  - Why work with us
  - Company culture
  - Benefits
  - Open positions from Sanity
  - Application form or email link
  - Schema: Organization + JobPosting

- [ ] `src/pages/gallery.astro`
  - Hero section
  - Gallery grid from Sanity
  - Office photos, team, events
  - Category filters
  - Lightbox functionality (optional)
  - Schema: ImageGallery

### Components Needed:

- [ ] `src/components/careers/JobCard.astro`
  - Job listing card
  - Fetch from Sanity
  - Title, location, type
  - "Apply Now" CTA

- [ ] `src/components/careers/JobDetails.astro`
  - Full job description
  - Requirements, benefits
  - Application form

- [ ] `src/components/gallery/GalleryGrid.astro`
  - Photo grid
  - Fetch from Sanity
  - Category filters
  - Lightbox integration

- [ ] `src/components/gallery/Lightbox.tsx` (React)
  - Image lightbox
  - Navigation, zoom
  - client:load directive

### Additional Files:
- [ ] Update `src/lib/queries.ts` - Career and gallery queries

### Deliverables:
- Careers page with job listings from Sanity
- Gallery page with photos from Sanity
- All content dynamically loaded
- Proper schema markup

---

## 🔄 Phase 9: Service Pages Sanity Integration

### Status: ✅ COMPLETE
### Completion Date: January 31, 2026

### Objectives:
- [x] Migrate Services from static JSON to Sanity CMS
- [x] Update Service Listing Page
- [x] Update Service Detail Pages
- [x] Update Homepage Featured Services
- [x] Ensure all components mapped correctly (Hero, Features, Process, Documents)

### Deliverables:
- Fully dynamic service pages driven by Sanity
- Backend queries optimized for performance
- Frontend components updated to handle dynamic data

---

## 📝 Phase 10: Blog System

### Status: ⏸️ PENDING
### Estimated Files: 12

### Components to Build:
[... Same as previous Phase 9 Blog content ...]

---

## 🎭 Phase 11: Careers + Gallery Pages

### Status: ⏸️ PENDING
### Estimated Files: 8

[... Same as previous Phase 10 Careers content ...]

---

## 🚀 Phase 12: SEO & Performance Optimization

### Status: ⏸️ PENDING (After Phase 11)
### Estimated Time: 1-2 hours

### SEO Tasks:

#### 1. Sitemap
- [ ] Install `@astrojs/sitemap`
[... keep rest of SEO content ...]

---

## ✅ Phase 13: Final Testing & Deployment

### Status: ⏸️ PENDING (After Phase 12)
### Estimated Time: 2-3 hours

[... keep rest of Testing content ...]

---

## 📊 Project Statistics

### Total Scope:
- **Total Phases:** 13
- **Total Files:** ~100+
- **Total Components:** ~50+
- **Total Pages:** 30+
  
### Timeline Estimate:
- **Phase 1-6:** ✅ Complete
- **Phase 7:** ✅ Complete (Sanity Setup)
- **Phase 8:** ✅ Complete (Location Pages)
- **Phase 9:** ✅ Complete (Service Pages Integration)
- **Phase 10:** ~3 hours (Blog System)
- **Phase 11:** ~2 hours (Careers + Gallery)
- **Phase 12:** ~2 hours (SEO & Performance)
- **Phase 13:** ~3 hours (Testing & Deployment)

**Total Estimated Time:** ~10-12 hours remaining

---

## 🎯 Current Status

**Current Phase:** Phase 10 (Blog System)  
**Next Action:** Build Blog System  
**Waiting For:** User Approval

---

## 📝 Notes

- Each phase will be reviewed before moving to next
- I will ask for approval before starting each phase
- You can request changes at any time
- Phases can be reordered if needed
- Some components may move between phases as needed

---

**Last Updated:** January 31, 2026
**Created By:** Antigravity AI Assistant
