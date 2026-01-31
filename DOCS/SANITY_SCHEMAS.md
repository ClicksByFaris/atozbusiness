# Sanity CMS Schema Documentation

**Project:** A to Z Business Services  
**Purpose:** Define all content types and fields for Sanity Studio  
**Status:** Draft - Pending Review

---

## 📋 Schema Overview

This document outlines all Sanity schemas (content types) for the project. Review each schema and its fields, then provide feedback on what to add, remove, or modify.

---

## 1. 🏢 Service Schema

**Schema Name:** `service`  
**Purpose:** Manage all 20+ services offered by the business

### Fields:

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| `title` | String | ✅ Yes | Service name (e.g., "Golden Visa Services") |
| `slug` | Slug | ✅ Yes | URL-friendly identifier (auto-generated from title) |
| `icon` | String | ✅ Yes | Lucide icon name (e.g., "Award", "Briefcase") |
| `shortDescription` | Text | ✅ Yes | Brief 1-2 sentence description (for cards) |
| `fullDescription` | Text | ✅ Yes | Detailed multi-paragraph description |
| `category` | String | ✅ Yes | Service category (Residency, Business, Documentation, General) |
| `featured` | Boolean | No | Show on homepage featured services? |
| `order` | Number | No | Display order (for sorting) |
| **SEO/AEO/GEO Fields** | | | **Critical for Search & AI Optimization** |
| `areaServed` | Array of Strings | ✅ Yes | Where is this service available? (e.g., ["Abu Dhabi", "Dubai", "UAE Wide"]) - **Essential for Local SEO ranking** |
| `serviceType` | String (Select) | ✅ Yes | Google category for the service (e.g., "GovernmentService", "VisaProcessing", "ProfessionalService") - **Helps Google categorize your page correctly** |
| `topicUrl` | URL | No | Link to official government page (u.ae) or Wikipedia for this service - **Connects your service to the official "Entity" for AI accuracy (GEO)** |
| `keyTakeaway` | Text | ✅ Yes | 2-sentence summary of the service (max 250 characters) - **Used for AI answers (ChatGPT/Gemini) and Google snippets (Position Zero)** |
| `estimatedTime` | String | ✅ Yes | How long the service takes (e.g., "3-5 Working Days") - **Required for Google's "Service" schema and improves UX** |
| **Service Image** | Object | ✅ Yes | High-quality service image |
| `serviceImage.image` | Image | ✅ Yes | Service featured image - **Essential for Google Images and Visual Search** |
| `serviceImage.altText` | String | ✅ Yes | Descriptive alt text for accessibility and SEO |
| **Features** | Array | ✅ Yes | List of key features/benefits |
| `features[].feature` | String | ✅ Yes | Individual feature text |
| **Process Steps** | Array | ✅ Yes | Step-by-step process |
| `process[].stepNumber` | Number | ✅ Yes | Step number (1, 2, 3...) |
| `process[].title` | String | ✅ Yes | Step title |
| `process[].description` | Text | ✅ Yes | Step description |
| **Required Documents** | Array | ✅ Yes | Documents needed for service |
| `documents[].name` | String | ✅ Yes | Document name |
| `documents[].description` | String | No | Additional info about document |
| `documents[].required` | Boolean | ✅ Yes | Is this document mandatory? |
| **FAQs** | Array | ✅ Yes | Frequently asked questions |
| `faqs[].question` | String | ✅ Yes | Question text |
| `faqs[].answer` | Text | ✅ Yes | Answer text |
| **Related Services** | Array | No | References to other services |
| `relatedServices[]` | Reference | No | Link to other service documents |
| **SEO Metadata** | Object | No | Additional SEO settings |
| `seo.metaTitle` | String | No | Custom meta title (defaults to service name) |
| `seo.metaDescription` | String | No | Custom meta description |
| `seo.keywords` | Array of Strings | No | SEO keywords |
| **Publishing** | Object | ✅ Yes | Publishing controls |
| `publishedAt` | Datetime | No | When service was published |

### ✅ Changes Applied:
- ❌ **REMOVED:** Pricing Packages section (as requested)
- ✅ **ADDED:** 6 SEO/AEO/GEO optimized fields:
  1. `areaServed` - For local SEO
  2. `serviceType` - For Google categorization
  3. `topicUrl` - For entity linking
  4. `keyTakeaway` - For AI snippets
  5. `estimatedTime` - For service schema
  6. `serviceImage` with `altText` - For visual search

**Status:** ✅ Ready for implementation
 

---

## 2. 📍 Location Schema

**Schema Name:** `location`  
**Purpose:** Manage office locations (Khalidiya, Mussafah, etc.)

