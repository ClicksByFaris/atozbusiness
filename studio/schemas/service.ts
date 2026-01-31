import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'service',
    title: 'Service',
    type: 'document',
    groups: [
        { name: 'general', title: 'General Info' },
        { name: 'content', title: 'Service Details' },
        { name: 'seo', title: 'SEO & AI (GEO/AEO)' },
        { name: 'media', title: 'Media' },
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Service Name',
            type: 'string',
            group: 'general',
            validation: (Rule) => Rule.required(),
            description: 'e.g., Golden Visa Services',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            group: 'general',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'icon',
            title: 'Icon Name',
            type: 'string',
            group: 'general',
            description: 'Lucide icon name (e.g., Award, Briefcase)',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            group: 'general',
            options: {
                list: [
                    { title: 'Residency & Visa', value: 'Residency' },
                    { title: 'Business Setup', value: 'Business' },
                    { title: 'Documentation', value: 'Documentation' },
                    { title: 'General PRO Services', value: 'General' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'shortDescription',
            title: 'Short Description',
            type: 'text',
            rows: 3,
            group: 'content',
            description: 'Brief 1-2 sentence description for cards',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'fullDescription',
            title: 'Full Description',
            type: 'text',
            rows: 5,
            group: 'content',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'featured',
            title: 'Featured Service',
            type: 'boolean',
            group: 'general',
            initialValue: false,
        }),
        defineField({
            name: 'order',
            title: 'Order',
            type: 'number',
            group: 'general',
        }),

        // SEO / AEO / GEO Fields
        defineField({
            name: 'areaServed',
            title: 'Area Served',
            type: 'array',
            group: 'seo',
            of: [{ type: 'string' }],
            initialValue: ['Abu Dhabi', 'UAE Wide'],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'serviceType',
            title: 'Service Type',
            type: 'string',
            group: 'seo',
            options: {
                list: [
                    { title: 'Government Service', value: 'GovernmentService' },
                    { title: 'Visa Processing', value: 'VisaProcessing' },
                    { title: 'Professional Service', value: 'ProfessionalService' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'topicUrl',
            title: 'Topic URL',
            type: 'url',
            group: 'seo',
            description: 'Link to official government page (u.ae) or Wikipedia',
        }),
        defineField({
            name: 'keyTakeaway',
            title: 'Key Takeaway',
            type: 'text',
            rows: 2,
            group: 'seo',
            description: '2-sentence summary for AI snippets (max 250 chars)',
            validation: (Rule) => Rule.required().max(250),
        }),
        defineField({
            name: 'estimatedTime',
            title: 'Estimated Processing Time',
            type: 'string',
            group: 'seo',
            description: 'e.g., 3-5 Working Days',
            validation: (Rule) => Rule.required(),
        }),

        // Media
        defineField({
            name: 'serviceImage',
            title: 'Service Image',
            type: 'image',
            group: 'media',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'altText',
                    title: 'Alt Text',
                    type: 'string',
                    validation: (Rule) => Rule.required(),
                },
            ],
            validation: (Rule) => Rule.required(),
        }),

        // Content Arrays
        defineField({
            name: 'features',
            title: 'Features/Benefits',
            type: 'array',
            group: 'content',
            of: [{ type: 'string' }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'process',
            title: 'Process Steps',
            type: 'array',
            group: 'content',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'stepNumber', type: 'number', title: 'Step Number' },
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'description', type: 'text', title: 'Description' },
                    ],
                },
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'documents',
            title: 'Required Documents',
            type: 'array',
            group: 'content',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'name', type: 'string', title: 'Document Name' },
                        { name: 'description', type: 'string', title: 'Description' },
                        { name: 'required', type: 'boolean', title: 'Is Mandatory?', initialValue: true },
                    ],
                },
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'faqs',
            title: 'FAQs',
            type: 'array',
            group: 'content',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'question', type: 'string', title: 'Question' },
                        { name: 'answer', type: 'text', title: 'Answer' },
                    ],
                },
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'relatedServices',
            title: 'Related Services',
            type: 'array',
            group: 'content',
            of: [{ type: 'reference', to: [{ type: 'service' }] }],
        }),
    ],
});
