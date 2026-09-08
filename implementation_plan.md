# Golden Visa Typing Abu Dhabi — Google Ads Landing Page

This landing page is a **high-intent, high-CPC Google Ads destination** for the campaign `C_Search_GoldenVisa_DocumentClearing_AbuDhabi_Q3`. It targets searchers using keywords like "abu dhabi golden visa", "golden visa application", "TAMM golden visa", and "golden visa cost" — with CPCs up to **AED 60.14**. The page must convert aggressively using the AIDA/PAS framework, match ad copy word-for-word, comply with UAE government advertising policy, and carry the same exact design system as the existing `typing-center-abu-dhabi.astro` page.

---

## Architecture

The page follows the same pattern as `typing-center-abu-dhabi.astro`:

1. **Data file** → `src/lib/data/golden-visa-typing-abudhabi.ts` (all text content)
2. **Page file** → `src/pages/golden-visa-typing-abu-dhabi.astro` (layout + schemas + CSS)

No new components are created — we reuse `LPHeader`, `LPTrustBar`, and the page's self-contained `<style>` block (identical design tokens).

---

## Google Policy Compliance Notes

> [!IMPORTANT]
> The client's licensed activity is **Document Clearing and Typing** (ADDED license). The page MUST NOT:
> - Claim to be a government body or portal (no "official", "TAMM portal", "ICA", "MOHRE")
> - Promise visa approval or guaranteed outcomes
> - Misrepresent government fees as service fees
> - Use misleading superlatives ("cheapest", "fastest in UAE")
>
> The legal disclaimer (already in reference page) will be adapted for Golden Visa context.

---

## Full Landing Page Structure (10 Sections)

### ① HERO — AIDA Attention
- **Badge:** `⭐ Abu Dhabi Golden Visa Typing Experts`
- **H1:** `Golden Visa Abu Dhabi — Expert Typing & Document Clearing`
- **Sub:** Targets "requirements for golden visa uae", "golden visa application", "AED 30K+ earners", "10-Year Residency" angle
- **Bullets (4):** Eligibility Check · Application Typing · TAMM Portal Assistance · Family Sponsorship Prep
- **CTA Group:** 📞 Call Now — Free Consultation + 💬 WhatsApp Us
- **Micro-copy:** `⚡ Reply in 1 min · 🔒 100% Confidential · No Government Affiliation`

### ② ATTENTION-HOOK / OFFER STRIP — PAS Problem
- Headline: `"Confused by the Golden Visa Process? We Handle the Paperwork."`
- Copy: Addresses pain points — complex eligibility criteria, TAMM portal complexity, risk of rejection
- Tone: Empathetic, professional

### ③ GOLDEN VISA ELIGIBILITY GUIDE (Service Highlights)
- 6 cards matching the ad group `AG_GoldenVisa_Requirements_And_Application`:
  - 🏆 Skilled Professional Typing (Engineers, Doctors, C-Level)
  - 📋 Application Document Clearing
  - 🔍 Eligibility Assessment Support
  - 👨‍👩‍👧 Family Sponsorship Document Prep
  - 🌐 TAMM Portal Assistance (typing/form help, NOT portal itself)
  - 💰 Golden Visa Cost Breakdown (transparent fee info)

### ④ STATS BAR
- 4.9 ⭐ Google Rating · 127+ Reviews · 500+ Golden Visa Applications · 10+ Years Abu Dhabi

### ⑤ SOCIAL PROOF — TESTIMONIALS CAROUSEL
- 6 testimonials from: Engineers, Business Investors, C-Level Executives, Doctors, Property Owners — all Golden Visa relevant personas

### ⑥ REQUIREMENTS SECTION (high-keyword density)
- H2: `Golden Visa Requirements — What You Need`
- 3-column layout showing: Salary AED 30K+ · Professional Qualification · UAE Residency History
- Includes disclaimer: "Eligibility criteria are set by UAE authorities and subject to change. We assist with document preparation only."

### ⑦ PROCESS — 4 Steps
- 01 → WhatsApp/Call for Free Eligibility Check
- 02 → Share your documents (passport, salary slip, qualifications)
- 03 → We type & clear all required paperwork
- 04 → Submit via TAMM — We guide you through it

### ⑧ FAQ (Schema-optimized for "golden visa" queries)
- 6 FAQs targeting: cost, requirements, TAMM process, processing time, eligibility, document list

### ⑨ CONTACT FORM + CTA — AIDA Action
- Form with Golden Visa-specific service dropdown: Skilled Professional, Business Investor, Family Sponsorship, Eligibility Check
- Subject line: `New Lead: Golden Visa Typing Abu Dhabi`
- Same web3forms access key as reference page

### ⑩ FOOTER + LEGAL DISCLAIMER
- Identical to reference page with adapted Golden Visa disclaimer
- Explicit: "We are NOT TAMM, ICA, or any UAE government entity. We provide document typing and clearing services only."

---

## Proposed Changes

### Data Layer

#### [NEW] [golden-visa-typing-abudhabi.ts](file:///home/faris/Development/clients/A%20to%20Z%20Typing/atozbusiness/src/lib/data/golden-visa-typing-abudhabi.ts)
All page text content, SEO metadata, bullets, stats, testimonials, steps, FAQs — structured identically to `typing-center-abudhabi.tsx`.

---

### Page Layer

#### [MODIFY] [golden-visa-typing-abu-dhabi.astro](file:///home/faris/Development/clients/A%20to%20Z%20Typing/atozbusiness/src/pages/golden-visa-typing-abu-dhabi.astro)
Full page implementation — same design system, same component usage (`LPHeader`, `LPTrustBar`), same CSS custom properties, self-contained `<style>` block.

**New sections vs reference page:**
- Requirements Section (§⑥) — new, unique to Golden Visa
- All content swapped to Golden Visa keyword targets from campaign_setup.md

---

## SEO / Schema Plan

| Schema Type | Content |
|---|---|
| `LocalBusiness` | Same as reference — business identity |
| `FAQPage` | 6 Golden Visa FAQs → rich snippets |
| `Service` | "Golden Visa Document Typing Abu Dhabi" |
| `BreadcrumbList` | Home → Golden Visa Typing Abu Dhabi |

**Meta Title:** `Golden Visa Abu Dhabi Typing | Expert Document Clearing – AtoZ Business`  
**Meta Description:** `Expert Golden Visa typing & document clearing in Abu Dhabi. Skilled Professional, Business Investor & Family Sponsorship. TAMM portal form help. Call now.`  
**URL:** `/golden-visa-typing-abu-dhabi` (matches filename)

---

## Verification Plan

### Automated
```bash
cd "/home/faris/Development/clients/A to Z Typing/atozbusiness"
npm run build
```

### Manual
- Verify page renders at `/golden-visa-typing-abu-dhabi`
- Check all CTA buttons have correct tracking attributes
- Validate legal disclaimer is present
- Confirm no government impersonation language
