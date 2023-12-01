import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from "axios";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    );

    const login = async (loginData) => {
        try {
            const res = await axios.post("http://localhost:8080/api/auth/login", loginData);
            setIsLoggedIn(true);
            console.log('Đăng nhập thành công:', res.data);
        } catch (error) {
            console.error('Đăng nhập thất bại:', error.response ? error.response.data : error.message);
        }
    };

    const logout = () => {
        setIsLoggedIn(false);
    };

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};