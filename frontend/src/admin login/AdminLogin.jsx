import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';
import axios from 'axios';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
  e.preventDefault();

  if (username === "admin" && password === "admin123") {
    alert("Login Successful");
    navigate("/dashboard");
  } else {
    alert("Invalid username or password");
  }
};

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Admin Log In</h1>
        <div className="divider"></div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;