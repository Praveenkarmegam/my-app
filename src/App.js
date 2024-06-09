// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import All from './components/All';
import FullStack from './components/FullStack';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';
import './styles.css';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul className="navigation">
                        <li><Link to="/">All</Link></li>
                        <li><Link to="/fullstack">Full Stack Development</Link></li>
                        <li><Link to="/datascience">Data Science</Link></li>
                        <li><Link to="/cybersecurity">Cyber Security</Link></li>
                        <li><Link to="/career">Career</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<All />} />
                    <Route path="/fullstack" element={<FullStack />} />
                    <Route path="/datascience" element={<DataScience />} />
                    <Route path="/cybersecurity" element={<CyberSecurity />} />
                    <Route path="/career" element={<Career />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
