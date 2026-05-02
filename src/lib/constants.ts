// Site-wide constants for AtoZ Business Services
// This file contains all business information used across the webs

export const BUSINESS_INFO = {
    name: 'A to Z Business - Expert Business Setup & PRO Services in Abu Dhabi',
    tagline: 'Professional Typing, Residency & Business Setup Services – The A to Z Solution.',
    phone: '056 533 1632',
    whatsapp: '+971 56 533 1632',
    email: 'contact@atozbusiness.ae',
    website: 'https://atozbusiness.ae',
} as const;

// ── Official business license & registration details ──────────────────────────
export const BUSINESS_LICENSE = {
    registeredName: 'A TO Z TYPING - SOLE PROPRIETORSHIP L.L.C.',
} as const;

export const BUSINESS_HOURS = {
    weekdays: 'Monday - Saturday: 8:00 AM - 9:00 PM',
    weekend: 'Sunday: Closed',
    detailed: [
        { days: 'Monday - Saturday', hours: '8:00 AM - 9:00 PM' },
        { days: 'Sunday', hours: 'Closed' },
    ],
} as const;

export const SOCIAL_MEDIA = {
    facebook: 'https://facebook.com/atozbusiness.ae',
    instagram: 'https://instagram.com/atozbusiness.ae',
    twitter: 'https://twitter.com/atozbusiness',
    linkedin: 'https://linkedin.com/atozbusiness',
} as const;

export const LOCATIONS = {
    main: {
        name: 'Khalidiya Branch',
        type: 'Branch',
        address: 'Mohammed Alhur Al Suwaidi St, opposite Khalidiya Mall',
        area: 'Khalidiya',
        city: 'Abu Dhabi',
        shortDescription: 'Our main office in Khalidiya, conveniently located opposite Khalidiya Mall',
        quickAddress: 'Khalidiya, Abu Dhabi',
        mapsLink: 'https://share.google/VvPcFWZSXuuE9FKGo',
        coordinates: {
            latitude: 24.47366030441661,
            longitude: 54.35221508650658,
        },
    },
    branch: {
        name: 'Al Zahiyah Branch',
        type: 'Branch',
        address: 'Al Zahiyah - E16 02',
        area: 'Al Zahiyah',
        city: 'Abu Dhabi',
        phone: '056 663 6476',
        shortDescription: 'Our city branch serving Al Zahiyah and surrounding areas',
        quickAddress: 'Al Zahiyah, Abu Dhabi',
        mapsLink: 'https://share.google/cO7solFD5WHNK58OD',
        coordinates: {
            latitude: 24.490320413455184,
            longitude: 54.384228054235486,
        },
    },
} as const;

export const FEATURED_SERVICES = [
    {
        name: 'Golden Visa Services',
        icon: 'Award',
        description: 'Complete assistance for UAE Golden Visa applications. Expert guidance through the entire process with guaranteed approval support.',
        slug: 'golden-visa-services',
    },
    {
        name: 'PRO Services',
        icon: 'Briefcase',
        description: 'Professional government relations services including license renewals, visa processing, and all official documentation requirements.',
        slug: 'pro-services',
    },
    {
        name: 'Family Visa Typing',
        icon: 'Users',
        description: 'Fast and accurate family visa typing services for sponsoring your loved ones to the UAE with complete documentation support.',
        slug: 'family-visa-typing',
    },
    {
        name: 'New Company Formation',
        icon: 'Building2',
        description: 'End-to-end business setup services including trade license, company registration, and all legal requirements for starting your UAE business.',
        slug: 'new-company-formation',
    },
    {
        name: 'TAMM Services',
        icon: 'Globe',
        description: 'Expert assistance with all TAMM platform services for Abu Dhabi government transactions, permits, and licenses.',
        slug: 'tamm-services',
    },
    {
        name: 'Certificate Attestation',
        icon: 'FileCheck',
        description: 'Complete document attestation services for educational certificates, marriage certificates, and all official documents from UAE and abroad.',
        slug: 'certificate-attestation',
    },
] as const;

export const WHY_CHOOSE_US = [
    {
        title: 'One-Stop Solution',
        description: 'From visa services to company formation, TAMM services to attestation - we handle all your government documentation needs under one roof.',
        icon: 'CheckCircle2',
    },
    {
        title: 'Expert Team',
        description: 'Our experienced professionals are well-versed in UAE government procedures, ensuring fast processing and accurate documentation every time.',
        icon: 'Users',
    },
    {
        title: 'Prime Location',
        description: 'Conveniently located opposite Khalidiya Mall in Abu Dhabi with easy access, parking facilities, and proximity to government departments.',
        icon: 'MapPin',
    },
] as const;

export const STATISTICS = {
    yearsInBusiness: '10+',
    clientsServed: '15,000+',
    successRate: '99%',
    servicesOffered: '20',
    officeLocations: '2',
} as const;

export const HOW_IT_WORKS = [
    {
        step: 1,
        title: 'Contact Us',
        description: 'Call 056 533 1632, WhatsApp, or visit our office in Khalidiya',
        icon: 'Phone',
    },
    {
        step: 2,
        title: 'Submit Documents',
        description: "Provide required documents - we'll guide you on exactly what you need",
        icon: 'FileText',
    },
    {
        step: 3,
        title: 'We Process',
        description: 'Our expert team handles all government procedures and typing work',
        icon: 'Settings',
    },
    {
        step: 4,
        title: 'Receive Results',
        description: 'Get your approved documents, visas, or licenses quickly and hassle-free',
        icon: 'CheckCircle',
    },
] as const;

export const FAQS = [
    {
        question: 'What are your business hours?',
        answer: "We're open Monday to Saturday from 8:00 AM to 9:00 PM. We are closed on Sundays.",
    },
    {
        question: 'Where is your office located?',
        answer: 'Our main office is located on Mohammed Alhur Al Suwaidi Street, opposite Khalidiya Mall in Khalidiya, Abu Dhabi.',
    },
    {
        question: 'Do you provide same-day service?',
        answer: 'Yes, we offer express services for urgent requirements. Contact us to check availability for your specific service.',
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept cash, credit/debit cards, and bank transfers for your convenience.',
    },
    {
        question: 'Can you help with Golden Visa applications?',
        answer: 'Absolutely! We provide complete assistance for Golden Visa applications with expert guidance and documentation support to ensure approval.',
    },
    {
        question: 'Do you offer services in multiple languages?',
        answer: 'Yes, our multilingual team can assist you in English, Arabic, Hindi, and Urdu.',
    },
] as const;

// Navigation links
export const NAV_LINKS = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Locations', href: '/locations' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
] as const;
