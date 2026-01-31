import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Category Name',
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
            name: 'color',
            title: 'Color Code',
            type: 'string',
            description: 'e.g., #3B82F6',
        }),
        defineField({
            name: 'icon',
            title: 'Icon Name',
            type: 'string',
        }),
        defineField({
            name: 'order',
            title: 'Sort Order',
            type: 'number',
        }),
    ],
});
