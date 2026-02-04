import { useState, useEffect } from 'react';
import { urlFor } from '../../lib/sanity';

interface HeroSliderProps {
    images: any[];
}

export default function HeroSlider({ images = [] }: HeroSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length <= 1) return;
        const intervalId = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, [images.length]);

    if (!images || images.length === 0) return null;

    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-primary-900">
            {images.map((img, index) => {
                const isCurrent = index === currentIndex;

                return (
                    <div
                        key={index}
                        className={`
                            absolute inset-0 transition-opacity duration-[1500ms] ease-in-out
                            ${isCurrent ? 'opacity-100 z-20' : 'opacity-0 z-10'}
                            will-change-[opacity,transform]
                        `}
                        aria-hidden={!isCurrent}
                    >
                        <div className={`relative w-full h-full ${isCurrent ? 'animate-ken-burns' : ''}`}>
                            {/* Astro Fix: Use standard <img> with Sanity CDN Optimization */}
                            <img
                                src={urlFor(img).width(1920).quality(90).format('webp').url()}
                                alt="Hero Background"
                                className="w-full h-full object-cover object-center"
                                loading={index === 0 ? "eager" : "lazy"} // LCP Trick
                                decoding="async"
                            />
                        </div>
                    </div>
                );
            })}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary-900/10 via-primary-900/30 to-primary-900/80 z-30 pointer-events-none" />
        </div>
    );
}