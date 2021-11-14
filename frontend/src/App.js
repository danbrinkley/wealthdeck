import React, { Component } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Landing/Login";
import Signup from "./components/Landing/Signup";
import Dashboard from "./components/Dashboard";
import Landing from "./components/Landing";


import axiosInstance from "./axiosApi";

class App extends Component {


  constructor() {
    super();
    this.handleLogout = this.handleLogout.bind(this);
}

async handleLogout() {
    try {
        const response = await axiosInstance.post('/blacklist/', {
            "refresh_token": localStorage.getItem("refresh_token")
        });
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;
        return response;
    }
    catch (e) {
        console.log(e);
    }
};


    render() {
        return (
            <div className="site">
              <nav>
                    <Link className={"nav-link"} to={"/"}>Home</Link>
                    <Link className={"nav-link"} to={"/login/"}>Login</Link>
                    <Link className={"nav-link"} to={"/signup/"}>Signup</Link>
                    <Link className={"nav-link"} to={"/dashboard"}>Dashboard</Link>
                    {/* <Link className={"nav-link"} to={"/hello/"}>Hello</Link> */}
                    <button onClick={this.handleLogout}>Logout</button>
                </nav>
                <main>
                    <Routes>
                        <Route exact path='/login' element={<Login /> }/>
                        <Route exact path='/signup' element={<Signup /> }/>
                        <Route exact path='/dashboard' element={<Dashboard /> }/>
                        <Route exact path='/' element={<Landing /> }/>
                    
                   </Routes>
               </main>
            </div>
        );
    }
}

export default App;