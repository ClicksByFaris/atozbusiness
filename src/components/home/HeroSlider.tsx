import { useState, useEffect } from 'react';
import { urlFor } from '../../lib/sanity';

interface HeroSliderProps {
    images: any[];
}

export default function HeroSlider({ images = [] }: HeroSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length <= 1) return;

        const intervalId = setInterval(() => {
            setPrevIndex(currentIndex);
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [currentIndex, images.length]);

    if (!images || images.length === 0) {
        return (
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-800" />
        );
    }

    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-primary-900">

            {images.map((img, index) => {
                let zIndex = 'z-0';
                let opacity = 'opacity-0';

                if (index === currentIndex) {
                    zIndex = 'z-20';
                    opacity = 'opacity-100';
                } else if (index === prevIndex) {
                    zIndex = 'z-10';
                    opacity = 'opacity-100';
                }

                const isDeepBackground = index !== currentIndex && index !== prevIndex;
                // Optimization: Unmount or hide deeply background images to save memory/gpu if needed, 
                // but for smooth transitions keeping them is safer. 
                // However, if we have many images, we might want to set display: none on isDeepBackground.

                return (
                    <div
                        key={index}
                        className={`
              absolute inset-0 transition-opacity duration-[1500ms] ease-in-out
              ${zIndex}
              ${isDeepBackground ? 'opacity-0' : opacity}
            `}
                        aria-hidden={index !== currentIndex}
                    >
                        <div
                            className={`w-full h-full bg-cover bg-center ${index === currentIndex || index === prevIndex ? 'animate-ken-burns' : ''}`}
                            style={{
                                backgroundImage: `url(${urlFor(img).width(1920).quality(90).format('webp').url()})`,
                            }}
                        />
                    </div>
                );
            })}

            {/* Overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary-900/10 via-primary-900/30 to-primary-900/80 z-30 pointer-events-none" />
        </div>
    );
}
