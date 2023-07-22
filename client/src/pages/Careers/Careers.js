import React from 'react';
import { useEffect, useState } from 'react';
import '../../styles/CareersPage.css';
import axios from 'axios';

function JobDashboard() {

    const [careers, setCareers] = useState([]);

    useEffect(() => {
        axios.get('http://13.235.91.237/careers').then((response) => {
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
        </div>
    );
}

export default JobDashboard;