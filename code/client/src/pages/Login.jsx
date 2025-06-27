import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ setIsLoggedIn, setUserRole, setUserName }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin123') {
      setIsLoggedIn(true);
      setUserRole('admin');
      setUserName('admin');
      navigate('/admin-dashboard'); // Admin goes to Admin Dashboard
    } else if (username === 'user' && password === 'user123') {
      setIsLoggedIn(true);
      setUserRole('user');
      setUserName('user');
      navigate('/'); // User goes to Home
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
}

export default Login;
