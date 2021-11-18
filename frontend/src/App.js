import React, { Component } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Landing/Login";
import Signup from "./components/Landing/Signup";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Landing/Logout";
import Landing from "./components/Landing";
import AssetsPage from "./components/Pages/AssetsPage";
import IncomePage from "./components/Pages/IncomePage";
import DebtPage from "./components/Pages/DebtPage";
import { CookiesProvider } from "react-cookie";



const App = () => {
  return (
    <div className='App'>
        <CookiesProvider>
          <Router>
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
        </Router>
      </CookiesProvider>
      
    </div>
  );
};

export default App;
