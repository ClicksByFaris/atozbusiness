import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

const sanityClient = createClient({
  projectId: "xyzxsyqr",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true
  // Use CDN for faster response times
});
const builder = createImageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
function getImageUrl(source, width, height) {
  let urlBuilder = builder.image(source).auto("format").fit("max");
  if (width) {
    urlBuilder = urlBuilder.width(width);
  }
  if (height) {
    urlBuilder = urlBuilder.height(height);
  }
  return urlBuilder.url();
}

const servicesQuery = `*[_type == "service"] | order(title asc) {
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
const serviceBySlugQuery = `*[_type == "service" && slug.current == $slug][0] {
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
const popularServicesQuery = `*[_type == "service" && featured == true] | order(title asc) [0...6] {
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
const locationsQuery = `*[_type == "location"] | order(isPrimary desc, name asc) {
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
const locationBySlugQuery = `*[_type == "location" && slug.current == $slug][0] {
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

export { locationsQuery as a, serviceBySlugQuery as b, servicesQuery as c, getImageUrl as g, locationBySlugQuery as l, popularServicesQuery as p, sanityClient as s, urlFor as u };
