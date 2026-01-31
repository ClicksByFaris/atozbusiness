// GROQ queries for Sanity CMS

// Services
export const servicesQuery = `*[_type == "service"] | order(title asc) {
  _id,
  title,
  slug,
  category,
  excerpt,
  featuredImage {
    asset->{
      _id,
      url
    },
    alt
  },
  icon,
  isPopular
}`;

export const serviceBySlugQuery = `*[_type == "service" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  category,
  excerpt,
  description,
  featuredImage {
    asset->{
      _id,
      url
    },
    alt
  },
  icon,
  content,
  documentsRequired,
  processSteps,
  pricing,
  features,
  relatedServices[]->{
    _id,
    title,
    slug,
    excerpt,
    featuredImage {
      asset->{
        _id,
        url
      }
    }
  },
  faq,
  isPopular,
  metaTitle,
  metaDescription,
  keywords
}`;

export const popularServicesQuery = `*[_type == "service" && isPopular == true] | order(title asc) [0...6] {
  _id,
  title,
  slug,
  excerpt,
  featuredImage {
    asset->{
      _id,
      url
    }
  },
  icon
}`;

// Locations
export const locationsQuery = `*[_type == "location"] | order(isPrimary desc, name asc) {
  _id,
  name,
  slug,
  address,
  area,
  landmark,
  phone,
  whatsapp,
  email,
  coordinates,
  mapEmbedUrl,
  gbpUrl,
  hours,
  image {
    asset->{
      _id,
      url
    }
  },
  isPrimary
}`;

export const locationBySlugQuery = `*[_type == "location" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  address,
  area,
  landmark,
  phone,
  whatsapp,
  email,
  coordinates,
  mapEmbedUrl,
  gbpUrl,
  hours,
  image {
    asset->{
      _id,
      url
    }
  },
  gallery[] {
    asset->{
      _id,
      url
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
        url
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
      url
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
        url
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
      url
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
      url
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
      url
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
