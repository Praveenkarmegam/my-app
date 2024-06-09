// src/components/DataScience.js
import React from 'react';
import datascienceImg from '../images/datascience.jpeg';

function DataScience() {
    return (
        <div className="content">
            <h2>Data Science</h2>
            <div className="card">
                <img src={datascienceImg} alt="Data Science" />
                <div>
                    Content for Data Science
                </div>
            </div>
        </div>
    );
}

export default DataScience;
