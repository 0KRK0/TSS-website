import React, { useState, useEffect, useCallback } from 'react';
import { HashLink } from 'react-router-hash-link';

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
  const getCurrentImageText = () => {
    switch (currentIndex) {
      case 0:
        return {
          title: 'Services',
          description: 'Innovation on Display: Our Array of Services',
          link: '/#services'
        };
      case 1:
        return {
          title: 'About Us',
          description: 'we specialize in identifying, recruiting, and onboarding top-notch professionals who possess the skills, knowledge, and experience to drive your business forward.',
          link: '/about'
        };
      case 2:
        return {
          title: 'Get Hired',
          description: 'Getting hired is not just about qualification  it is about showcasing your unique value and how you can make a difference.Get started with our wide range of career options',
          link: '/careers'
        };
      case 3:
        return {
          title: 'Collab',
          description: 'Collaboration is the key that unlocks the door to success. Together, we achieve more than we ever could alone',
          link: '/'
        };
      case 4:
        return {
          title: 'Careers',
          description: 'Explore other exciting opportunities and positions in our organization.',
          link: '/#careers'
        };
      default:
        return {
          title: '',
          description: ''
        };
    }
  };

  return (
    <div className="image-slider" id='carousel'>
      <div className="slide">
        <div className='slide-overlay'></div>
        <img className='prev-image' onClick={togglePause} src={images[(currentIndex + images.length - 1) % images.length]} alt={`Slide ${currentIndex - 1}`} />
        <img className="current-image" onClick={togglePause} src={images[currentIndex]} alt={`Slide ${currentIndex}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <div className="image-text" onClick={togglePause} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h3>{getCurrentImageText().title}</h3>
          <p>{getCurrentImageText().description}</p>
          <HashLink className='link' smooth to={getCurrentImageText().link}>
            <button>Know more<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
            </svg></button>
          </HashLink>
        </div>
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
    </div >
  );
};

export default ImageSlider;
