import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'career',
    title: 'Career',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Job Title',
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
            title: 'Job Description',
            type: 'array',
            of: [{ type: 'block' }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'reference',
            to: [{ type: 'location' }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'employmentType',
            title: 'Employment Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Full-time', value: 'Full-time' },
                    { title: 'Part-time', value: 'Part-time' },
                    { title: 'Contract', value: 'Contract' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'department',
            title: 'Department',
            type: 'string',
        }),
        defineField({
            name: 'requirements',
            title: 'Requirements',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'benefits',
            title: 'Benefits',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'salary',
            title: 'Salary Range',
            type: 'string',
        }),
        defineField({
            name: 'experience',
            title: 'Required Experience',
            type: 'string',
        }),
        defineField({
            name: 'postedAt',
            title: 'Posted At',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'expiresAt',
            title: 'Expires At',
            type: 'datetime',
        }),
        defineField({
            name: 'isActive',
            title: 'Is Active',
            type: 'boolean',
            initialValue: true,
            validation: (Rule) => Rule.required(),
        }),
    ],
});
