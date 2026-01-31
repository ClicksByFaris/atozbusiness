import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    // Singletons don't need these but good for metadata
    groups: [
        { name: 'general', title: 'General' },
        { name: 'contact', title: 'Contact' },
        { name: 'social', title: 'Social' },
        { name: 'seo', title: 'SEO' },
    ],
    fields: [
        defineField({
            name: 'siteTitle',
            title: 'Site Title',
            type: 'string',
            group: 'general',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'siteDescription',
            title: 'Site Description',
            type: 'text',
            rows: 3,
            group: 'general',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'logo',
            title: 'Site Logo',
            type: 'image',
            group: 'general',
            options: { hotspot: true },
        }),
        defineField({
            name: 'favicon',
            title: 'Favicon',
            type: 'image',
            group: 'general',
        }),
        defineField({
            name: 'contact',
            title: 'Global Contact Info',
            type: 'object',
            group: 'contact',
            fields: [
                { name: 'phone', type: 'string', title: 'Phone', validation: (Rule) => Rule.required() },
                { name: 'whatsapp', type: 'string', title: 'WhatsApp', validation: (Rule) => Rule.required() },
                { name: 'email', type: 'string', title: 'Email', validation: (Rule) => Rule.required() },
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'social',
            title: 'Social Media Links',
            type: 'object',
            group: 'social',
            fields: [
                { name: 'facebook', type: 'url', title: 'Facebook' },
                { name: 'instagram', type: 'url', title: 'Instagram' },
                { name: 'twitter', type: 'url', title: 'Twitter' },
                { name: 'linkedin', type: 'url', title: 'LinkedIn' },
                { name: 'youtube', type: 'url', title: 'YouTube' },
            ],
        }),
        defineField({
            name: 'hours',
            title: 'Default Business Hours',
            type: 'object',
            fields: [
                { name: 'weekdays', type: 'string', title: 'Weekdays' },
                { name: 'weekend', type: 'string', title: 'Weekend' },
            ],
        }),
        defineField({
            name: 'seo',
            title: 'Default SEO Settings',
            type: 'object',
            group: 'seo',
            fields: [
                { name: 'defaultImage', type: 'image', title: 'Default OG Image' },
                { name: 'keywords', type: 'array', of: [{ type: 'string' }], title: 'Site-wide Keywords' },
            ],
        }),
    ],
});
