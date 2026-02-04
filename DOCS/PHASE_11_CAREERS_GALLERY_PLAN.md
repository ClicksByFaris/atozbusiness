# Phase 11: Careers & Gallery Implementation - Plan

**Status:** 🚧 IN PROGRESS  
**Date:** February 3, 2026

---

## 🎯 Objective
Expand the website's professional reach by implementing a high-converting **Careers** portal and a visually stunning **Gallery** section. Both will be integrated with Sanity CMS for easy updating.

## ✅ Checklist & Implementation Plan

### 1. Structure & Navigation
- [x] **Header Update**: Add Careers and Gallery links to the main navigation.
- [x] **Footer Verification**: Ensure links in the footer correctly point to the new pages.

### 2. Gallery Page (`/gallery`)
- [ ] **Design**: Implement a premium masonry or grid-style gallery with lightbox support.
- [ ] **Sanity Schema**: Define `galleryImage` schema (title, image, category, date).
- [ ] **Data Fetching**: Create GROQ queries to fetch gallery items by category.
- [ ] **Optimized Loading**: Use `SanityImage` for lazy loading and placeholder support.

### 3. Careers Page (`/careers`)
- [ ] **Design**: Create a professional landing page showcasing company culture and open positions.
- [ ] **Sanity Schema**: Define `job` schema (title, department, location, type, description, requirements).
- [ ] **Job Board**: Implementation of a dynamic job listing with filtering capability.
- [ ] **Application Process**: Link to a contact form or a dedicated application button.

### 4. Shared Components
- [ ] **PageHero**: Reuse or adapt the Hero component for consistent branding across these new pages.
- [ ] **Entrance Animations**: Apply `reveal` classes for polished page transitions.

---

## 📂 Files to Modify/Create
- `src/components/layout/Navigation.astro` (Navigation update)
- `src/pages/gallery/index.astro` (New)
- `src/pages/careers/index.astro` (New)
- `src/lib/sanity.ts` (New queries)
- `src/types/index.ts` (New interfaces)

---

## 🚀 Success Criteria
1. Navigation allows seamless access to new sections.
2. Gallery provides a high-end visual experience of AtoZ's facilities and events.
3. Careers section effectively communicates "Work with us" opportunities.
4. All content remains easily editable via Sanity CMS.
