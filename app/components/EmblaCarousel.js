// app/components/EmblaCarousel.js

'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import EmblaCarouselThumbnail from './EmblaCarouselThumbnail';

const EmblaCarousel = ({ slides }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [thumbsRef, thumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const onSelect = useCallback(() => {
    if (!emblaApi || !thumbsApi) return;
    const index = emblaApi.selectedScrollSnap();
    setSelectedIndex(index);
    thumbsApi.scrollTo(index);
  }, [emblaApi, thumbsApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <div className="">
      {/* Main Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div className="flex-[0_0_100%]" key={index}>
              <img
                className="w-full h-auto object-contain"
                src={slide}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-4">
        <div className="overflow-hidden" ref={thumbsRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <EmblaCarouselThumbnail
                key={index}
                selected={index === selectedIndex}
                onClick={() => onThumbClick(index)}
                imgSrc={slide}
                alt={`Thumbnail ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
