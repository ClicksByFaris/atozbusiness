import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'location',
    title: 'Location',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Location Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
            description: 'e.g., Khalidiya Office',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'displayName',
            title: 'Display Name',
            type: 'string',
            description: 'Alternative name for display (optional)',
        }),
        defineField({
            name: 'address',
            title: 'Address',
            type: 'object',
            fields: [
                { name: 'street', type: 'string', title: 'Street Address', validation: (Rule) => Rule.required() },
                { name: 'area', type: 'string', title: 'Area/District', validation: (Rule) => Rule.required() },
                { name: 'city', type: 'string', title: 'City', initialValue: 'Abu Dhabi', validation: (Rule) => Rule.required() },
                { name: 'emirate', type: 'string', title: 'Emirate', initialValue: 'Abu Dhabi', validation: (Rule) => Rule.required() },
                { name: 'country', type: 'string', title: 'Country', initialValue: 'United Arab Emirates', validation: (Rule) => Rule.required() },
                { name: 'poBox', type: 'string', title: 'P.O. Box' },
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'coordinates',
            title: 'Coordinates',
            type: 'object',
            fields: [
                { name: 'lat', type: 'number', title: 'Latitude', validation: (Rule) => Rule.required() },
                { name: 'lng', type: 'number', title: 'Longitude', validation: (Rule) => Rule.required() },
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'contact',
            title: 'Contact Information',
            type: 'object',
            fields: [
                { name: 'phone', type: 'string', title: 'Phone Number', validation: (Rule) => Rule.required() },
                { name: 'whatsapp', type: 'string', title: 'WhatsApp Number' },
                { name: 'email', type: 'string', title: 'Email Address', validation: (Rule) => Rule.required() },
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'hours',
            title: 'Opening Hours',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'day', type: 'string', title: 'Day of Week' },
                        { name: 'open', type: 'string', title: 'Opening Time (e.g., 09:00)' },
                        { name: 'close', type: 'string', title: 'Closing Time (e.g., 18:00)' },
                        { name: 'closed', type: 'boolean', title: 'Is Closed?', initialValue: false },
                    ],
                },
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'info',
            title: 'Additional Information',
            type: 'object',
            fields: [
                { name: 'parking', type: 'text', title: 'Parking Info' },
                { name: 'landmarks', type: 'array', of: [{ type: 'string' }], title: 'Nearby Landmarks' },
                { name: 'publicTransport', type: 'text', title: 'Public Transport' },
                { name: 'directions', type: 'text', title: 'Driving Directions' },
            ],
        }),
        defineField({
            name: 'media',
            title: 'Media',
            type: 'object',
            fields: [
                { name: 'featuredImage', type: 'image', title: 'Main Office Photo', options: { hotspot: true } },
                { name: 'gallery', type: 'array', of: [{ type: 'image', options: { hotspot: true } }], title: 'Office Gallery' },
            ],
        }),
        defineField({
            name: 'isPrimary',
            title: 'Main Office',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'isActive',
            title: 'Operational',
            type: 'boolean',
            initialValue: true,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'order',
            title: 'Sort Order',
            type: 'number',
        }),
    ],
});
