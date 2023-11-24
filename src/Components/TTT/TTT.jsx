import React from 'react';
import TopNavigation from '../TopNavigation/TopNavigation'; 
import Game from '../Game/Game';
import './TTT.css';

const TTT = () => {
    console.log("TTT is mounting");
    return (
        <div className="TTT-container">
            <TopNavigation /> {/* Updated component name */}
            <h1>Tic-Tac-Toe</h1>
            <Game />
        </div>
    );
}

export default TTT;