import React from 'react'
import logo from '../images/logo.png'
import './landing.css'

const Logo = () => {
    return (
        <div className="logo-ctr">
            <img className="logo" src={logo} alt="website logo" />
        </div>
    )
}

export default Logo
