# 🛠️ Landing Page Sanity Setup Reference

This document provides the exact list of fields available in your **Sanity Studio ([landingPage.ts](file:///d:/SMF\website\atozbusiness\studio\schemas\landingPage.ts))** for building high-converting landing pages.

---

## 1. General Configuration
| Field Name | Type | Key Utility |
| :--- | :--- | :--- |
| **Page Title** | `string` | Internal name (e.g., "Golden Visa Campaign 2024") |
| **Slug** | `slug` | The URL (e.g., `atozbusiness.ae/lp/golden-visa`) |

---

## 2. Hero Section (Headers)
| Field Name | Type | Key Utility |
| :--- | :--- | :--- |
| **Main Headline** | `string` | The <h1> big bold promise at the top (Max 80 chars) |
| **Sub-Headline** | `text` | Supporting text that builds trust (Max 200 chars) |
| **Hero Background Image** | `image` | Background visual with **Alt Text** |

---

## 3. Contact & Conversions (CTA)
| Field Name | Type | Key Utility |
| :--- | :--- | :--- |
| **Primary CTA Text** | `string` | Text for the main WhatsApp button (e.g., "Chat Now") |
| **Secondary CTA** | `object` | **Sticky Footer CTA** with custom text and toggle |

---

## 4. Selling Points (Benefits)
*   **Benefits List:** An array of 3 to 7 items.
*   **Structure:** Each item contains **Benefit Text**. 
*   *Note: In the studio preview, these are automatically prepended with ✅.*

---

## 5. Service Grid (Core Services)
*   **Services Section Headline:** Customizable title (e.g., "Our Expert Family Visa Services").
*   **Core Services List:** 2 to 6 targeted services.
    *   **Icon:** Lucide-react icon name (e.g., `FileText`) or an **Emoji**.
    *   **Service Title:** Targeted service name.
    *   **Service Description:** Short value statement (Max 200 chars).

---

## 6. Search Engines & Social Media (SEO)
| Field Name | Type | Key Utility |
| :--- | :--- | :--- |
| **Meta Title** | `string` | SEO title for search engines (Max 60 chars) |
| **Meta Description** | `text` | SEO description for search results (Max 160 chars) |
| **OG Image** | `image` | Thumbnail image for social sharing |

---

> [!TIP]
> **Conversion Strategy:** Since these pages are for **Paid Ads Only**, always ensure your **Main Headline** matches the text of the advertisement the user clicked on. This maintains transition consistency and lowers your bounce rate!

