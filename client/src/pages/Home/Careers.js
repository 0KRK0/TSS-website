import React, { useState } from 'react';
import '../../styles/Career.css';

const Careers = () => {
  const jobOptions = [
    'Front-end Development',
    'Back-end Development',
    'Full-stack Development',
    'UI/UX Design'
  ];

  const [selectedJob, setSelectedJob] = useState(jobOptions[0]);

  const handleJobSelection = (job) => {
    setSelectedJob(job);
  };
  const nextJob = () => {
    const currentIndex = jobOptions.indexOf(selectedJob);
    const nextIndex = (currentIndex + 1) % jobOptions.length;
    setSelectedJob(jobOptions[nextIndex]);
  };
  const previousJob = () => {
    const currentIndex = jobOptions.indexOf(selectedJob);
    const previousIndex = (currentIndex - 1 + jobOptions.length) % jobOptions.length;
    setSelectedJob(jobOptions[previousIndex]);
  };
  
  
  return (
    <div id="home-page-career">
      <h3>Career</h3>
      <div id="home-page-career-scroll">
        <div>
          {/* career options */}
          {jobOptions.map((job) => (
            <button id="careers-button"
              key={job}
              onClick={() => handleJobSelection(job)}
              className={selectedJob === job ? 'selected' : ''}
            >
              {job}
            </button>
          ))}
        </div>
        <div>
          <article id="home-about-career">
            {/* about selected career */}
            {selectedJob && (
              <>
                <h4>About {selectedJob}</h4>
                <p>
                  {selectedJob === 'Front-end Development' && (
                    <>
                      Front-end developers are responsible for implementing
                      visual and interactive elements in a web application. They
                      work closely with designers to turn design mockups into
                      functional user interfaces using HTML, CSS, and
                      JavaScript.
                    </>
                  )}
                  {selectedJob === 'Back-end Development' && (
                    <>
                      Back-end developers handle the server-side logic and
                      database interactions of a web application. They are
                      responsible for building the behind-the-scenes systems
                      and APIs that power the application's functionality.
                    </>
                  )}
                  {selectedJob === 'Full-stack Development' && (
                    <>
                      Full-stack developers are proficient in both front-end and
                      back-end development. They can handle all aspects of
                      building a web application, from designing the user
                      interface to implementing the server-side logic.
                    </>
                  )}
                  {selectedJob === 'UI/UX Design' && (
                    <>
                      UI/UX designers focus on creating intuitive and visually
                      appealing user interfaces. They conduct user research,
                      create wireframes and prototypes, and collaborate with
                      developers to ensure a seamless user experience.
                    </>
                  )}
                </p>
              </>
            )}
          </article>
          <img src="" alt="" />
        </div>
        <div id='nxt-prev-button'>
          <button onClick={nextJob}>Next</button>
          <button onClick={previousJob}>Previous</button>
        </div>
      </div>
    </div>
  );
};

export default Careers;
