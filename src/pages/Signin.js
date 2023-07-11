import React, { useState } from 'react';
import { signIn } from '../api/auth';

export const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn({ email, password });
      // Handle successful sign-in, e.g., redirect to home page
    } catch (error) {
      setError('Wrong email or password');
    }
  };

  return (
    <div id="signin-page">
      <h1>Sign in page</h1>
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
        <button type="submit">Sign in</button>
      </form>
      {error && <p className="error-txt">{error}</p>}
    </div>
  );
};
