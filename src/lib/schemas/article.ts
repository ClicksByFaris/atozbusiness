// Schema.org Article structured data
// For blog posts and articles

import { SEO_DEFAULTS } from '../seo';
import { BUSINESS_INFO } from '../constants';

export interface AuthorSchemaProps {
    name: string;
    slug?: string;
    image?: string;
}

export interface ArticleSchemaProps {
    title: string;
    description: string;
    slug: string;
    author?: AuthorSchemaProps;
    publishDate: string;
    modifiedDate?: string;
    image?: string;
    keywords?: string[];
}

export function generateArticleSchema(props: ArticleSchemaProps) {
    const {
        title,
        description,
        slug,
        author,
        publishDate,
        modifiedDate,
        image,
        keywords = [],
    } = props;

    const pageUrl = `${SEO_DEFAULTS.siteUrl}/blog/${slug}`;

    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        '@id': `${pageUrl}/#article`,
        headline: title,
        description: description,
        image: image ? {
            '@type': 'ImageObject',
            url: image,
            '@id': `${pageUrl}/#image`
        } : SEO_DEFAULTS.defaultImage,
        datePublished: publishDate,
        dateModified: modifiedDate || publishDate,
        author: author ? {
            '@type': 'Person',
            name: author.name,
            ...(author.slug && { '@id': `${SEO_DEFAULTS.siteUrl}/author/${author.slug}/#person` }),
            ...(author.image && { image: author.image }),
        } : {
            '@type': 'Organization',
            '@id': `${SEO_DEFAULTS.siteUrl}/#organization`,
            name: BUSINESS_INFO.name,
        },
        publisher: {
            // Direct Knowledge Graph link to the homepage's Organization schema
            '@id': `${SEO_DEFAULTS.siteUrl}/#organization`
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': pageUrl,
        },
        ...(keywords.length > 0 && { keywords: keywords.join(', ') }),
    };
}

// BlogPosting schema
export function generateBlogPostingSchema(props: ArticleSchemaProps) {
    const articleSchema = generateArticleSchema(props);
    return {
        ...articleSchema,
        '@type': 'BlogPosting',
    };
}
