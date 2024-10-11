// src/pages/Home.jsx
import React from 'react';
import { Typography, Paper } from '@mui/material';

const Home = () => {
  return (
    <Paper elevation={3} style={{ padding: '2rem', margin: '2rem' }}>
      <Typography variant="h4" component="h2">
        Welcome to the Home Page
      </Typography>
      <Typography variant="body1">
        This is the home page of the Bitcoin Rate Checker application.
      </Typography>
    </Paper>
  );
};

export default Home;