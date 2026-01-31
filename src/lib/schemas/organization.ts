// Schema.org Organization structured data
// For About page and general organization information

import { BUSINESS_INFO } from '../constants';
import { SEO_DEFAULTS } from '../seo';
import { ABOUT_DATA } from '../about-data';

export function generateOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${SEO_DEFAULTS.siteUrl}/#organization`,
        name: BUSINESS_INFO.name,
        description: ABOUT_DATA.statements.mission,
        url: SEO_DEFAULTS.siteUrl,
        logo: {
            '@type': 'ImageObject',
            url: `${SEO_DEFAULTS.siteUrl}/logo.png`,
        },
        image: {
            '@type': 'ImageObject',
            url: `${SEO_DEFAULTS.siteUrl}/og-image.jpg`,
        },
        telephone: BUSINESS_INFO.phone,
        email: BUSINESS_INFO.email,
        foundingDate: ABOUT_DATA.companyInfo.foundingYear,
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'AE',
            addressRegion: 'Abu Dhabi',
            addressLocality: 'Abu Dhabi',
        },
        sameAs: [
            // Will add social media URLs when available
            // 'https://facebook.com/atozbusiness',
            // 'https://instagram.com/atozbusiness',
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: BUSINESS_INFO.phone,
            contactType: 'customer service',
            availableLanguage: ['English', 'Arabic', 'Hindi', 'Urdu'],
            areaServed: 'AE',
        },
        award: ABOUT_DATA.statistics
            .filter(stat => stat.label.includes('Success Rate') || stat.label.includes('Happy Clients'))
            .map(stat => `${stat.value} ${stat.label}`),
    };
}
