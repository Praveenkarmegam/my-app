// src/components/CyberSecurity.js
import React from 'react';
import cybersecurityImg from '../images/cybersecurity.jpeg';

function CyberSecurity() {
    return (
        <div className="content">
            <h2>Cyber Security</h2>
            <div className="card">
                <img src={cybersecurityImg} alt="Cyber Security" />
                <div>
                    Content for Cyber Security
                </div>
            </div>
        </div>
    );
}

export default CyberSecurity;
