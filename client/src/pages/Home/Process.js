import React, { useState, useEffect, useRef } from 'react';import '../../styles/Process.css';

const Process = () => {
  const [selectedProcess, setSelectedProcess] = useState('Job Apply');
const pathRef=useRef(null)
  const handleClick = () => {
    const processNames = ['Job Apply', 'Review', 'Selection', 'Interview', 'Selection-End'];
    const currentIndex = processNames.indexOf(selectedProcess);
    const nextIndex = (currentIndex + 1) % processNames.length;
    const nextProcess = processNames[nextIndex];
    setSelectedProcess(nextProcess);
  };

  useEffect(() => {
    const animate = () => {
      const path = pathRef.current;
      if (selectedProcess === 'Job Apply') {
        path.setAttribute('d', "M150,100 H300");
      }
      else if (selectedProcess === 'Review') {
        path.setAttribute('d', "M150,100 H800 C900,100 875,175 875,175");
      }
      else if (selectedProcess === 'Selection') {
        path.setAttribute('d', "M150,100 H800 C900,100 900,250 800,250 H500");
      }
      else if (selectedProcess === 'Interview') {
        path.setAttribute('d', "M150,100 H800 C900,100 900,250 800,250 H150 C50,250 50,400 150,400");
      }
      else if (selectedProcess === 'Selection-End') {
        path.setAttribute('d', "M150,100 H800 C900,100 900,250 800,250 H150 C50,250 50,400 150,400 H800");
      }
    };
    animate();

  }, [selectedProcess]);


  const getProcessData = (processName) => {
    // You can retrieve the data based on the selected process here
    // For demonstration purposes, let's assume we have a map of process data
    const processData = {
      'Job Apply': 'job application process where applicants submit their information and documents for consideration.',
      'Review': 'This stage involves reviewing and evaluating the submitted applications to shortlist candidates for further consideration.',
      'Selection': 'Once the initial review is done, this stage involves sending out communication to the selected candidates for the next steps in the process.',
      'Interview': 'In this stage, selected candidates are invited for interviews to assess their qualifications, skills, and fit for the position.',
      'Selection-End': 'This is the final stage of the selection process where a decision is made on the candidate to be offered the position and the necessary steps are taken to complete the hiring process.'
    };

    return processData[processName] || 'No data available for this process.';
  };
  return (
    <div className='process'>
      <div className='about-process'>
        <h3>How To Get Started?</h3>
        <div onClick={handleClick}>
          <label>{selectedProcess}</label>
          <article>Stage: {selectedProcess}</article>
          <p>{getProcessData(selectedProcess)}</p>
        </div>
      </div>
      <div className='process-shape'>
        <svg width='100%' height='500' >
        <path
            
            ref={pathRef}
            d="M150,100 H300"
            fill="none"
            stroke="black"
            strokeWidth="2"
          />
          <g>
            <text x="300" y="85" textAnchor="middle">Job Apply</text>
            <circle
              cx="300"
              cy="100"
              r={selectedProcess === 'Job Apply' ? '10' : '8'}
              fill={selectedProcess === 'Job Apply' ? 'red' : 'skyblue'}
              onClick={() => setSelectedProcess('Job Apply')}
            />
          </g>
          <g>
            <text x="875" y="160" textAnchor="middle">Review</text>
            <circle
              cx="875"
              cy="175"
              r={selectedProcess === 'Review' ? '10' : '8'}
              fill={selectedProcess === 'Review' ? 'red' : 'skyblue'}
              onClick={() => setSelectedProcess('Review')}
            />
          </g>
          <g>
            <text x="500" y="235" textAnchor="middle">Selection</text>
            <circle
              cx="500"
              cy="250"
              r={selectedProcess === 'Selection' ? '10' : '8'}
              fill={selectedProcess === 'Selection' ? 'red' : 'skyblue'}
              onClick={() => setSelectedProcess('Selection')}
            />
          </g>
          <g>
            <text x="75" y="310" textAnchor="middle">Interview</text>
            <circle
              cx="75"
              cy="325"
              r={selectedProcess === 'Interview' ? '10' : '8'}
              fill={selectedProcess === 'Interview' ? 'red' : 'skyblue'}
              onClick={() => setSelectedProcess('Interview')}
            />
          </g>
          <g>
            <text x="800" y="385" textAnchor="middle">Selection-End</text>
            <circle
              cx="800"
              cy="400"
              r={selectedProcess === 'Selection-End' ? '10' : '8'}
              fill={selectedProcess === 'Selection-End' ? 'red' : 'skyblue'}
              onClick={() => setSelectedProcess('Selection-End')}
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Process;
