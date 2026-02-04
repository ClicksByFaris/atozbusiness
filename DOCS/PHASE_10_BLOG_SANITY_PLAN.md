# Phase 10: Blog Implementation & Sanity Integration - Plan

**Status:** 🚧 IN PROGRESS  
**Date:** February 3, 2026

---

## 🎯 Objective
Establish a fully dynamic blog system powered by **Sanity CMS**. This phase includes creating the blog listing page, individual post pages with rich text (Portable Text), author profiles, category organization, and advanced SEO features like Article and FAQ schemas.

## ✅ Checklist & Implementation Plan

### 1. Sanity Schema & Data
- [x] **Schema Definitions**: Define `post`, `category`, and `author` schemas in Sanity.
- [x] **Field Enhancements**: Add fields for `excerpt`, `featuredImage`, `estimatedReadingTime`, and `tags`.
- [x] **Relationships**: Link posts to categories, authors, and related physical locations.

### 2. Data Layer (`src/lib/sanity.ts`)
- [x] **Fetch Functions**: Implement `getAllPosts()`, `getPostBySlug(slug)`, and `getLatestPosts(limit)`.
- [x] **Category Support**: Implement `getAllCategories()` for future filtering.
- [x] **Query Optimization**: Use GROQ to fetch expanded references (author details, category titles).

### 3. Frontend Pages
- [x] **Blog Listing (`/blog`)**:
    - [x] Implement featured post highlight.
    - [x] Responsive grid for remaining posts.
    - [x] Animated entrance for post cards.
- [x] **Blog Detail (`/blog/[slug]`)**:
    - [x] **Rich Text**: Configure `PortableText.astro` for rendering Sanity body content.
    - [x] **Reading Progress**: Add a scroll-linked progress bar.
    - [x] **Article Sidebar**: Include Author bio and "Related Locations" (if available).
    - [x] **Related Content**: Show latest/related posts at the bottom of the article.

### 4. Advanced Components
- [x] **BlogCard**: Create a reusable card component for listings and related sections.
- [x] **PortableText**: Handle custom blocks (images, callouts) within the article body.
- [x] **SanityImage**: Ensure responsive and optimized image loading.

### 5. SEO & Metadata
- [x] **Article Schema**: Implement `https://schema.org/Article` for all posts.
- [x] **FAQ Schema**: Automatically generate FAQ schema if the post includes a "Key Takeaways" or FAQ section.
- [x] **Meta Tags**: Use Sanity-defined `metaTitle` and `metaDescription` with fallback to post title/excerpt.

---

## 📂 Files to Modify/Create
- `src/lib/sanity.ts` (Queries)
- `src/pages/blog/index.astro` (Listing)
- `src/pages/blog/[slug].astro` (Details)
- `src/components/blog/BlogCard.astro` (UI)
- `src/components/blog/PortableText.astro` (Rich Text)
- `src/types/index.ts` (Type Safety)

---

## 🚀 Success Criteria
1. Blog posts are managed 100% via Sanity CMS.
2. High-performance image loading using Sanity Image Pipeline.
3. Clean, readable article layout with functional "Reading Progress" indicator.
4. Rich SEO metadata and schema markup for better indexing.
5. Successful integration of "Related Locations" to drive traffic to service/location pages.
