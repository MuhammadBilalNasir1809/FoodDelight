import React, { useContext, useState } from "react";
import "./Loginsignup.css";
import { assets } from "../../assets/assets";
import axios from 'axios';
import { ShopContext } from "../../Context/ShopContext";

const Loginsignup = ({ setshowlogin }) => {
  const {settoken} = useContext(ShopContext)

  const url = 'http://localhost:4000';
  const [currentState, setCurrentState] = useState("Sign Up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = `${url}/api/user`;
    newUrl += currentState === 'Login' ? "/login" : "/register";

    try {
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        settoken(response.data.token);
        localStorage.setItem("token",response.data.token);
        setshowlogin(false)
        alert("Successfully Logged In");
        // Add logic to handle successful login
      } else {
        
        alert("Error: " + response.data.message);
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="Loginsignup">
      <div className="login-signup">
        <form onSubmit={onLogin} className="login-signup-container">
          <div className="login-signup-title">
            <h2>{currentState}</h2>
            <img
              onClick={() => {
                setshowlogin(false);
              }}
              src={assets.cross_icon}
              alt="Close"
            />
          </div>
          <div className="login-signup-input">
            {currentState === "Sign Up" && (
              <input
                name='name'
                onChange={onChangeHandler}
                value={data.name}
                type="text"
                placeholder="Your Name"
                required
              />
            )}
            <input
              name='email'
              onChange={onChangeHandler}
              value={data.email}
              type="email"
              placeholder="Your Email"
              required
            />
            <input
              name='password'
              onChange={onChangeHandler}
              value={data.password}
              type="password"
              placeholder="Your Password"
              required
            />
          </div>
          <button type='submit'>
            {currentState === "Sign Up" ? "CREATE ACCOUNT" : "LOGIN"}
          </button>
          <div className="login-signup-condition">
            <input type="checkbox" required />
            <p>I agree to the terms and conditions of using the privacy policy</p>
          </div>
          {currentState === "Sign Up" ? (
            <p>
              Already have an account? <span onClick={() => setCurrentState('Login')}>Login here</span>
            </p>
          ) : (
            <p>
              Don't have an account? <span onClick={() => setCurrentState('Sign Up')}>Sign up here</span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Loginsignup;
