// Schema.org LocalBusiness structured data
// For homepage and location pages

import { BUSINESS_INFO, LOCATIONS, BUSINESS_HOURS, SOCIAL_MEDIA } from '../constants';
import { SEO_DEFAULTS, SOCIAL_DEFAULTS } from '../seo';

export interface SchemaService {
    name: string;
    description: string;
    url?: string;
}

export interface LocalBusinessSchemaProps {
    name?: string;
    description?: string;
    location?: 'main' | 'branch' | 'all';
    additionalTypes?: string[];
    hasMap?: string; // Google Maps URL
    services?: SchemaService[]; // For hasOfferCatalog
    priceRange?: string;
}

export function generateLocalBusinessSchema(props: LocalBusinessSchemaProps = {}) {
    const {
        name = BUSINESS_INFO.name,
        description = 'Professional typing, PRO services, visa processing and company formation in Abu Dhabi',
        location = 'main',
        additionalTypes = ['ProfessionalService', 'GovernmentOffice'],
        hasMap,
        services = [],
        priceRange = '$$',
    } = props;

    // Construct OfferCatalog if services are provided
    const hasOfferCatalog = services.length > 0 ? {
        '@type': 'OfferCatalog',
        name: 'Government and Business Services',
        itemListElement: services.map((service, index) => ({
            '@type': 'Offer',
            itemOffered: {
                '@type': 'Service',
                name: service.name,
                description: service.description,
                ...(service.url && { url: service.url })
            },
            position: index + 1
        }))
    } : undefined;

    // Main office data
    const mainOffice = {
        '@type': ['LocalBusiness', ...additionalTypes],
        '@id': `${SEO_DEFAULTS.siteUrl}/#organization`,
        name: name,
        description: description,
        url: SEO_DEFAULTS.siteUrl,
        telephone: BUSINESS_INFO.phone,
        email: BUSINESS_INFO.email,
        ...(hasMap && { hasMap }),
        logo: {
            '@type': 'ImageObject',
            url: `${SEO_DEFAULTS.siteUrl}/logo.png`,
        },
        image: {
            '@type': 'ImageObject',
            url: `${SEO_DEFAULTS.siteUrl}/og-image.jpg`,
        },
        address: {
            '@type': 'PostalAddress',
            streetAddress: LOCATIONS.main.address,
            addressLocality: LOCATIONS.main.area,
            addressRegion: LOCATIONS.main.city,
            addressCountry: 'AE',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: LOCATIONS.main.coordinates.latitude,
            longitude: LOCATIONS.main.coordinates.longitude,
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '08:00',
                closes: '21:00',
            },
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Sunday',
                opens: '00:00',
                closes: '00:00', // Closed
            },
        ],
        priceRange: priceRange,
        areaServed: {
            '@type': 'City',
            name: 'Abu Dhabi',
        },
        ...(hasOfferCatalog && { hasOfferCatalog }),
        sameAs: [
            SOCIAL_DEFAULTS.ogLocale,
            ...Object.values(SOCIAL_MEDIA),
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: BUSINESS_INFO.phone,
            contactType: 'customer service',
            availableLanguage: ['English', 'Arabic', 'Hindi', 'Urdu'],
            areaServed: 'AE',
        },
    };

    // If showing both locations
    if (location === 'all') {
        return {
            '@context': 'https://schema.org',
            '@graph': [
                mainOffice,
                {
                    ...mainOffice,
                    '@id': `${SEO_DEFAULTS.siteUrl}/#branch`,
                    name: `${name} - ${LOCATIONS.branch.name}`,
                    ...(hasMap && { hasMap }), // Note: Ideally, pass array of maps if 'all' is used, but fallback to single map or constants
                    address: {
                        '@type': 'PostalAddress',
                        streetAddress: LOCATIONS.branch.address,
                        addressLocality: LOCATIONS.branch.area,
                        addressRegion: LOCATIONS.branch.city,
                        addressCountry: 'AE',
                    },
                    geo: {
                        '@type': 'GeoCoordinates',
                        latitude: LOCATIONS.branch.coordinates.latitude,
                        longitude: LOCATIONS.branch.coordinates.longitude,
                    },
                },
            ],
        };
    }

    // Single location
    return {
        '@context': 'https://schema.org',
        ...mainOffice,
    };
}

// For location pages with specific data (Sanity integrated)
export function generateLocationSchema(locationData: {
    name: string;
    address: string;
    area: string;
    city: string;
    latitude?: number;
    longitude?: number;
    phone?: string;
    image?: string;
    hasMap?: string;
    services?: SchemaService[];
    priceRange?: string;
}) {
    // Construct OfferCatalog for individual locations as well
    const hasOfferCatalog = locationData.services && locationData.services.length > 0 ? {
        '@type': 'OfferCatalog',
        name: 'Services Available at this Location',
        itemListElement: locationData.services.map((service, index) => ({
            '@type': 'Offer',
            itemOffered: {
                '@type': 'Service',
                name: service.name,
                description: service.description,
                ...(service.url && { url: service.url })
            },
            position: index + 1
        }))
    } : undefined;

    return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: `${BUSINESS_INFO.name} - ${locationData.name}`,
        ...(locationData.image && { image: locationData.image }),
        ...(locationData.hasMap && { hasMap: locationData.hasMap }),
        address: {
            '@type': 'PostalAddress',
            streetAddress: locationData.address,
            addressLocality: locationData.area,
            addressRegion: locationData.city,
            addressCountry: 'AE',
        },
        ...(locationData.latitude &&
            locationData.longitude && {
            geo: {
                '@type': 'GeoCoordinates',
                latitude: locationData.latitude,
                longitude: locationData.longitude,
            },
        }),
        telephone: locationData.phone || BUSINESS_INFO.phone,
        email: BUSINESS_INFO.email,
        url: SEO_DEFAULTS.siteUrl,
        priceRange: locationData.priceRange || '$$',
        ...(hasOfferCatalog && { hasOfferCatalog }),
    };
}

