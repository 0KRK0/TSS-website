import React from 'react';
import '../../styles/CareersPage.css'; // Import the external CSS file

function JobDashboard() {
    return (
        <div className="container-c">

            <a href='https://www.linkedin.com/feed/update/urn:li:activity:7086982334616408064'>
                <div className="job_card">
                    <div className="job_details">
                        <div className="text">
                            <h2>Node js Developer</h2>
                            <span>Google Drive - Junior Post</span>
                        </div>
                    </div>
                    <div className="job_salary">
                        <h4>$6.7 - $12.5k /yr</h4>
                        <span>1 days ago</span>
                    </div>
                </div>
            </a>

            <div className="job_card">
                <div className="job_details">
                    <div className="text">
                        <h2>JavaScript Developer</h2>
                        <span>Google - Senior Post</span>
                    </div>
                </div>
                <div className="job_salary">
                    <h4>$8.7 - $13.2k /yr</h4>
                    <span>2 days ago</span>
                </div>
            </div>

            <div className="job_card">
                <div className="job_details">
                    <div className="text">
                        <h2>Product Developer</h2>
                        <span>Facebook - Manager Post</span>
                    </div>
                </div>
                <div className="job_salary">
                    <h4>$11 - $18.5k /yr</h4>
                    <span>2 days ago</span>
                </div>
            </div>

            <div className="job_card">
                <div className="job_details">
                    <div className="text">
                        <h2>Programmer</h2>
                        <span>Github - Junior Post</span>
                    </div>
                </div>
                <div className="job_salary">
                    <h4>$6 - $11.5k /yr</h4>
                    <span>3 days ago</span>
                </div>
            </div>

            <div className="job_card">
                <div className="job_details">
                    <div className="text">
                        <h2>React.js Expert</h2>
                        <span>Youtube - VIP</span>
                    </div>
                </div>
                <div className="job_salary">
                    <h4>$6 - $11.5k /yr</h4>
                    <span>3 days ago</span>
                </div>
            </div>
        </div>
    );
}

export default JobDashboard;