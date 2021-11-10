import React from 'react'
import NavBar from '../NavBar'
import './dashboard.css'

const Dashboard = () => {
    return (
        <div className="dashboard-body">

            <div className="side-container">
                <NavBar />
            </div>

            <div className="main-container">
                <h1>Hello</h1>
            </div>
        </div>
    )
}

export default Dashboard
