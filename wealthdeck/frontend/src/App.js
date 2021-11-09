import React from 'react'
import { Routes, Route } from "react-router-dom"
import Landing from './components/Landing'
import Dashboard from './components/Dashboard'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
