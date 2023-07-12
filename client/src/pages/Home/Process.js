import React, { useState } from 'react';
import '../../styles/Process.css'

const Process = () => {
  const [selectedProcess, setSelectedProcess] = useState('Job Apply');

  const handleClick = (processName) => {
    setSelectedProcess(processName);
  };

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
const NextStage =(processName,processData)=>{

}
  return (
    <div className='process'>
      <div className='about-process'>
        <h3>How To Get Started ?</h3>
        <div onClick={NextStage}>
          <label>{selectedProcess}</label>
          <article>Stage: {selectedProcess}</article>
          <p>{getProcessData(selectedProcess)}</p>
        </div>
      </div>
      <div className='process-shape'>
  <svg width="inherit" height="500">
    <path
      d="M70,100 H800 C900,100 900,250 800,250 H150 C50,250 50,400 150,400 H900"
      fill="none"
      stroke="black"
      strokeWidth="2"
    />
    <g>
      <text x="300" y="85" textAnchor="middle">Job Apply</text>
      <circle
        cx="300"
        cy="100"
        r="8"
        fill={selectedProcess === 'Job Apply' ? 'red' : 'skyblue'}
        onClick={() => handleClick('Job Apply')}
      />
    </g>
    <g>
      <text x="875" y="160" textAnchor="middle">Review</text>
      <circle
        cx="875"
        cy="175"
        r="8"
        fill={selectedProcess === 'Review' ? 'red' : 'skyblue'}
        onClick={() => handleClick('Review')}
      />
    </g>
    <g>
      <text x="500" y="235" textAnchor="middle">Selection</text>
      <circle
        cx="500"
        cy="250"
        r="8"
        fill={selectedProcess === 'Selection' ? 'red' : 'skyblue'}
        onClick={() => handleClick('Selection')}
      />
    </g>
    <g>
      <text x="75" y="310" textAnchor="middle">Interview</text>
      <circle
        cx="75"
        cy="325"
        r="8"
        fill={selectedProcess === 'Interview' ? 'red' : 'skyblue'}
        onClick={() => handleClick('Interview')}
      />
    </g>
    <g>
      <text x="800" y="385" textAnchor="middle">Selection-End</text>
      <circle
        cx="800"
        cy="400"
        r="8"
        fill={selectedProcess === 'Selection-End' ? 'red' : 'skyblue'}
        onClick={() => handleClick('Selection-End')}
      />
    </g>
  </svg>
      </div>
    </div>
  );
};

export default Process;
