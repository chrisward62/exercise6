import React from 'react';
import TopNavigation from '../TopNavigation/TopNavigation'; // Updated path
import './TTT.css';

const TTT = () => {
    console.log("TTT is mounting");
    return (
        <div className="TTT-container">
            <TopNavigation /> {/* Updated component name */}
            <h1>Tic-Tac-Toe</h1>
            {/* The rest of your dashboard content will go here */}
        </div>
    );
}

export default TTT;