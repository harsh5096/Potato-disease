import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/login', {
        username,
        password,
      });

      if (response.data === "exist") {
        alert("User already exists");
      } else if (response.data === "success") {
        // Assuming successful login response is "success"
        navigate('/'); // Navigate to home on successful login
      } else {
        alert("Invalid credentials"); // Generic error message
      }
    } catch (error) {
      alert("Login failed"); // User-friendly error message
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
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
      <button type="submit">SIGN UP</button>
      <br />
      <p>OR</p>
      <br />
      {/* Uncomment for a login link if needed (assuming Login component exists) */}
      <Link to="/login">Login Page</Link>
    </form>
  );
}

export default Signup;
