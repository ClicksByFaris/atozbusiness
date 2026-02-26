// Schema.org Service structured data
// For service pages

import { SEO_DEFAULTS } from '../seo';
import { BUSINESS_INFO } from '../constants';

export interface ServiceSchemaProps {
    name: string;
    description: string;
    slug: string;
    image?: string;
    category?: string;
    areaServed?: string;
    audienceType?: string; // For GEO/AEO (e.g., 'Expats', 'Entrepreneurs')
    serviceOutput?: string; // For GEO/AEO (e.g., 'Golden Visa', 'Trade License')
    offers?: {
        price?: string;
        priceCurrency?: string;
        priceRange?: string;
        availability?: string;
    };
    hasFAQ?: boolean; // Triggers subjectOf linkage
    hasHowTo?: boolean; // Triggers subjectOf linkage
}

export function generateServiceSchema(props: ServiceSchemaProps) {
    const {
        name,
        description,
        slug,
        image,
        category = 'Professional Service',
        areaServed = 'Abu Dhabi, UAE',
        audienceType = 'Individuals and Businesses',
        serviceOutput,
        offers,
        hasFAQ,
        hasHowTo,
    } = props;

    const schemaUrl = `${SEO_DEFAULTS.siteUrl}/services/${slug}`;

    const schema: any = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${schemaUrl}/#service`,
        name: name,
        description: description,
        url: schemaUrl,
        ...(image && {
            image: {
                '@type': 'ImageObject',
                url: image,
                '@id': `${schemaUrl}/#image`
            }
        }),
        // Link to the main organization directly via ID to build a connected Knowledge Graph
        provider: {
            '@id': `${SEO_DEFAULTS.siteUrl}/#organization`
        },
        serviceType: category,
        areaServed: {
            '@type': 'City',
            name: areaServed,
        },
        // AEO/GEO powerful property: Who is this for?
        audience: {
            '@type': 'Audience',
            audienceType: audienceType,
        },
        // AEO/GEO powerful property: What is the physical/digital result?
        ...(serviceOutput && {
            serviceOutput: {
                '@type': 'Thing',
                name: serviceOutput,
            }
        }),
        availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: schemaUrl,
            servicePhone: {
                '@type': 'ContactPoint',
                telephone: BUSINESS_INFO.phone,
                contactType: 'customer service',
            },
        },
        // Create an array for interconnected page entities (Knowledge Graph)
        subjectOf: []
    };

    // Add offer if price information provided
    if (offers) {
        schema.offers = {
            '@type': 'Offer',
            priceCurrency: offers.priceCurrency || 'AED',
            ...(offers.price && { price: offers.price }),
            availability: offers.availability || 'https://schema.org/InStock',
        };
    }

    // Prepare Knowledge Graph interlinkings
    if (hasFAQ) {
        schema.subjectOf.push({ '@id': `${schemaUrl}/#faq` });
    }
    if (hasHowTo) {
        schema.subjectOf.push({ '@id': `${schemaUrl}/#howto` });
    }

    // Clean up empty subjectOf array if nothing was added
    if (schema.subjectOf.length === 0) {
        delete schema.subjectOf;
    }

    return schema;
}

// For service listing page with multiple services
export function generateServiceListSchema(services: ServiceSchemaProps[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: services.map((service, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
                '@type': 'Service',
                name: service.name,
                description: service.description,
                url: `${SEO_DEFAULTS.siteUrl}/services/${service.slug}`,
            },
        })),
    };
}

// HowTo schema for service pages with steps
export interface HowToStep {
    name: string;
    text: string;
    image?: string;
}

export function generateHowToSchema(props: {
    name: string;
    description: string;
    slug: string;
    steps: HowToStep[];
    totalTime?: string;
}) {
    const { name, description, slug, steps, totalTime } = props;
    const schemaUrl = `${SEO_DEFAULTS.siteUrl}/services/${slug}`;

    return {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        '@id': `${schemaUrl}/#howto`,
        name: name,
        description: description,
        ...(totalTime && { totalTime: totalTime }), // Format: PT1H (1 hour)
        step: steps.map((step, index) => ({
            '@type': 'HowToStep',
            position: index + 1,
            name: step.name,
            text: step.text,
            ...(step.image && {
                image: {
                    '@type': 'ImageObject',
                    url: step.image,
                },
            }),
        })),
    };
}

// FAQ Schema for service pages
export interface FAQItem {
    question: string;
    answer: string;
}

export function generateFAQSchema(faqs: FAQItem[], slug?: string) {
    const baseId = slug ? `${SEO_DEFAULTS.siteUrl}/services/${slug}/#faq` : `${SEO_DEFAULTS.siteUrl}/#faq`;
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': baseId,
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

// Breadcrumb Schema for navigation
export interface BreadcrumbItem {
    name: string;
    url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

// Convenience function to generate service page breadcrumbs
export function generateServiceBreadcrumbs(serviceName: string, serviceSlug: string) {
    return generateBreadcrumbSchema([
        {
            name: 'Home',
            url: SEO_DEFAULTS.siteUrl,
        },
        {
            name: 'Services',
            url: `${SEO_DEFAULTS.siteUrl}/services`,
        },
        {
            name: serviceName,
            url: `${SEO_DEFAULTS.siteUrl}/services/${serviceSlug}`,
        },
    ]);
}
