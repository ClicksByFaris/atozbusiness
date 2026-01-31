import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'gallery',
    title: 'Gallery',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Gallery/Album Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Office', value: 'Office' },
                    { title: 'Events', value: 'Events' },
                    { title: 'Team', value: 'Team' },
                    { title: 'Other', value: 'Other' },
                ],
            },
        }),
        defineField({
            name: 'photos',
            title: 'Photos',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'image', type: 'image', title: 'Photo', options: { hotspot: true }, validation: (Rule) => Rule.required() },
                        { name: 'caption', type: 'string', title: 'Caption' },
                        { name: 'alt', type: 'string', title: 'Alt Text', validation: (Rule) => Rule.required() },
                    ],
                },
            ],
            validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
            name: 'featuredImage',
            title: 'Featured Image (Album Cover)',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'order',
            title: 'Sort Order',
            type: 'number',
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
        }),
    ],
});
