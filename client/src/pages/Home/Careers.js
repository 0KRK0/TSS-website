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
    <div className='career-part'>
      <h3>Careers</h3>
      <div className='career-id' onMouseLeave={regainDefault}>
        <div className={`c ${selectedCareer === 'Front-end Development' ? 'expanded' : ''}`}>
          <span>Front-end Development</span><button>See More-{'>'}</button>
          <img src={getJobImage('Front-end Development')} alt='Front-end Development' />
          
        </div>
        <div
          onMouseEnter={removeDefault}
          className={`c ${selectedCareer === 'Back-end Development' ? 'expanded' : ''}`}
        ><span>Back-end Development</span><button>See More-{'>'}</button>
          <img src={getJobImage('Back-end Development')} alt='Back-end Development' />
          
        </div>
        <div
          onMouseEnter={removeDefault}
          className={`c ${selectedCareer === 'Full-stack Development' ? 'expanded' : ''}`}
        ><span>Full-stack Development</span><button>See More-{'>'}</button>
          <img src={getJobImage('Full-stack Development')} alt='Full-stack Development' />
          
        </div>
        <div
          onMouseEnter={removeDefault}
          className={`c ${selectedCareer === 'UI/UX Design' ? 'expanded' : ''}`}
        ><span>UI/UX Design</span><button>See More-{'>'}</button>
          <img src={getJobImage('UI/UX Design')} alt='UI/UX Design' />
         
        </div>
        <div
          onMouseEnter={removeDefault}
          className={`c ${selectedCareer === 'See-More' ? 'expanded' : ''}`}
        ><span>Others</span><button>See More-{'>'}</button>
          <img src={getJobImage('See-More')} alt='See-More' />
         
        </div>
      </div>
    </div>
  );
};

export default Careers;
