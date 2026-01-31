# Phase 9: Service Pages Sanity Integration - Plan

**Status:** 🚧 IN PROGRESS  
**Date:** January 31, 2026

---

## 🎯 Objective
Migrate the "Services" section of the website from using static JSON data (`src/data/services.json` or equivalent) to fetching dynamic content from **Sanity CMS**. This includes the main service listing page and individual service detail pages.

## ✅ Checklist & Implementation Plan

### 1. Verification & Setup
- [ ] **Data Verification**: Ensure the `service` schema in Sanity Studio (production) has actual data to query.
- [ ] **Type Definitions**: Ensure TypeScript interfaces for the Sanity Service document match the schema.

### 2. Backend / Data Layer (`src/lib`)
- [ ] **Update `sanity.ts`**: Add a dedicated fetch function `getServices()` and `getServiceBySlug(slug)`.
- [ ] **Query Optimization**: Write GROQ queries to fetch only necessary fields (title, slug, icon, shortDescription) for listings, and full details for single pages.

### 3. Frontend Implementation
- [ ] **Homepage Services Section**: Update `src/components/ServicesSection.astro` to fetch top services from Sanity.
- [ ] **Service Listing Page**: Update `src/pages/services/index.astro` to fetch all active services from Sanity.
- [ ] **Service Detail Page**: Update `src/pages/services/[slug].astro`:
    - Use `getStaticPaths` to generate paths from Sanity slugs.
    - Fetch full service data including FAQ, Process, and Doc Requirements.
    - Handle 404s for invalid slugs.

### 4. Component Updates
- [ ] **Service Card**: Ensure it handles Sanity image objects (using `urlFor`) correctly vs static paths.
- [ ] **Rich Text**: If services use Portable Text for descriptions, ensure a Portable Text component is available.

### 5. SEO & Metadata
- [ ] **Meta Tags**: generic titles/descriptions should be replaced with Sanity-sourced fields.
- [ ] **Schema.org**: Update `Service` schema generation to use Sanity data.

---

## 📂 Files to Modify
- `src/lib/sanity.ts`
- `src/pages/services/index.astro`
- `src/pages/services/[slug].astro`
- `src/components/ServicesSection.astro`
- `src/types/index.ts` (if needed)

---

## 🚀 Success Criteria
1. No more reliance on hardcoded service JSON files.
2. Adding a service in Sanity immediately (after build/revalidation) shows it on the website.
3. All 20+ existing services are successfully migrated and rendering.
