import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/auth/authActions';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/users?username=${username}&password=${password}`);
      const data = await response.json();

      if (data.length > 0) {
        dispatch(login(data[0]));
        navigate('/reservations');
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      console.error(err);
      setError('Server error');
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card shadow p-4 rounded-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-4 fw-bold">Sign In</h3>
        <form onSubmit={handleLogin}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="username">👤 Username</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">🔒 Password</label>
          </div>

          {error && <p className="text-danger text-center">{error}</p>}

          <button type="submit" className="btn btn-dark w-100">Login</button>
        </form>
        <div className="text-center mt-3">
          Don’t have an account? <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
