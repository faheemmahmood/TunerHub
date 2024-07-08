import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