### Fields:

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| `name` | String | ✅ Yes | Location name (e.g., "Khalidiya Office") |
| `slug` | Slug | ✅ Yes | URL-friendly identifier |
| `displayName` | String | No | Alternative display name |
| **Address** | Object | ✅ Yes | Complete address information |
| `address.street` | String | ✅ Yes | Street address |
| `address.area` | String | ✅ Yes | Area/District (e.g., "Khalidiya") |
| `address.city` | String | ✅ Yes | City (default: "Abu Dhabi") |
| `address.emirate` | String | ✅ Yes | Emirate (default: "Abu Dhabi") |
| `address.country` | String | ✅ Yes | Country (default: "United Arab Emirates") |
| `address.poBox` | String | No | P.O. Box number |
| **Coordinates** | Object | ✅ Yes | GPS coordinates for maps |
| `coordinates.lat` | Number | ✅ Yes | Latitude |
| `coordinates.lng` | Number | ✅ Yes | Longitude |
| **Contact** | Object | ✅ Yes | Contact information |
| `contact.phone` | String | ✅ Yes | Phone number |
| `contact.whatsapp` | String | No | WhatsApp number (can be same as phone) |
| `contact.email` | String | ✅ Yes | Email address |
| **Opening Hours** | Array | ✅ Yes | Business hours | 
| `hours[].day` | String | ✅ Yes | Day of week |
| `hours[].open` | String | ✅ Yes | Opening time (e.g., "09:00") |
| `hours[].close` | String | ✅ Yes | Closing time (e.g., "18:00") |
| `hours[].closed` | Boolean | No | Is office closed this day? |
| **Additional Info** | Object | No | Extra location details |
| `info.parking` | Text | No | Parking information |
| `info.landmarks` | Array of Strings | No | Nearby landmarks |
| `info.publicTransport` | Text | No | Public transport directions |
| `info.directions` | Text | No | Driving directions |
| **Media** | Object | No | Images and media |
| `media.featuredImage` | Image | No | Main office photo |
| `media.gallery` | Array of Images | No | Additional office photos |
| **Settings** | Object | ✅ Yes | Location settings |
| `isPrimary` | Boolean | No | Is this the main office? |
| `isActive` | Boolean | ✅ Yes | Is location currently operational? |
| `order` | Number | No | Display order |

**Your Feedback:** Which fields should I add/remove/modify?

---

## 3. 📝 Blog Post Schema

**Schema Name:** `post`  
**Purpose:** Manage blog articles and content

### Fields:

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| `title` | String | ✅ Yes | Blog post title |
| `slug` | Slug | ✅ Yes | URL-friendly identifier |
| `excerpt` | Text | ✅ Yes | Short summary (150-200 chars) |
| `featuredImage` | Image | ✅ Yes | Main post image |
| `content` | Portable Text | ✅ Yes | Full blog content (rich text) |
| `author` | Reference | ✅ Yes | Link to author document |
| `category` | Reference | ✅ Yes | Link to category document |
| `tags` | Array of Strings | No | Post tags for filtering |
| `readingTime` | Number | No | Estimated reading time (minutes) |
| **SEO** | Object | No | SEO metadata |
| `seo.metaTitle` | String | No | Custom meta title |
| `seo.metaDescription` | String | No | Custom meta description |
| `seo.keywords` | Array of Strings | No | SEO keywords |
| `seo.ogImage` | Image | No | Custom Open Graph image |
| **Publishing** | Object | ✅ Yes | Publishing controls |
| `publishedAt` | Datetime | ✅ Yes | Publication date |
| `updatedAt` | Datetime | No | Last update date |
| `featured` | Boolean | No | Show on homepage? |
| `isPublished` | Boolean | ✅ Yes | Is post live? |

**Your Feedback:** Which fields should I add/remove/modify?

---

## 4. 🏷️ Category Schema

**Schema Name:** `category`  
**Purpose:** Organize blog posts into categories

### Fields:

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| `title` | String | ✅ Yes | Category name |
| `slug` | Slug | ✅ Yes | URL-friendly identifier |
| `description` | Text | No | Category description |
| `color` | String | No | Color code for UI (e.g., "#3B82F6") |
| `icon` | String | No | Icon name for category |
| `order` | Number | No | Display order |

**Your Feedback:** Which fields should I add/remove/modify?

---

## 5. ✍️ Author Schema

**Schema Name:** `author`  
**Purpose:** Manage blog post authors

### Fields:

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| `name` | String | ✅ Yes | Author full name |
| `slug` | Slug | ✅ Yes | URL-friendly identifier |
| `role` | String | No | Job title/role |
| `bio` | Text | No | Author biography |
| `photo` | Image | No | Author profile photo |
| `email` | String | No | Contact email |
| **Social Media** | Object | No | Social links |
| `social.twitter` | URL | No | Twitter profile |
| `social.linkedin` | URL | No | LinkedIn profile |
| `social.website` | URL | No | Personal website |

