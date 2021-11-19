import React, { useState, useEffect, Fragment } from 'react'
import NavBar from '../NavBar'
import Header from '../Header'
import Performance from '../Performance'
import DebtIncome from '../DebtIncome'
import IncomeView from '../Income/IncomeView'
import Income from '../Income'
import Assets from '../Assets'
import Debt from '../Debt'
import Logout from '../Landing/Logout'
import './dashboard.css'

const Dashboard = () => {

  //   const [userEmail, setUserEmail] = useState('');
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (localStorage.getItem('token') === null) {
  //     window.location.replace('http://localhost:3000/login');
  //   } else {
  //     fetch('http://127.0.0.1:8000/api/v1/users/auth/user/', {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Token ${localStorage.getItem('token')}`
  //       }
  //     })
  //       .then(res => res.json())
  //       .then(data => {
  //         setUserEmail(data.email);
  //         setLoading(false);
  //       });
  //   }
  // }, []);


    return (
        <div className="dashboard-body">
           
            <div className="side-container">
                <NavBar />
            </div>

            <div className="main-container">
                <Header />
                

            <div className="main-row1-ctr">
                <Performance />
                <DebtIncome />
                </div>

            <div className="main-row2-ctr">
                <Income />
                <Assets />
                <Debt />
            </div> 

            
              </div> 

        </div>
    )
}

export default Dashboard
