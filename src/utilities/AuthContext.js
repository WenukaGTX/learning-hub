// AuthContext.js
import React, { useState, useContext, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe;
    }, []);

    async function initializeUser(user) {
        if (user) {
            setCurrentUser({ ...user });
            isLoggedIn(true);
        } else {
            setCurrentUser(null);
            isLoggedIn(false);
        }
        setAuthLoading(false);
    };

    const login = () => {
        // Perform login logic
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
    };

    const logout = () => {
        // Perform logout logic
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, currentUser, authLoading, login, logout }}>
            {!authLoading && children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    return useContext(AuthContext);
};