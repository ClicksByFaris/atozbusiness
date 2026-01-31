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
    provider?: string;
    areaServed?: string;
    offers?: {
        price?: string;
        priceCurrency?: string;
        priceRange?: string;
        availability?: string;
    };
}

export function generateServiceSchema(props: ServiceSchemaProps) {
    const {
        name,
        description,
        slug,
        image,
        category = 'Professional Service',
        provider = BUSINESS_INFO.name,
        areaServed = 'Abu Dhabi, UAE',
        offers,
    } = props;

    const schema: any = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${SEO_DEFAULTS.siteUrl}/services/${slug}#service`,
        name: name,
        description: description,
        ...(image && {
            image: {
                '@type': 'ImageObject',
                url: image
            }
        }),
        provider: {
            '@type': 'LocalBusiness',
            '@id': `${SEO_DEFAULTS.siteUrl}/#organization`,
            name: provider,
            telephone: BUSINESS_INFO.phone,
            email: BUSINESS_INFO.email,
        },
        serviceType: category,
        areaServed: {
            '@type': 'City',
            name: areaServed,
        },
        availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: `${SEO_DEFAULTS.siteUrl}/services/${slug}`,
            servicePhone: {
                '@type': 'ContactPoint',
                telephone: BUSINESS_INFO.phone,
                contactType: 'customer service',
            },
        },
    };

    // Add offer if price information provided
    if (offers) {
        schema.offers = {
            '@type': 'Offer',
            priceCurrency: offers.priceCurrency || 'AED',
            ...(offers.price && { price: offers.price }),
            ...(offers.priceRange && { priceRange: offers.priceRange }),
            availability: offers.availability || 'https://schema.org/InStock',
        };
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

    return {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
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

export function generateFAQSchema(faqs: FAQItem[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
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
