import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import TTT from './Components/TTT/TTT'; // Make sure the path is correct
import Calculator from './Components/Calculator/Calculator'; // Make sure the path is correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/TTT" element={<TTT />} />
        <Route path="/Calculator" element={<Calculator />} />
        {/* ... other routes */}
      </Routes>
    </Router>
  );
}

export default App;