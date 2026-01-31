import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Author Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
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
            name: 'role',
            title: 'Role',
            type: 'string',
            description: 'Job title/role (e.g., Managing Director)',
        }),
        defineField({
            name: 'bio',
            title: 'Biography',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'photo',
            title: 'Profile Photo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
        }),
        defineField({
            name: 'social',
            title: 'Social Media',
            type: 'object',
            fields: [
                { name: 'twitter', type: 'url', title: 'Twitter' },
                { name: 'linkedin', type: 'url', title: 'LinkedIn' },
                { name: 'website', type: 'url', title: 'Website' },
            ],
        }),
    ],
});
