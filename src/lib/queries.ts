// GROQ queries for Sanity CMS

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
  keywords
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
