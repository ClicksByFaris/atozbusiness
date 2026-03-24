// GROQ queries for Sanity CMS



// About
export const aboutPageQuery = `*[_type == "about"][0] {
  teamMembers[] | order(order asc) {
    name,
    position,
    order,
    isLeader,
    image {
      asset->{
        _id,
        url,
        metadata {
          lqip,
          dimensions
        }
      },
      alt
    }
  }
}`;

// Services
export const servicesQuery = `*[_type == "service"] | order(title asc) {
  _id,
  title,
  slug,
  category,
  "excerpt": shortDescription,
  "featuredImage": cardImage {
    asset->{
      _id,
      url,
      metadata {
        lqip,
        dimensions
      }
    },
    "alt": altText
  },
  "isPopular": featured
}`;

export const serviceBySlugQuery = `*[_type == "service" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  category,
  "excerpt": shortDescription,
  "description": fullDescription,
  "featuredImage": cardImage {
    asset->{
      _id,
      url,
      metadata {
        lqip,
        dimensions
      }
    },
    "alt": altText
  },
  "content": fullDescription,
  "documentsRequired": documents[].name,
  "processSteps": process,
  "pricing": pricing,
  features,
  relatedServices[]->{
    _id,
    title,
    slug,
    "excerpt": shortDescription,
    "featuredImage": cardImage {
      asset->{
        _id,
        url,
        metadata {
          lqip,
          dimensions
        }
      }
    }
  },
  "faq": faqs,
  "isPopular": featured,
  metaTitle,
  metaDescription,
  keywords,
  relatedBlogs[]->{
    _id,
    title,
    slug,
    publishedAt,
    category->{
      title
    },
    excerpt,
    featuredImage {
      asset->{
        _id,
        url,
        metadata {
          lqip,
          dimensions
        }
      }
    }
  }
}`;

export const popularServicesQuery = `*[_type == "service" && featured == true] | order(title asc) [0...6] {
  _id,
  title,
  slug,
  "excerpt": shortDescription,
  "featuredImage": cardImage {
    asset->{
      _id,
      url,
      metadata {
        lqip,
        dimensions
      }
    },
    "alt": altText
  }
}`;

// Locations
// Locations
export const locationsQuery = `*[_type == "location"] | order(isPrimary desc, name asc) {
  _id,
  name,
  slug,
  "address": address.street + ", " + address.area + ", " + address.city,
  "area": address.area,
  "landmark": info.landmarks[0],
  "phone": contact.phone,
  "whatsapp": contact.whatsapp,
  "email": contact.email,
  "coordinates": coordinates { lat, lng },
  "mapEmbedUrl": coordinates.googleMapsEmbedUrl,
  "gbpUrl": coordinates.googleMapsUrl,
  hours,
  "image": media.featuredImage {
    asset->{
      _id,
      url,
      metadata {
        lqip,
        dimensions
      }
    }
  },
  isPrimary
}`;

export const locationBySlugQuery = `*[_type == "location" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  "address": address.street + ", " + address.area + ", " + address.city,
  "area": address.area,
  "landmark": info.landmarks[0],
  "phone": contact.phone,
  "whatsapp": contact.whatsapp,
  "email": contact.email,
  "coordinates": coordinates { lat, lng },
  "mapEmbedUrl": coordinates.googleMapsEmbedUrl,
  "gbpUrl": coordinates.googleMapsUrl,
  hours,
  "image": media.featuredImage {
    asset->{
      _id,
      url,
      metadata {
        lqip,
        dimensions
      }
    }
  },
  "gallery": media.gallery[] {
    asset->{
      _id,
      url,
      metadata {
        lqip,
        dimensions
      }
    },
    alt
  },
  servicesAvailable[]->{
    _id,
    title,
    slug,
    excerpt,
    icon
  },
  isPrimary,
  metaDescription
}`;

// Blog posts
export const blogPostsQuery = `*[_type == "blog"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  author->{
    name,
    image {
      asset->{
        _id,
        url,
        metadata {
          lqip,
        dimensions
        }
      }
    }
  },
  categories[]->{
    title,
    slug
  },
  excerpt,
  mainImage {
    asset->{
      _id,
      url,
      metadata {
        lqip,
        dimensions
      }
    }
  },
  tags
}`;

export const blogPostBySlugQuery = `*[_type == "blog" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedAt,
  author->{
    name,
    slug,
    image {
      asset->{
        _id,
        url,
        metadata {
          lqip,
        dimensions
        }
      }
    },
    bio,
    role
  },
  categories[]->{
    _id,
    title,
    slug
  },
  excerpt,
  mainImage {
    asset->{
      _id,
      url,
      metadata {
        lqip,
        dimensions
      }
    }
  },
  content,
  relatedServices[]->{
    _id,
    title,
    slug
  },
  metaTitle,
  metaDescription,
  tags
}`;

export const latestBlogPostsQuery = `*[_type == "blog"] | order(publishedAt desc) [0...$limit] {
  _id,
  title,
  slug,
  publishedAt,
  author->{
    name
  },
  categories[]->{
    title
  },
  excerpt,
  mainImage {
    asset->{
      _id,
      url,
      metadata {
        lqip,
        dimensions
      }
    }
  }
}`;

// Site settings
export const siteSettingsQuery = `*[_type == "settings"][0] {
  siteName,
  siteDescription,
  logo {
    asset->{
      _id,
      url,
      metadata {
        lqip,
        dimensions
      }
    }
  },
  primaryColor,
  secondaryColor,
  contactEmail,
  contactPhone,
  whatsappNumber,
  socialLinks,
  footerText
}`;

// Categories
export const categoriesQuery = `*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug,
  description
}`;

// Landing Pages
export const allLandingPagesQuery = `*[_type == "landingPage" && published == true && active == true] {
  title,
  slug,
  mainHeadline,
  subHeadline,
  heroImage {
    asset,
    altText
  },
  primaryCtaText,
  secondaryCta,
  benefits,
  requiredDocuments,
  coreServicesHeadline,
  coreServices,
  socialProof-> {
    googleRating,
    reviewCount,
    testimonials[] {
      customerName,
      customerPhoto,
      rating,
      testimonial
    }
  },
  metaTitle,
  metaDescription,
  ogImage {
    asset,
    altText
  }
}`;

export const landingPageBySlugQuery = `*[_type == "landingPage" && slug.current == $slug][0] {
  title,
  slug,
  mainHeadline,
  subHeadline,
  heroImage {
    asset,
    altText
  },
  primaryCtaText,
  secondaryCta,
  benefits,
  requiredDocuments,
  coreServicesHeadline,
  coreServices,
  socialProof-> {
    googleRating,
    reviewCount,
    testimonials[] {
      customerName,
      customerPhoto,
      rating,
      testimonial
    }
  },
  metaTitle,
  metaDescription,
  ogImage {
    asset,
    altText
  }
}`;
