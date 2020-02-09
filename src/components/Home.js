import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Hello To Exam</h1>
            <Link to="/exam" className="btn btn-primary mt-3">Start exam</Link>
        </div>
    );
};

export default Home;