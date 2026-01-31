// Schema.org Article structured data
// For blog posts and articles

import { SEO_DEFAULTS } from '../seo';
import { BUSINESS_INFO } from '../constants';

export interface ArticleSchemaProps {
    title: string;
    description: string;
    slug: string;
    author?: string;
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
        author = BUSINESS_INFO.name,
        publishDate,
        modifiedDate,
        image,
        keywords = [],
    } = props;

    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        '@id': `${SEO_DEFAULTS.siteUrl}/blog/${slug}#article`,
        headline: title,
        description: description,
        image: image || SEO_DEFAULTS.defaultImage,
        datePublished: publishDate,
        dateModified: modifiedDate || publishDate,
        author: {
            '@type': 'Organization',
            name: author,
            url: SEO_DEFAULTS.siteUrl,
        },
        publisher: {
            '@type': 'Organization',
            name: BUSINESS_INFO.name,
            logo: {
                '@type': 'ImageObject',
                url: `${SEO_DEFAULTS.siteUrl}/logo.png`,
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${SEO_DEFAULTS.siteUrl}/blog/${slug}`,
        },
        ...(keywords.length > 0 && { keywords: keywords.join(', ') }),
    };
}

// BlogPosting schema (similar to Article but for blog posts)
export function generateBlogPostingSchema(props: ArticleSchemaProps) {
    const articleSchema = generateArticleSchema(props);
    return {
        ...articleSchema,
        '@type': 'BlogPosting',
    };
}
