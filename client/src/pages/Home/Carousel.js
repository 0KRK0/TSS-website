import React from 'react';
import ImageSlider from './ImageSlider';
import '../../styles/Carousel.css';

const Carousel = () => {
  const images = [
    '../../../1.jpg',
    '../../../2.jpg',
    '../../../3.jpg',
    '../../../4.jpg',
    '../../../5.jpg',
  ];

  return (
    <div>
      <ImageSlider images={images} />
    </div>
  );
};

export default Carousel;
