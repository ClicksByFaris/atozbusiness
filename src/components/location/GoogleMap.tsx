import React from 'react';

interface GoogleMapProps {
    embedUrl?: string;
    className?: string;
}

export default function GoogleMap({ embedUrl, className = '' }: GoogleMapProps) {
    if (!embedUrl) {
        return (
            <div className={`flex h-full w-full items-center justify-center bg-neutral-100 text-neutral-400 rounded-3xl ${className}`}>
                <p>Map not available</p>
            </div>
        );
    }

    // Extract URL if full iframe code is pasted
    let finalUrl = embedUrl;
    if (embedUrl.trim().startsWith('<iframe')) {
        const match = embedUrl.match(/src="([^"]+)"/);
        if (match && match[1]) {
            finalUrl = match[1];
        }
    }

    return (
        <div className={`relative h-full w-full overflow-hidden rounded-3xl shadow-soft border border-neutral-100 ${className}`}>
            <iframe
                src={finalUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                title="Location Map"
            ></iframe>
        </div>
    );
}
