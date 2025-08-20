import React, { useState } from 'react';

const UseStateForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Please fill both the fields.');
      return;
    }

    if (username === 'admin' && password === 'admin123') {
      alert('Login successful!');
    } else {
      alert('Login failed. Invalid credentials.');
    }
  };

  return (
    <div >
      <h2>Login Form</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" >
          Login
        </button>
      </form>
    </div>
  );
};

export default UseStateForm;
