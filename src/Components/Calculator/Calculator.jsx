import React from 'react';
import TopNavigation from '../TopNavigation/TopNavigation'; // Updated path
import './Calculator.css';

const Calculator = () => {
    console.log("Calculator is mounting");
    return (
        <div className="calculator-container">
            <TopNavigation /> {/* Updated component name */}
            <h1>Calculator</h1>
            {/* The rest of your dashboard content will go here */}
        </div>
    );
}

export default Calculator;