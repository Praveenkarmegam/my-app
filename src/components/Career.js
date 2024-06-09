// src/components/Career.js
import React from 'react';
import careerImg from '../images/career.jpeg';

function Career() {
    return (
        <div className="content">
            <h2>Career</h2>
            <div className="card">
                <img src={careerImg} alt="Career" />
                <div>
                    Content for Career
                </div>
            </div>
        </div>
    );
}

export default Career;
