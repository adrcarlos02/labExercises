// src/pages/Login.jsx
import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempt', { username, password });
    // Implement login logic here
  };

  return (
    <Paper elevation={3} style={{ padding: '2rem', margin: '2rem' }}>
      <Typography variant="h4" component="h2">Login</Typography>
      <form onSubmit={handleLogin}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </Paper>
  );
};

export default Login;