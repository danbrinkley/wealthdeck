import React, { useState, useEffect } from "react";
import APIService from "../../APIService";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "../Landing/landing.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useCookies(["mytoken"]);
  const [isLogin, setLogin] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (token["mytoken"]) {
      navigate("/dashboard");
    }
  }, [token]);

  const loginBtn = () => {
    APIService.LoginUser({ username, password })
      .then((resp) => setToken("mytoken", resp.token))
      .catch((error) => console.log(error));
  };

  const RegisterBtn = () => {
    APIService.RegisterUser({ username, password })
      .then(() => loginBtn())
      .catch((error) => console.log(error));
  };
  return (
    <div className="formCenter">
      <br />
      <br />
      <br />
      {isLogin ? (
        <h1 className="landing-title">LOGIN </h1>
      ) : (
        <h1 className="landing-title-signup">SIGN UP</h1>
      )}

      <br />

      <div className="">
        <label htmlFor="username" className="formFieldLabel">
          Username
        </label>
        <input
          type="text"
          className="formFieldInput"
          id="username"
          placeholder="Please Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="formField">
        <label htmlFor="password" className="formFieldLabel">
          Password
        </label>
        <input
          type="password"
          className="formFieldInput"
          id="password"
          placeholder="Please Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {isLogin ? (
        <button onClick={loginBtn} className="formFieldButton">
          Login
        </button>
      ) : (
        <button onClick={RegisterBtn} className="formFieldButton">
          Sign Up
        </button>
      )}
      <div className="mb-3">
        <br />
        {isLogin ? (
          <h5>
            Don't Have Account?{" "}
            <button className="switchbutton" onClick={() => setLogin(false)}>
              Register
            </button>
            Here
          </h5>
        ) : (
          <h5>
            Already Have an Account?{" "}
            <button className="switchbutton" onClick={() => setLogin(true)}>
              Login
            </button>
            Here
          </h5>
        )}
      </div>
    </div>
  );
}

export default Login;
