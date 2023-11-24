import React from 'react';
import TopNavigation from '../TopNavigation/TopNavigation'; 
import './Dashboard.css';

const featured = [
    { name: 'Tic-Tac-Toe', image: '/ttt.png' },
    { name: 'Calculator', image: '/calc.png' },
];

const Dashboard = () => {
    console.log("Dashboard is mounting");
    return (
        <div className="dashboard-container">
            <TopNavigation /> 
            <h1>Tic-Tac-Toe Calculator Home Page</h1>
            <div className="featured">
                {featured.map(feature => (
                    <div key={feature.name} className="feature">
                        <h3>{feature.name}</h3>
                        <img src={feature.image} alt={feature.name} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;