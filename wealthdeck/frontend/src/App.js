import React from 'react'
import { Routes, Route } from "react-router-dom"
import Landing from './components/Landing'
import Dashboard from './components/Dashboard'
import Test from './components/Test'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
