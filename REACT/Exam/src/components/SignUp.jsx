import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/auth/authActions';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const { name, email, password } = formData;

    try {
      const res = await fetch(`http://localhost:3000/users?email=${email}`);
      const existingUsers = await res.json();

      if (existingUsers.length > 0) {
        setError('Email is already registered');
        return;
      }

      const newUser = { name, email, password };
      const createRes = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
      });

      const createdUser = await createRes.json();

      dispatch(login(createdUser));
      alert('Account created successfully!');
      navigate('/reservations');

    } catch (err) {
      console.error('Sign up failed:', err);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card p-4 shadow rounded-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-4 fw-bold">Create Account</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="name">👤 Full Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">📧 Email address</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label htmlFor="password">🔒 Password</label>
          </div>

          {error && <p className="text-danger text-center">{error}</p>}

          <button type="submit" className="btn btn-dark w-100">Sign Up</button>
        </form>
        <div className="text-center mt-3">
          Already have an account? <a href="/signin" className='text-decoration-none fw-semibold text-dark'>Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
