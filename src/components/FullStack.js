// src/components/FullStack.js
import React from 'react';
import fullstackImg from '../images/fullstack.jpeg';

function FullStack() {
    return (
        <div className="content">
            <h2>Full Stack Development</h2>
            <div className="card">
                <img src={fullstackImg} alt="Full Stack Development" />
                <div>
                    Content for Full Stack Development
                </div>
            </div>
        </div>
    );
}

export default FullStack;
