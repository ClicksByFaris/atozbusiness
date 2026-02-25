import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';

// Sanity client configuration
export const sanityClient = createClient({
    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'xyzxsyqr',
    dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-01-01',
    useCdn: true, // Use CDN for faster response times
});

// Image URL builder
const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
    return builder.image(source);
}

// Helper function to get image URL with transformations
export function getImageUrl(
    source: SanityImageSource,
    width?: number,
    height?: number
): string {
    let urlBuilder = builder.image(source).auto('format').fit('max');

    if (width) {
        urlBuilder = urlBuilder.width(width);
    }

    if (height) {
        urlBuilder = urlBuilder.height(height);
    }

    return urlBuilder.url();
}

// Blog Queries
export async function getAllPosts() {
    return await sanityClient.fetch(`*[_type == "post" && isPublished == true] | order(publishedAt desc) {
        ...,
        author->,
        category->
    }`);
}

export async function getPostBySlug(slug: string) {
    return await sanityClient.fetch(`*[_type == "post" && slug.current == $slug][0] {
        ...,
        author->,
        category->,
        relatedLocations[]->
    }`, { slug });
}

export async function getAllCategories() {
    return await sanityClient.fetch(`*[_type == "category"] | order(order asc)`);
}

export async function getLatestPosts(limit: number = 3) {
    return await sanityClient.fetch(`*[_type == "post" && isPublished == true] | order(publishedAt desc)[0...$limit] {
        ...,
        author->,
        category->
    }`, { limit });
}

export async function getGalleryItems() {
    const query = `*[_type == "gallery"] | order(order asc) {
        _id,
        title,
        category,
        photos[] {
            "key": _key,
            image {
                asset->{
                    ...,
                    metadata
                }
            },
            caption,
            alt
        }
    }`;
    const albums = await sanityClient.fetch(query);

    // Flatten logic
    const galleryItems: any[] = [];
    albums.forEach((album: any) => {
        if (album.photos) {
            album.photos.forEach((photo: any) => {
                galleryItems.push({
                    _id: `${album._id}-${photo.key}`,
                    title: photo.caption || album.title,
                    category: album.category || 'Other',
                    image: photo.image,
                    description: photo.alt || '',
                    // We can add more fields if needed
                });
            });
        }
    });

    return galleryItems;
}

export async function getHomePageData() {
    return await sanityClient.fetch(`*[_type == "home"][0] {
        ...,
        hero {
            ...,
            images[] {
                ...,
                asset->
            }
        }
    }`);
}

export async function getNavigationServices() {
    return await sanityClient.fetch(`*[_type == "service"] | order(order asc) {
        title,
        "slug": slug.current,
        category,
        shortDescription
    }`);
}
