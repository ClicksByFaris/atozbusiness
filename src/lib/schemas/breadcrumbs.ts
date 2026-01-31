// Schema.org BreadcrumbList structured data
// For navigation breadcrumbs

import { SEO_DEFAULTS } from '../seo';

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
            item: item.url.startsWith('http')
                ? item.url
                : `${SEO_DEFAULTS.siteUrl}${item.url}`,
        })),
    };
}

// Helper to generate breadcrumbs from path
export function generateBreadcrumbsFromPath(path: string, pageTitle: string): BreadcrumbItem[] {
    const breadcrumbs: BreadcrumbItem[] = [
        { name: 'Home', url: '/' },
    ];

    const pathParts = path.split('/').filter(Boolean);

    pathParts.forEach((part, index) => {
        const isLast = index === pathParts.length - 1;
        const url = '/' + pathParts.slice(0, index + 1).join('/');

        const name = isLast
            ? pageTitle
            : part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' ');

        breadcrumbs.push({ name, url });
    });

    return breadcrumbs;
}
