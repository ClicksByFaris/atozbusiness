// Schema.org FAQPage structured data
// For FAQ sections and pages

import { SEO_DEFAULTS } from '../seo';

export interface FAQItem {
    question: string;
    answer: string;
}

export function generateFAQPageSchema(faqs: readonly FAQItem[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

// For a single FAQ section on a page (not full FAQPage)
export function generateQASchema(question: string, answer: string) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Question',
        name: question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: answer,
        },
    };
}
