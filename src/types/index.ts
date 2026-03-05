// Common types used across the application

export interface Service {
  _id: string;
  title: string;
  slug: { current: string };
  category: 'visa' | 'pro' | 'government' | 'documents';
  excerpt: string;
  description: any[];
  featuredImage?: {
    asset: {
      _ref: string;
      url?: string;
    };
    alt?: string;
  };
  icon?: string;
  content?: any[];
  documentsRequired?: string[];
  processSteps?: ProcessStep[];
  pricing?: {
    startingFrom: number;
    currency: string;
    duration: string;
  };
  features?: string[];
  relatedServices?: Service[];
  relatedBlogs?: BlogPost[];
  faq?: FAQItem[];
  isPopular?: boolean;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
}

export interface ProcessStep {
  step: string;
  description: string;
}

export interface SanityImageObject {
  asset: {
    _ref?: string;
    _id?: string;
    url?: string;
    metadata?: {
      lqip?: string;
      dimensions?: {
        width: number;
        height: number;
        aspectRatio: number;
      };
    };
  };
  alt?: string;
}

export interface Location {
  _id: string;
  name: string;
  slug: { current: string };
  address: string;
  area: string;
  landmark?: string;
  phone: string;
  whatsapp: string;
  email: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  mapEmbedUrl?: string;
  gbpUrl?: string;
  hours?: WeekHours;
  image?: SanityImageObject;
  gallery?: SanityImageObject[];
  servicesAvailable?: Service[];
  isPrimary?: boolean;
  metaDescription?: string;
}

export interface WeekHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface BlogPost {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  author: Author;
  category: Category;
  excerpt: string;
  featuredImage: SanityImageObject;
  content: any[];
  keyTakeaways?: string[];
  faqs?: FAQItem[];
  relatedLocations?: Location[];
  metaTitle?: string;
  metaDescription?: string;
  tags?: string[];
  readingTime?: number;
  featured?: boolean;
}

export interface Category {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  color?: string;
  icon?: string;
  order?: number;
}

export interface Author {
  _id: string;
  name: string;
  slug: { current: string };
  photo?: SanityImageObject;
  bio?: string;
  role?: string;
  email?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface SiteSettings {
  siteName: string;
  siteDescription: string;
  logo?: {
    asset: {
      _ref: string;
      url?: string;
    };
  };
  primaryColor?: string;
  secondaryColor?: string;
  contactEmail: string;
  contactPhone: string;
  whatsappNumber: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
  footerText?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Breadcrumb {
  label: string;
  href: string;
}

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
}

export interface GalleryItem {
  _id: string;
  title: string;
  category: string;
  image: SanityImageObject;
  description?: string;
  date?: string;
}

export interface JobListing {
  _id: string;
  title: string;
  slug: { current: string };
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance';
  description: any[]; // Portable Text
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  isClosed?: boolean;
  publishedAt: string;
  metaTitle?: string;
  metaDescription?: string;
}
