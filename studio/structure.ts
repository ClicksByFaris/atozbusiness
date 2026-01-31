import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
    S.list()
        .title('Website Content')
        .items([
            // Settings Group
            S.listItem()
                .title('Site Settings')
                .id('siteSettings')
                .child(
                    S.document()
                        .schemaType('siteSettings')
                        .documentId('siteSettings')
                        .title('Global Settings')
                ),
            S.divider(),

            // Business Info Group
            S.listItem()
                .title('Business Info')
                .child(
                    S.list()
                        .title('Business Info')
                        .items([
                            S.documentTypeListItem('service').title('Services'),
                            S.documentTypeListItem('location').title('Locations'),
                        ])
                ),
            S.divider(),

            // Blog & Content Group
            S.listItem()
                .title('Blog & Content')
                .child(
                    S.list()
                        .title('Blog & Content')
                        .items([
                            S.documentTypeListItem('post').title('Blog Posts'),
                            S.documentTypeListItem('category').title('Categories'),
                            S.documentTypeListItem('author').title('Authors'),
                        ])
                ),
            S.divider(),

            // Careers & Media
            S.listItem()
                .title('Careers & Media')
                .child(
                    S.list()
                        .title('Careers & Media')
                        .items([
                            S.documentTypeListItem('career').title('Job Postings'),
                            S.documentTypeListItem('gallery').title('Photo Galleries'),
                        ])
                ),

            // Filter out types that should not be visible in the root list
            ...S.documentTypeListItems().filter(
                (listItem) =>
                    !['siteSettings', 'service', 'location', 'post', 'category', 'author', 'career', 'gallery'].includes(
                        listItem.getId() || ''
                    )
            ),
        ]);
