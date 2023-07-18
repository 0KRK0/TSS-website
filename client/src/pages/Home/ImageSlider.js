import React, { useState, useEffect, useCallback } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPrevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + images.length - 1) % images.length);
  }, [images.length]);

  const startTimer = useCallback(() => {
    setTimer(setInterval(goToNextSlide, 5000));
  }, [goToNextSlide]);

  const resetTimer = useCallback(() => {
    clearInterval(timer);
    startTimer();
  }, [timer, startTimer]);

  const togglePause = () => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
  };

  const handleNextSlide = () => {
    goToNextSlide();
    if (isPaused) {
      setIsPaused(false);
    }
    resetTimer();
  };
  const handlePrevSlide = () => {
    goToPrevSlide();
    if (isPaused) {
      setIsPaused(false);
    }
    resetTimer();
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  }
  const handleMouseLeave = () => {
    setIsPaused(false);
  }

  useEffect(() => {
    if (!isPaused) {
      startTimer();
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isPaused, startTimer]);

  return (
    <div className="image-slider" >
      <div className="slide">
        <div className='slide-overlay'></div>
        <img className='prev-image' onClick={togglePause} src={images[(currentIndex + images.length - 1) % images.length]} alt={`Slide ${currentIndex - 1}`} />
        <img className="current-image" onClick={togglePause} src={images[currentIndex]} alt={`Slide ${currentIndex}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
        <img className='next-image' onClick={togglePause} src={images[(currentIndex + 1) % images.length]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button className="prev-button" onClick={handlePrevSlide} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
        </svg></span>
      </button>
      <button className="pause-button" onClick={togglePause}>
        {isPaused ? <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-pause-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z" />
        </svg>}
      </button>
      <button className="next-button" onClick={handleNextSlide} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
        </svg></span>
      </button>
    </div>
  );
};

export default ImageSlider;
