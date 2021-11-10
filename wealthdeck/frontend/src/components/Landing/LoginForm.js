import React from 'react'
import { Link } from "react-router-dom"



const LoginForm = () => {
    // const history = useHistory("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
  
    // const user = {
    //   email,
    //   password
    // };
  
    // const handleSubmit = async () => {
    //   const res = await UserService.login(user);
    //   if (res.data) {
    //     const token = res.data.token;
    //     console.log("FROM LOGIN FORM: ", token);
    //     setToken(token);
    //     setEmail("");
    //     setPassword("");
    //     window.location = accessUrl;
    //     history.push("/");
    //   } else {
    //     alert("Server Error");
    //   }
    // };
  
    return (
      <div className="Login-form-ctr">
        <h2>LOGIN</h2>
        <input
          placeholder="Email"
          className="input-fields"
        //   onChange={(e) => setEmail(e.target.value)}
          type="email"
        //   value={email}
        />
        <input
          placeholder="Password"
          className="input-fields"
          type="password"
        //   value={password}
        //   onChange={(e) => setPassword(e.target.value)}
        />
  
        {/* <button className="login-btn" onClick={handleSubmit}> */}
        <button className="login-btn-pop">
          LOGIN
        </button>
        <p>
          Dont have an account?{" "}
          <Link className="join-link" to="/register">
            Join Now
          </Link>{" "}
        </p>
      </div>
    );
  };
  
  export default LoginForm;
