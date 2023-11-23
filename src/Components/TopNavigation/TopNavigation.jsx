import React from 'react';
import { Link } from 'react-router-dom';
import './TopNavigation.css';

const Navbar = () => {
  return (
    <nav className="navbar">
    <Link to="/Dashboard" className="nav-item">Home Page</Link>
    <Link to="/TTT" className="nav-item">Tic-Tac-Toe</Link> 
    <Link to="/Calculator" className="nav-item">Calculator</Link> 
    </nav>
  );
};

export default Navbar;
