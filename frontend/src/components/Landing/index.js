import React from 'react'
import Logo from './Logo'
import Login from './Login'
import './landing.css'
import Signup from './Signup';


class Landing extends React.Component {
    constructor() {
        super();
        this.state={
            show:false
        }
    }
render() {
return (
        <div className="landing-ctr">
            <Logo />
            <div className="login-pop-ctr">
              {
                  this.state.show? <div><Login /></div> : null
              }
                <button 
                className="login-btn" 
                onClick={()=>{this.setState({show:!this.state.show})}}>
                Login
                </button>
                </div>
                {
                  this.state.show? <div><Signup /></div> : null
              }
                 <button className="signup-btn"
                 onClick={()=>{this.setState({show:!this.state.show})}}>
                 Sign-up
                </button>
            
        </div>
        )   
     }
}

export default Landing
