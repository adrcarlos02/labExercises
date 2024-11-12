import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BorrowItems from "./pages/BorrowItems";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import AppProvider from "./context/AppContext";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/borrow",
    element: (
      <PrivateRoute>
        <Layout>
          <BorrowItems />
        </Layout>
      </PrivateRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <Layout>
          <Profile />
        </Layout>
      </PrivateRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute adminOnly={true}>
        <Layout>
          <Dashboard />
        </Layout>
      </PrivateRoute>
    ),
  },
]);

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;