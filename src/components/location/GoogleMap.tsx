import React, { useState, useEffect } from 'react';

interface GoogleMapProps {
  embedUrl?: string;
  className?: string;
}

export default function GoogleMap({ embedUrl, className = '' }: GoogleMapProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [finalUrl, setFinalUrl] = useState<string>('');

  useEffect(() => {
    if (!embedUrl) return;

    // Extract URL if full iframe code is pasted
    let extractedUrl = embedUrl;
    if (embedUrl.trim().startsWith('<iframe')) {
      const match = embedUrl.match(/src="([^"]+)"/);
      if (match && match[1]) {
        extractedUrl = match[1];
      }
    }

    setFinalUrl(extractedUrl);

    // Delay loading to ensure component is mounted and visible
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [embedUrl]);

  if (!embedUrl) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-neutral-100 text-neutral-400 rounded-3xl ${className}`}
      >
        <p>Map not available</p>
      </div>
    );
  }

  return (
    <div
      className={`relative h-full w-full overflow-hidden rounded-3xl shadow-soft border border-neutral-100 ${className}`}
    >
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full bg-neutral-100 text-neutral-400 animate-pulse">
          <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-neutral-200">
            <div className="w-6 h-6 text-neutral-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
          </div>
          <span className="text-sm font-medium">Loading Map...</span>
        </div>
      )}
      {isLoaded && finalUrl && (
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
      )}
    </div>
  );
}
