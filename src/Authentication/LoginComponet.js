import React, { useState } from 'react';
import './authentication.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, logout } from '../features/auth/authSlice';


const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Both fields are required');
      return;
    }
    dispatch(loginSuccess({email,password}))
    // Reset error
    setError('');

    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);

    // For demonstration purposes, let's assume successful login
    alert('Login successful');
  };
 console.log(user,"user>>>>>>>>>>>>>>>.")
  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginComponent;
