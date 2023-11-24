import React, { useState } from 'react';
import './Calc.css'; 

const Calc = () => {
    const [displayValue, setDisplayValue] = useState('');

    const appendToDisplay = (val) => {
        setDisplayValue(displayValue + val);
    };

    const clearDisplay = () => {
        setDisplayValue('');
    };

    const calculate = () => {
        try {
            setDisplayValue(eval(displayValue).toString());
        } catch (error) {
            setDisplayValue('Error');
        }
    };

    return (
        <div className="calculator">
            <input type="text" id="display" value={displayValue} readOnly />
            <div className="buttons">
                <button className="btn" onClick={() => appendToDisplay('7')}>7</button>
                <button className="btn" onClick={() => appendToDisplay('8')}>8</button>
                <button className="btn" onClick={() => appendToDisplay('9')}>9</button>
                <button className="btn operator" onClick={() => appendToDisplay('+')}>+</button>
                <button className="btn" onClick={() => appendToDisplay('4')}>4</button>
                <button className="btn" onClick={() => appendToDisplay('5')}>5</button>
                <button className="btn" onClick={() => appendToDisplay('6')}>6</button>
                <button className="btn operator" onClick={() => appendToDisplay('-')}>-</button>
                <button className="btn" onClick={() => appendToDisplay('1')}>1</button>
                <button className="btn" onClick={() => appendToDisplay('2')}>2</button>
                <button className="btn" onClick={() => appendToDisplay('3')}>3</button>
                <button className="btn operator" onClick={() => appendToDisplay('*')}>*</button>
                <button className="btn red-button" onClick={clearDisplay}>C</button>
                <button className="btn" onClick={() => appendToDisplay('0')}>0</button>
                <button className="btn operator" onClick={calculate}>=</button>
                <button className="btn black-button" onClick={() => appendToDisplay('/')}>/</button>
            </div>
        </div>
    );
};

export default Calc;