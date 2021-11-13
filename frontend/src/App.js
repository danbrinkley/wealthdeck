import React, { Component} from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Landing/Login";
import Signup from "./components/Landing/Signup";

class App extends Component {
    render() {
        return (
            <div className="site">
                <nav>
                    <Link className={"nav-link"} to={"/"}>Home</Link>
                    <Link className={"nav-link"} to={"/login/"}>Login</Link>
                    <Link className={"nav-link"} to={"/signup/"}>Signup</Link>
                </nav>
                <main>
                    <h1>Ahhh after 10,000 years I'm free. Time to conquer the Earth!</h1>

                    <Routes>
                        <Route exact path='/login' element={<Login />} />
                        <Route exact path='/signup' element={<Signup />} />
                        
                        <Route path={"/"} render={() => <div>Home again</div>}/>
                    </Routes>
                </main>
            </div>
        );
    }
}

export default App;


// import React from 'react'
// import { Routes, Route } from "react-router-dom"
// import Landing from './components/Landing'
// import Dashboard from './components/Dashboard'
// import Test from './components/Test'



// const App = () => {
//   return (
//     <div className="App">

// <Link className={"nav-link"} to={"/"}>Home</Link>
//     <Routes>
//       <Route exact path="/test" element={<Test />} /> 
//       <Route exact path="/" element={<Landing />} />
//       <Route exact path="/dashboard" element={ <Dashboard />} /> 
//   </Routes> 
//   </div>
//   );
// }

// export default App;
