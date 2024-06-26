import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const API_BASE_URL =import.meta.env.VITE_REACT_APP_BACKEND_URL ||"https://react-project-fgtj.onrender.com";
  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/register`, {
        email,
        password,
      });
  
      login(response.data.token, email);
      setMessage("Registration successful");
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      setMessage(error.response.data.error);
    }finally {
      setIsLoading(false); 
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, {
        email,
        password,
      });

      login(response.data.token, email);
      setMessage("Login successful");
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      setMessage(error.response.data.error); 
    }
  };



  return (
    <div className="authform-container">
      <form className="auth-form">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        {isLoading ? (
          <div className="loading-spinner"></div> 
        ) : (
          <>
            <button className="auth-button" onClick={handleRegister}>
              Register
            </button>
            <button className="auth-button" onClick={handleLogin}>
              Login
            </button>
          </>
        )}
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default AuthForm;
