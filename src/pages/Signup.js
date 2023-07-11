import React, { useState } from 'react';
import { signUp } from '../api/auth';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp({ email, password });
      // Handle successful sign-up, e.g., redirect to home page
    } catch (error) {
      setError('Sign up failed');
    }
  };

  return (
    <div id="signup-page">
      <h1>Sign Up page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign up</button>
      </form>
      {error && <p className="error-txt">{error}</p>}
    </div>
  );
};