**Your Feedback:** Which fields should I add/remove/modify?

---

## 6. 💼 Career Schema

**Schema Name:** `career`  
**Purpose:** Manage job postings

### Fields:

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| `title` | String | ✅ Yes | Job title |
| `slug` | Slug | ✅ Yes | URL-friendly identifier |
| `description` | Portable Text | ✅ Yes | Full job description |
| `location` | Reference | ✅ Yes | Link to location document |
| `employmentType` | String | ✅ Yes | Full-time, Part-time, Contract |
| `department` | String | No | Department/team |
| **Requirements** | Array | ✅ Yes | Job requirements |
| `requirements[].requirement` | String | ✅ Yes | Individual requirement |
| **Benefits** | Array | No | Job benefits |
| `benefits[].benefit` | String | ✅ Yes | Individual benefit |
| `salary` | String | No | Salary range (e.g., "AED 5,000 - 8,000") |
| `experience` | String | No | Required experience (e.g., "2-3 years") |
| **Publishing** | Object | ✅ Yes | Publishing controls |
| `postedAt` | Datetime | ✅ Yes | When job was posted |
| `expiresAt` | Datetime | No | Application deadline |
| `isActive` | Boolean | ✅ Yes | Is position still open? |

**Your Feedback:** Which fields should I add/remove/modify?

---

## 7. 🖼️ Gallery Schema

**Schema Name:** `gallery`  
**Purpose:** Manage photo galleries and albums

### Fields:

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| `title` | String | ✅ Yes | Album/gallery name |
| `slug` | Slug | ✅ Yes | URL-friendly identifier |
| `description` | Text | No | Album description |
| `category` | String | No | Gallery category (Office, Events, Team, etc.) |
| **Photos** | Array | ✅ Yes | Gallery images |
| `photos[].image` | Image | ✅ Yes | Photo file |
| `photos[].caption` | String | No | Photo caption |
| `photos[].alt` | String | ✅ Yes | Alt text for accessibility |
| `featuredImage` | Image | No | Album cover image |
| `order` | Number | No | Display order |
| `publishedAt` | Datetime | No | Publication date |

**Your Feedback:** Which fields should I add/remove/modify?

---

## 8. ⚙️ Settings Schema

**Schema Name:** `siteSettings`  
**Purpose:** Global site settings (singleton - only one document)

### Fields:

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| `siteTitle` | String | ✅ Yes | Website title |
| `siteDescription` | Text | ✅ Yes | Site description for SEO |
| `logo` | Image | No | Site logo |
| `favicon` | Image | No | Browser favicon |
| **Contact** | Object | ✅ Yes | Global contact info |
| `contact.phone` | String | ✅ Yes | Main phone number |
| `contact.whatsapp` | String | ✅ Yes | WhatsApp number |
| `contact.email` | String | ✅ Yes | Main email |
| **Social Media** | Object | No | Social media links |
| `social.facebook` | URL | No | Facebook page |
| `social.instagram` | URL | No | Instagram profile |
| `social.twitter` | URL | No | Twitter profile |
| `social.linkedin` | URL | No | LinkedIn page |
| `social.youtube` | URL | No | YouTube channel |
| **Business Hours** | Object | No | Default business hours |
| `hours.weekdays` | String | No | Weekday hours |
| `hours.weekend` | String | No | Weekend hours |
| **SEO** | Object | No | Default SEO settings |
| `seo.defaultImage` | Image | No | Default OG image |
| `seo.keywords` | Array of Strings | No | Site-wide keywords |

**Your Feedback:** Which fields should I add/remove/modify?

---

## 📊 Summary

**Total Schemas:** 8

1. ✅ Service (20+ documents)
2. ✅ Location (2+ documents)
3. ✅ Blog Post (multiple documents)
4. ✅ Category (multiple documents)
5. ✅ Author (1+ documents)
6. ✅ Career (0+ documents)
7. ✅ Gallery (0+ documents)
8. ✅ Settings (1 document - singleton)

---

## 🎯 Next Steps

**Please review each schema and tell me:**

1. ✏️ **Which fields to ADD** - Any missing fields you need?
2. ❌ **Which fields to REMOVE** - Any unnecessary fields?
3. 🔄 **Which fields to MODIFY** - Any changes to field types or requirements?
4. 💡 **Any new schemas needed** - Any content types I missed?

Once you provide feedback, I'll create the actual Sanity schema TypeScript files!

---

**Status:** ⏳ Awaiting your feedback
