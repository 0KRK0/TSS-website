import React, { useState } from 'react';
import frontendImg from '../../images/frontend.jpg';
import backendImg from '../../images/backend.jpg';
import fullstackImg from '../../images/fullstack.jpg';
import uiuxImg from '../../images/uiux.png';
import Seemore from '../../images/Seemore.png';
import '../../styles/Career.css';

const Careers = () => {
  const [selectedCareer, setSelectedCareer] = useState('Front-end Development');

  const removeDefault = () => {
    setSelectedCareer('');
  };

  const regainDefault = () => {
    setSelectedCareer('Front-end Development');
  };

  const getJobImage = (job) => {
    switch (job) {
      case 'Front-end Development':
        return frontendImg;
      case 'Back-end Development':
        return backendImg;
      case 'Full-stack Development':
        return fullstackImg;
      case 'UI/UX Design':
        return uiuxImg;
      case 'See-More':
        return Seemore;
      default:
        return null;
    }
  };

  return (
    <div className='career-part' id='careers'>
      <h3>Careers</h3>
      <div className='career-id' onMouseLeave={regainDefault}>
        <div className={`c ${selectedCareer === 'Front-end Development' ? 'expanded' : ''}`}>
          <span>Front-end Development</span><button>See more
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
            </svg></button>
          <div className='overlay'></div>
          <img className='careers' src={getJobImage('Front-end Development')} alt='Front-end Development' />
        </div>
        <div
          onMouseEnter={removeDefault}
          className={`c ${selectedCareer === 'Back-end Development' ? 'expanded' : ''}`}
        ><span>Back-end Development</span><button>See more
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
            </svg></button>
          <div className='overlay'></div>
          <img className='careers' src={getJobImage('Back-end Development')} alt='Back-end Development' />

        </div>
        <div
          onMouseEnter={removeDefault}
          className={`c ${selectedCareer === 'Full-stack Development' ? 'expanded' : ''}`}
        ><span>Full-stack Development</span><button>See more
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
            </svg></button>
          <div className='overlay'></div>
          <img className='careers' src={getJobImage('Full-stack Development')} alt='Full-stack Development' />

        </div>
        <div
          onMouseEnter={removeDefault}
          className={`c ${selectedCareer === 'UI/UX Design' ? 'expanded' : ''}`}
        ><span>UI/UX Design</span><button>See more
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
            </svg>
          </button>
          <div className='overlay'></div>
          <img className='careers' src={getJobImage('UI/UX Design')} alt='UI/UX Design' />

        </div>
        <div
          onMouseEnter={removeDefault}
          className={`c ${selectedCareer === 'See-More' ? 'expanded' : ''}`}
        ><span>Others</span><button>See more
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
            </svg></button>
          <div className='overlay'></div>
          <img className='careers' src={getJobImage('See-More')} alt='See-More' />

        </div>
      </div>
    </div>
  );
};

export default Careers;
