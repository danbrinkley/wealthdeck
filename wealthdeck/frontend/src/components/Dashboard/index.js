import React from 'react'
import NavBar from '../NavBar'
import Header from '../Header'
import Performance from '../Performance'
import DebtIncome from '../DebtIncome'
import Income from '../Income'
import Assets from '../Assets'
import Debt from '../Debt'
import './dashboard.css'

const Dashboard = () => {
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
