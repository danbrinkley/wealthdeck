import React from 'react'
import Logo from './Logo'
import LoginForm from './LoginForm'
import './landing.css'


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
                  this.state.show? <div><LoginForm /></div> : null
              }
                <button 
                className="login-btn" 
                onClick={()=>{this.setState({show:!this.state.show})}}>
                Login
                </button>
                </div>
                 <button className="signup-btn">
                 Sign-up
                </button>
            
        </div>
        )   
     }
}

export default Landing
