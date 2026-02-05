---
description: Blog Post Page Redesign - 7 Phase Implementation Plan
---

# 📖 Blog Post Page (`[slug].astro`) - Professional Redesign

## Project Overview
**File:** `src/pages/blog/[slug].astro`  
**Schema Reference:** `studio/schemas/post.ts`  
**Design System:** Tailwind CSS with custom config  
**Fonts:** Inter (sans), Outfit (display)  
**Color Palette:** Primary (#2A5298), Secondary (#2D86C7), Accent (#F59E0B)

---

## Phase 1: Hero Section Enhancements ⭐

### Current State
- Simple gradient overlay with featured image
- Basic category badge, title, and meta info
- Minimal animations

### Improvements
1. **Breadcrumb Navigation**
   - Add: Home → Blog → Category → Post Title
   - Style: White text with hover effects and separator icons
   - Purpose: Better UX and SEO structure

2. **Animated Background**
   - Add floating geometric shapes (circles, squares) with CSS animations
   - Implement subtle parallax effect on scroll
   - Gradient border animated accent line below hero

3. **Enhanced Title Treatment**
   - Gradient text effect on hover
   - Text shadow for depth
   - Better responsive scaling

4. **Meta Pills Redesign**
   - Glassmorphism effect (`backdrop-blur-lg`)
   - Icon improvements with subtle animations
   - Better spacing and alignment on mobile

### Code Changes
- Lines 87-190: Hero section refactor
- Add new CSS animations for floating elements

---

## Phase 2: Article Body Improvements 📝

### Current State
- Single column prose content
- Basic key takeaways box
- Standard PortableText rendering

### Improvements
1. **Drop Cap for First Paragraph**
   - CSS `::first-letter` styling
   - Gradient color matching brand
   - Elegant serif or display font

2. **Enhanced Key Takeaways**
   - Numbered items instead of bullets
   - Animated checkmark icons
   - Subtle entrance animation on scroll

3. **Pull Quote Styling**
   - Large quotation marks
   - Gradient left border
   - Background accent color

4. **Image Captions**
   - Styled figure/figcaption
   - Lightbox functionality ready

### Code Changes
- Lines 199-261: Content area restructure
- Add new prose CSS customizations
- Enhance PortableText component styles

---

## Phase 3: FAQs Section (NEW!) ❓

### Current State
- FAQs field exists in Sanity schema
- Schema markup generated but NOT displayed
- Users don't see FAQ content

### Improvements
1. **Accordion Component**
   - Smooth expand/collapse animations
   - Plus/minus icon toggle
   - Only one open at a time (optional)

2. **Visual Design**
   - Question with gradient icon
   - Answer with subtle background
   - Border accent on active state

3. **Placement**
   - After main content, before tags
   - Clear "Frequently Asked Questions" heading
   - Schema markup maintained for SEO

### Code Changes
- Lines 241-259: Insert FAQ section before tags
- Create new FAQ accordion with JavaScript
- Style with brand colors

---

## Phase 4: Sidebar Enhancements 📌

### Current State
- Author card (centered)
- Related locations
- Latest posts (dark themed)

### Improvements
1. **Table of Contents (TOC)**
   - Auto-generate from H2/H3 headings
   - Sticky positioning on scroll
   - Active state highlighting
   - Smooth scroll on click

2. **Enhanced Author Card**
   - Add social media links
   - Bio excerpt (if available from schema)
   - "More from author" CTA button

3. **Sticky Behavior**
   - Sidebar sticks on desktop (lg+)
   - Proper top offset for navbar
   - Graceful degradation on mobile

4. **CTA Box Addition**
   - Newsletter subscription mini-form
   - "Contact Us" quick action
   - Gradient background styling

### Code Changes
- Lines 263-381: Sidebar restructure
- Add Intersection Observer for TOC
- Implement sticky CSS

---

## Phase 5: Reading Experience Features 📖

### Current State
- Progress bar at top (functional)
- Reading time displayed
- No share functionality

### Improvements
1. **Enhanced Progress Bar**
   - Gradient color (primary → secondary)
   - Subtle glow effect
   - Smoother animation

2. **Floating Share Bar**
   - Fixed position on left side (desktop)
   - Bottom bar on mobile
   - Share to: LinkedIn, Twitter/X, Facebook, WhatsApp
   - Copy link with tooltip feedback

3. **Back to Top Button**
   - Appears after scrolling
   - Smooth scroll animation
   - Matches brand styling

4. **Print Styles**
   - Hide navigation elements
   - Clean typography
   - Proper page breaks

### Code Changes
- Lines 87-91: Progress bar enhancement
- Add new floating share component
- Add print media queries
- Add back-to-top JavaScript

---

## Phase 6: Article Footer Section 🎯

### Current State
- Tags section
- Related posts section
- No engagement elements

### Improvements
1. **Enhanced Tags**
   - Icon prefix (hashtag or tag icon)
   - Gradient hover animation
   - Click to filter (link to blog with tag)

2. **Author Bio Box**
   - Full author card at article end
   - Photo, name, role, bio
   - Social links
   - "View all posts" button

3. **Engagement Widget**
   - "Was this article helpful?" Yes/No
   - Subtle feedback animation
   - Store preference (optional)

4. **Newsletter CTA**
   - Full-width gradient box
   - "Never miss an update" messaging
   - Email input + submit button
   - Premium design with decorative elements

5. **Last Updated Info**
   - Show if content was modified
   - Format: "Last updated: [date]"

### Code Changes
- Lines 243-260: Tags section redesign
- Add author bio section before related posts
- Add newsletter CTA component
- Add engagement widget

---

## Phase 7: Related Posts Enhancement 🔗

### Current State
- 2-column grid with BlogCard component
- Basic heading and subtext
- "View All" button

### Improvements
1. **Enhanced Cards**
   - Image zoom on hover
   - Gradient overlay on hover
   - Category badge positioned on image
   - Reading time badge

2. **Better Section Header**
   - Decorative elements (lines, dots)
   - Animated underline
   - More engaging copy

3. **Navigation Arrows**
   - Prev/Next post navigation
   - Swipe on mobile
   - Keyboard navigation (arrow keys)

4. **Infinite Scroll Option**
   - "Load More" button
   - Smooth animation for new cards

### Code Changes
- Lines 393-441: Related posts section
- Update BlogCard component if needed
- Add prev/next navigation links

---

## Implementation Order

### Priority Sequence
1. **Phase 3 (FAQs)** - Missing feature, high SEO value
2. **Phase 1 (Hero)** - First impression, visual impact
3. **Phase 5 (Reading Experience)** - User engagement
4. **Phase 2 (Article Body)** - Content presentation
5. **Phase 4 (Sidebar)** - Navigation & stickiness
6. **Phase 6 (Footer)** - Engagement & conversion
7. **Phase 7 (Related Posts)** - Discovery & retention

---

## Technical Considerations

### Performance
- Lazy load images below the fold
- Minimize JavaScript bundle
- Use CSS animations over JS where possible
- Intersection Observer for scroll-based features

### Accessibility
- Proper ARIA labels for accordions
- Keyboard navigation for TOC
- Focus states for all interactive elements
- Screen reader friendly share buttons

### SEO
- Maintain Article schema markup
- Keep FAQ schema for rich snippets
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images

### Responsive Design
- Mobile-first approach
- Touch-friendly tap targets (min 44px)
- Collapsible sidebar on mobile
- Horizontal scroll prevention

---

## Files to Modify/Create

| File | Action | Purpose |
|------|--------|---------|
| `src/pages/blog/[slug].astro` | Modify | Main page restructure |
| `src/components/blog/FAQAccordion.astro` | Create | FAQ display component |
| `src/components/blog/ShareBar.astro` | Create | Social sharing |
| `src/components/blog/TableOfContents.astro` | Create | Sidebar TOC |
| `src/components/blog/AuthorBio.astro` | Create | Author section |
| `src/components/blog/NewsletterCTA.astro` | Create | Newsletter signup |
| `src/styles/blog-post.css` | Create | Custom styles |

---

## Validation Checklist

After implementation, verify:
- [ ] All 7 phases implemented
- [ ] Mobile responsive (test on multiple sizes)
- [ ] Animations smooth (no jank)
- [ ] FAQs display correctly with schema
- [ ] Share buttons functional
- [ ] TOC navigation works
- [ ] Print styles clean
- [ ] No console errors
- [ ] Lighthouse score maintained
- [ ] Build succeeds without warnings

---

## Notes
- Design aligns with existing Tailwind config
- Uses Outfit for headings, Inter for body
- Primary blue (#2A5298) as main accent
- Secondary blue (#2D86C7) for gradients
- Accent gold (#F59E0B) for highlights and CTAs
