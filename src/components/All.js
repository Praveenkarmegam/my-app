// src/components/All.js
import React from 'react';
import fullstackImg from '../images/fullstack.jpeg';
import datascienceImg from '../images/datascience.jpeg';
import cybersecurityImg from '../images/cybersecurity.jpeg';
import careerImg from '../images/career.jpeg';

function All() {
    return (
        <div className="content">
            <h2>All Courses</h2>
            <div className="card">
                <img src={fullstackImg} alt="Full Stack Development" />
                <div>
                    <h3>Full Stack Development</h3>
                    <p>Content for Full Stack Development</p>
                </div>
            </div>
            <div className="card">
                <img src={datascienceImg} alt="Data Science" />
                <div>
                    <h3>Data Science</h3>
                    <p>Content for Data Science</p>
                </div>
            </div>
            <div className="card">
                <img src={cybersecurityImg} alt="Cyber Security" />
                <div>
                    <h3>Cyber Security</h3>
                    <p>Content for Cyber Security</p>
                </div>
            </div>
            <div className="card">
                <img src={careerImg} alt="Career" />
                <div>
                    <h3>Career</h3>
                    <p>Content for Career</p>
                </div>
            </div>
        </div>
    );
}

export default All;