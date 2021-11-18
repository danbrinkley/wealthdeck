import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Landing/Login";
import Signup from "./components/Landing/Signup";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Landing/Logout";
import Landing from "./components/Landing";
import AssetsPage from "./components/Pages/AssetsPage";
import IncomePage from "./components/Pages/IncomePage";
import DebtPage from "./components/Pages/DebtPage";



const App = () => {
  return (
    <div className='App'>
        
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/assets' element={<AssetsPage />} />
          <Route path='/income' element={<IncomePage />} />
          <Route path='/debt' element={<DebtPage />} />
        </Routes>
      
    </div>
  );
};

export default App;
