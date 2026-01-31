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
