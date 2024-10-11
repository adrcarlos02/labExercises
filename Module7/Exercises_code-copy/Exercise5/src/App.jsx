// src/App.jsx
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";
import Login from "./pages/Login";
import BitcoinRates from "./components/BitcoinRates";
import PostList from "./components/PostList"; // Assuming you create this component
import "./App.css";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Customize your primary color
    },
    secondary: {
      main: "#dc004e", // Customize your secondary color
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Bitcoin Rate Checker
            </Typography>
            <Button component={NavLink} to="/" color="inherit">
              Home
            </Button>
            <Button component={NavLink} to="/login" color="inherit">
              Login
            </Button>
            <Button component={NavLink} to="/bitcoin-rates" color="inherit">
              Bitcoin Rates
            </Button>
            <Button component={NavLink} to="/posts" color="inherit">
              Posts
            </Button>
          </Toolbar>
        </AppBar>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/bitcoin-rates" element={<BitcoinRates />} />
            <Route path="/posts" element={<PostList />} /> {/* Add PostList route */}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;