import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    );

    const login = async (loginData) => {
        try {
            const response = await axios.post(
                'http://localhost:8080/api/auth/login',
                loginData
            );
            setIsLoggedIn(true);
            localStorage.setItem('user', JSON.stringify(response.data));
            return response;
        } catch (error) {
            setIsLoggedIn(false);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await axios.post('http://localhost:8080/api/auth/signout');
            setIsLoggedIn(false);
            localStorage.removeItem('user');
        } catch (error) {
            console.error(
                'Error logging out',
                error.response ? error.response.data : error.message
            );
        }
    };

    const signup = async (signUpData) => {
        try {
            await axios.post('http://localhost:8080/api/auth/signup', signUpData);
        } catch (error) {
            console.error(
                'Error signing up',
                error.response ? error.response.data : error.message
            );
        }
    };

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, signup }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};