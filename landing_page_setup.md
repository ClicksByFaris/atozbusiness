# 🛠️ Landing Page Sanity Setup Reference

This document provides the exact list of fields available in your **Sanity Studio ([landingPage.ts](file:///d:/SMF/website/atozbusiness/studio/schemas/landingPage.ts))** for building high-converting landing pages.

---

## 1. General Configuration
| Field Name | Type | Key Utility |
| :--- | :--- | :--- |
| **Page Title** | `string` | Internal name (e.g., "Golden Visa Campaign 2024") |
| **Slug** | `slug` | The URL (e.g., `atozbusiness.ae/lp/golden-visa`) |
| **Published** | `boolean` | Master toggle to make the page live |
| **Active** | `boolean` | Secondary toggle (Useful for pausing ads temporarily) |

---

## 2. Hero Section (Header)
| Field Name | Type | Key Utility |
| :--- | :--- | :--- |
| **Main Headline** | `string` | The <h1> big bold promise at the top |
| **Sub-Headline** | `text` | supporting text that builds trust |
| **Hero Image** | `image` | Background visual with SEO Alt Text |

---

## 3. Contact & Conversions (CTA)
| Field Name | Type | Key Utility |
| :--- | :--- | :--- |
| **Primary CTA Text** | `string` | Text inside the main button (e.g., "Chat Now") 

---

## 4. Selling Points (Benefits)
*   **Benefits List:** An array of 3 to 7 items.
*   **Structure:** Each item contains a **Single Emoji** + **Short Text** (e.g. "✅ Fast Approval").

---

## 5. Service Grid (Core Services)
*   **Headline:** Customizable title for the services grid.
*   **Structure:** Each service item contains:
    *   **Icon:** Lucide-react icon name or an Emoji.
    *   **Title:** Targeted service name.
    *   **Description:** Short value statement.

---

## 6. Trust & Social Proof (Testimonials)
*   **Social Proof Source:** A **Reference** field.
*   **How it works:** You point this to a separate document in the "Social Proof" folder that contains:
    *   Google Star Rating (e.g., 4.9).
    *   Review Count.
    *   List of Customer Names, Photos, and written Testimonials.

---

## 7. Search Engines & Social Media (SEO)
| Field Name | Type | Key Utility |
| :--- | :--- | :--- |
| **Meta Title** | `string` | Title shown in browser tab and WhatsApp previews | ok 
| **Meta Description** | `text` | Description shown in social sharing cards |
| **OG Image** | `image` | The thumbnail image used when the link is shared |

---

> [!TIP]
> **Conversion Strategy:** Since these pages are for **Paid Ads Only**, always ensure your **Main Headline** matches the text of the advertisement the user clicked on. This maintains transition consistency and lowers your bounce rate!
