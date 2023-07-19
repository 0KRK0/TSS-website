import React from 'react';
import { useEffect, useState } from 'react';
import '../../styles/CareersPage.css';
import axios from 'axios';

function JobDashboard() {

    const [careers, setCareers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3500/careers').then((response) => {
            setCareers(response.data);
        });
    }, []);

    return (
        <div className="container-c">

            {careers.map(career => (
                <a href={career.link}>
                    <div className="job_card">
                        <div className="job_details">
                            <div className="text">
                                <h2>{career.role}</h2>
                                <span>{career.companyName}</span>
                            </div>
                        </div>
                    </div>
                </a>
            ))}

            {/* <a href='https://www.linkedin.com/feed/update/urn:li:activity:7086982334616408064'>
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
            </a> */}

        </div>
    );
}

export default JobDashboard;