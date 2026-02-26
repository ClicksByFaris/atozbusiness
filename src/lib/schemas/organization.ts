// Schema.org Organization structured data
// For About page and general organization information

import { BUSINESS_INFO, SOCIAL_MEDIA, LOCATIONS } from '../constants';
import { SEO_DEFAULTS } from '../seo';
import { ABOUT_DATA } from '../about-data';

export interface TeamMemberSchemaProps {
    name: string;
    position: string;
    image?: string;
}

export interface OrganizationSchemaProps {
    teamMembers?: TeamMemberSchemaProps[];
    hasMap?: string; // Optional Google Maps link to build sameAs graph
}

export function generateOrganizationSchema(props: OrganizationSchemaProps = {}) {
    const { teamMembers = [], hasMap } = props;

    // Combine social media with Google Maps for complete identity graph
    const sameAsUrls: string[] = [...Object.values(SOCIAL_MEDIA)];
    if (hasMap) {
        sameAsUrls.push(hasMap);
    }

    const schema: any = {
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
            streetAddress: LOCATIONS.main.address,
            addressCountry: 'AE',
            addressRegion: 'Abu Dhabi',
            addressLocality: 'Abu Dhabi',
        },
        sameAs: sameAsUrls,
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

    // Link Employees to Knowledge Graph if provided
    if (teamMembers.length > 0) {
        schema.employee = teamMembers.map(member => ({
            '@type': 'Person',
            name: member.name,
            jobTitle: member.position,
            ...(member.image && { image: member.image })
        }));
    }

    return schema;
}
