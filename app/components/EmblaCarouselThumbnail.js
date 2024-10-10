// app/components/EmblaCarouselThumbnail.js

'use client';

import React from 'react';

const EmblaCarouselThumbnail = ({ selected, onClick, imgSrc, alt }) => {
  return (
    <button
      className={`flex-[0_0_auto] w-16 h-16 mr-2 ${
        selected ? 'opacity-100' : 'opacity-50'
      }`}
      type="button"
      onClick={onClick}
    >
      <img
        className="w-full h-full object-cover"
        src={imgSrc}
        alt={alt}
      />
    </button>
  );
};

export default EmblaCarouselThumbnail;
