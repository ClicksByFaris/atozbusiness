// Schema.org LocalBusiness structured data
// For homepage and location pages

import { BUSINESS_INFO, LOCATIONS, BUSINESS_HOURS, SOCIAL_MEDIA } from '../constants';
import { SEO_DEFAULTS, SOCIAL_DEFAULTS } from '../seo';

export interface LocalBusinessSchemaProps {
    name?: string;
    description?: string;
    location?: 'main' | 'branch' | 'all';
    additionalTypes?: string[];
}

export function generateLocalBusinessSchema(props: LocalBusinessSchemaProps = {}) {
    const {
        name = BUSINESS_INFO.name,
        description = 'Professional typing, PRO services, visa processing and company formation in Abu Dhabi',
        location = 'main',
        additionalTypes = ['ProfessionalService', 'GovernmentOffice'],
    } = props;

    // Main office data
    const mainOffice = {
        '@type': ['LocalBusiness', ...additionalTypes],
        '@id': `${SEO_DEFAULTS.siteUrl}/#organization`,
        name: name,
        description: description,
        url: SEO_DEFAULTS.siteUrl,
        telephone: BUSINESS_INFO.phone,
        email: BUSINESS_INFO.email,
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
        priceRange: 'AED',
        areaServed: {
            '@type': 'City',
            name: 'Abu Dhabi',
        },
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
                    address: {
                        '@type': 'PostalAddress',
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

// For location pages with specific data
export function generateLocationSchema(locationData: {
    name: string;
    address: string;
    area: string;
    city: string;
    latitude?: number;
    longitude?: number;
    phone?: string;
    image?: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: `${BUSINESS_INFO.name} - ${locationData.name}`,
        ...(locationData.image && { image: locationData.image }),
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
    };
}
