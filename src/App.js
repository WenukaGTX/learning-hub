import React, { useEffect } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import './App.scss';
import FooterSection from './components/Footer';
import Navbar from "./components/Navbar";
import CourseDetails from "./pages/courseDetails";
import Home from "./pages/home";
import SignUp from "./pages/signUp";
import { AuthProvider, useAuth } from './utilities/AuthContext';
import Login from './pages/login';
import { PublicClientApplication } from '@azure/msal-browser';

function App() {
  const { setIsLoggedIn } = useAuth();

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');

    if (storedIsLoggedIn === 'true') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <Router>
      <Navbar type='light' position='sticky' />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/course-details/:id" element={<CourseDetails />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <FooterSection />
    </Router>
  );
}

const WrappedApp = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

export default WrappedApp;