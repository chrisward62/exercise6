import React from 'react';
import TopNavigation from '../TopNavigation/TopNavigation'; 
import './Calculator.css';
import Calc from '../Calc/Calc';


const Calculator = () => {
    console.log("Calculator is mounting");
    return (
        <div className="calculator-container">
            <TopNavigation /> 
            <h1>Calculator</h1>
            <Calc />
        </div>
    );
}

export default Calculator;