import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from "axios";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    );

    const login = async (loginData) => {
        try {
            await axios.post("http://localhost:8080/api/auth/login", loginData);
            setIsLoggedIn(true);
        } catch (error) {
            setIsLoggedIn(false);

        }
    };

    const logout = async () => {
        try {
            await axios.post('http://localhost:8080/api/auth/signout');
            setIsLoggedIn(false);
            localStorage.removeItem('user');
        }catch (error){
            console.error('abc',error.response ? error.response.data : error.message)
        }
    };

    const signup = async (signUpData) => {
        try {
             await axios.post('http://localhost:8080/api/auth/signup',signUpData)
        }catch (error){
            console.error("dang ky khong thanh cong", error.response ? error.response.date : error.message)
        }
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout,signup }}>
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