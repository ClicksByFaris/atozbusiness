// SEO constants and defaults
// Designed to work with Sanity CMS in the future

import { BUSINESS_INFO, LOCATIONS } from './constants';

export const SEO_DEFAULTS = {
    siteName: 'A to Z Business',
    siteUrl: 'https://atozbusiness.ae',
    defaultTitle: 'A to Z Business | Typing & PRO Services Abu Dhabi',
    defaultDescription:
        'Professional typing, PRO services, visa processing, and company formation in Abu Dhabi. Expert assistance for all your government documentation needs.',
    defaultImage: '/og-image.jpg',
    twitterHandle: '@atozbusiness',
    locale: 'en_AE',
    alternateLocales: ['ar_AE'], // Will add Arabic later
} as const;

// Target keywords for the website
export const TARGET_KEYWORDS = {
    primary: [
        'typing center abu dhabi',
        'company formation abu dhabi',
        'visa typing khalidiya',
        'typing center khalidiya mall',
        'family visa typing abu dhabi',
    ],
    secondary: [
        'PRO services abu dhabi',
        'golden visa services abu dhabi',
        'TAMM services abu dhabi',
        'certificate attestation abu dhabi',
        'business setup abu dhabi',
        'trade license abu dhabi',
        'visa services khalidiya',
        'government typing abu dhabi',
        'typing center al zahiyah',
        'document attestation uae',
    ],
    local: [
        'typing center near khalidiya mall',
        'typing services khalidiya',
        'PRO services khalidiya',
        'visa typing near me',
        'typing center near me ',
    ],
} as const;

// Voice search / Question-based keywords (AEO)
export const VOICE_SEARCH_KEYWORDS = [
    'where is the best typing center in khalidiya',
    'how much does golden visa cost in abu dhabi',
    'what documents do i need for family visa',
    'how to form a company in abu dhabi',
    'where to get documents attested in abu dhabi',
    'best PRO services in khalidiya',
    'typing center near khalidiya mall',
    'how long does visa processing take',
] as const;

// Page-specific SEO data (will come from Sanity later)
export const PAGE_SEO = {
    home: {
        title: 'A to Z Business | Typing & PRO Services Abu Dhabi',
        description:
            'Professional typing, PRO services, visa processing & company formation in Abu Dhabi. 13+ hours daily service in Khalidiya & Al Zahiyah. Call +971-50-3489891',
        keywords: [
            ...TARGET_KEYWORDS.primary,
            'typing center',
            'PRO services',
            'abu dhabi',
            'khalidiya',
        ],
    },
    services: {
        title: 'Our Services | A to Z Business Abu Dhabi',
        description:
            'Complete range of typing, PRO, visa & business setup services in Abu Dhabi. Golden visa, family visa, company formation, TAMM services & more.',
        keywords: [...TARGET_KEYWORDS.secondary, 'services', 'abu dhabi'],
    },
    locations: {
        title: 'Our Locations | A to Z Business',
        description:
            'Visit our offices in Khalidiya (opposite Khalidiya Mall) and Al Zahiyah. Open Mon-Sat 8AM-9PM. Expert typing and PRO services at both locations.',
        keywords: [...TARGET_KEYWORDS.local, 'office location', 'address'],
    },
    contact: {
        title: 'Contact Us | A to Z Business',
        description:
            'Contact A to Z Business for typing & PRO services. Call +971-50-3489891, WhatsApp us, or visit our Khalidiya office opposite Khalidiya Mall.',
        keywords: ['contact', 'phone', 'whatsapp', 'email', 'address', 'abu dhabi'],
    },
} as const;

// Social media Open Graph defaults
export const SOCIAL_DEFAULTS = {
    ogType: 'website',
    ogLocale: 'en_AE',
    twitterCard: 'summary_large_image',
    twitterSite: '@atozbusiness',
} as const;

// Helper function to generate full title
export function generateTitle(pageTitle?: string, includesSiteName = false): string {
    if (!pageTitle) return SEO_DEFAULTS.defaultTitle;
    if (includesSiteName) return pageTitle;
    return `${pageTitle} | ${SEO_DEFAULTS.siteName}`;
}

// Helper function to generate canonical URL
export function generateCanonicalUrl(path: string): string {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${SEO_DEFAULTS.siteUrl}${cleanPath}`;
}

// Helper to get keywords as string
export function getKeywordsString(keywords: string[] | readonly string[]): string {
    return keywords.join(', ');
}
