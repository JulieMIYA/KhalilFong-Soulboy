import React from 'react';
import { Link } from 'react-router'

const Home = () => (
    <div className="home-container">
        <Link to="/albums">
            Albums
        </Link>
        <Link to="/bio">
            Bio
        </Link>
    </div>
);
export default Home;