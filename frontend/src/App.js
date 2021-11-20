import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/Dashboard";
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
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/assets' element={<AssetsPage />} />
            <Route path='/income' element={<IncomePage />} />
            <Route path='/liabilities' element={<DebtPage />} />
           
          </Routes>
        </Router>
      </CookiesProvider>
      
    </div>
  );
};

export default App;
