import React, {useState, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {AuthContext, useAuth} from '../../context/authContext';
import Weather from './Weather';

import Img from '../../assets/images/logoNew.svg';
import './css/auth.css';

export default function Login() {
    const [loginData, setLoginData] = useState({ userName: '', password: '' });
    const {isLoggedIn} = useAuth();
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleValidation = (e) => {
        if (e.target.name === 'password') {
            const uppercaseRegExp = /(?=.*?[A-Z])/;
            const lowercaseRegExp = /(?=.*?[a-z])/;
            const digitsRegExp = /(?=.*\d)/;
            const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
            const minLengthRegExp = /[A-Za-z\d@$!%*?&-_]{8,}/;
            const passwordLength = e.target.value.length;
            const uppercasePassword = uppercaseRegExp.test(e.target.value);
            const lowercasePassword = lowercaseRegExp.test(e.target.value);
            const digitsPassword = digitsRegExp.test(e.target.value);
            const specialCharPassword = specialCharRegExp.test(e.target.value);
            const minLengthPassword = minLengthRegExp.test(e.target.value);

            let errMsg = '';
            if (passwordLength === 0) {
                errMsg = 'Password is empty';
            } else if (!uppercasePassword) {
                errMsg = 'At least one uppercase letter required';
            } else if (!lowercasePassword) {
                errMsg = 'At least one lowercase letter required';
            } else if (!digitsPassword) {
                errMsg = 'Requires at least one digit';
            } else if (!specialCharPassword) {
                errMsg = 'Requires at least one special character from the list: @, $, !, %, *, ?, &, -, _';
            } else if (!minLengthPassword) {
                errMsg = 'Requires a minimum length of 8 characters and can contain letters, numbers, and special characters from the list';
            }
            setPasswordError(errMsg);
        }
    };

    const handleInputChange = (e) => {
        setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(loginData);
            if (isLoggedIn){
                navigate('/')
            }else {
                setPasswordError("Invalid username or password")
            }
        } catch (error) {
            setPasswordError('An error occurred during login');
        }
    };

    return (
        <>
            <div className="row ht-100v flex-row-reverse no-gutters">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="signup-form">
                        <div className="auth-logo text-center mb-5">
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={Img} className="logo-img" alt="Logo" />
                                </div>
                                <div className="col-md-7">
                                    <p>SoundSculpt</p>
                                    <span>Enjoy the sublime</span>
                                </div>
                            </div>
                        </div>
                        <form>
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="userName"
                                            placeholder="UserName or Email"
                                            value={loginData.userName}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12 mb-2">
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                                            name="password"
                                            placeholder="Password"
                                            value={loginData.password}
                                            onChange={(e) => {
                                                handleInputChange(e);
                                                handleValidation(e);
                                            }}
                                        />
                                        {passwordError && <div className="invalid-feedback" style={{fontSize:"16px"}}>{passwordError}</div>}
                                    </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <a>Forgot password?</a>
                                </div>
                                <div className="col-md-6">
                                    <label className="custom-control material-checkbox">
                                        <input
                                            type="checkbox"
                                            className="material-control-input"
                                            style={{ marginRight: '10px' }}
                                        />
                                        <span className="material-control-indicator"></span>
                                        <span className="material-control-description">Remember Me</span>
                                    </label>
                                </div>
                                <div className="col-md-6 text-right">
                                    <div className="form-group">
                                        <button type="button" className="btn btn-primary sign-up" onClick={handleLogin}>
                                            Sign In
                                        </button>
                                    </div>
                                </div>
                                <div className="col-md-12 text-center mt-4">
                                    <p className="text-muted">Start using your fingerprint</p>
                                    <a
                                        className="btn btn-outline-primary btn-smsign-up"
                                        data-toggle="modal"
                                        data-target="#fingerprintModal"
                                    >
                                        Use Fingerprint
                                    </a>
                                </div>
                                <div className="col-md-12 text-center mt-5">
                  <span className="go-login">
                    Not yet a member? <Link to="/register">Sign Up</Link>{' '}
                  </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-6 auth-bg-image d-flex justify-content-center align-items-center">
                    <div className="auth-left-content mt-5 mb-5 text-center">
                        <Weather />
                        <div className="text-white mt-5 mb-5">
                            <h2 className="create-account mb-3">Welcome Back</h2>
                            <p>Thank you for joining. Updates and new features are released daily.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}