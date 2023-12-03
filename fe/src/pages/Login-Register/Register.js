import Img from '../../assets/images/logoNew.svg';
import './css/auth.css'
import {Link, useNavigate} from "react-router-dom";
import Weather from "./Weather";
import React, {useContext, useState} from "react";
import {AuthContext} from "../../context/authContext";
const Register = () =>{
    const [signUpData,setSignUpData] = useState({firstName: '',lastName:'',email:'',password:'',confirmPassword:''})
    const {signup} = useContext(AuthContext);
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const handleInputChange = (e) => {
        setSignUpData((prev) => (
            {...prev, [e.target.name]: e.target.value}));
    }

    const handleValidateEmail = (e) => {
        if (e.target.name === 'email'){
            const addressMailRegExp = /([^<>()\[\]\\.,;:\s+@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+")/;
            const characterRegExp = /@/;
            const domainRegExp = /(gmail\.com|example\.com\.vn|microsoft\.com\.vn)/;
            const emailLength = e.target.value.length;
            const addressMail = addressMailRegExp.test(e.target.value);
            const character = characterRegExp.test(e.target.value);
            const domain = domainRegExp.test(e.target.value);

            let ErrMsg;
            if (emailLength === 0) {
                ErrMsg = 'Email is empty';
            } else if (!addressMail) {
                ErrMsg = 'Invalid email format';
            } else if (!character) {
                ErrMsg = 'Missing "@" symbol';
            } else if (!domain) {
                ErrMsg = 'Invalid domain. Only accepted domain names are: gmail.com, example.com.vn, microsoft.com.vn';
            }

            setEmailError(ErrMsg);
        }
    };

    const handleValidationPassword = (e) => {
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
        if (e.target.name === 'confirmPassword' || e.target.name === 'password'){
            if (signUpData.confirmPassword !== signUpData.password){
                setConfirmPasswordError('Confirm password is not matched')
            }else {
                setConfirmPasswordError("");
            }
        }
    };

    const handleSignUp = async () =>{
        try {
            await signup(signUpData);
            navigate('/login')
        }catch (error) {
            console.error('Login failed:', error.response ? error.response.data : error.message);
        }
    }

    return(
        <>
            <div className="row ht-100v flex-row-reverse no-gutters">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="signup-form">
                        <div className="auth-logo text-center mb-2">
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={Img} className="logo-img" alt="Logo"/>
                                </div>
                                <div className="col-md-7">
                                    <p>SoundSculpt</p>
                                    <span>Enjoy The Sublime</span>
                                </div>
                            </div>
                        </div>
                        <form action="" method="" className="pt-5">
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="firstName" placeholder="First Name"
                                             value={signUpData.firstName}  onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="lastName" placeholder="Last Name"
                                              value={signUpData.lastName} onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12 mb-4">
                                    <div className="form-group">
                                        <input type="text" className={`form-control ${emailError ? 'is-invalid' : ''}`} name="email" placeholder="Email Address"
                                              value={signUpData.email} onChange={(e) => {
                                                  handleInputChange(e);
                                                  handleValidateEmail(e)
                                              }
                                        }
                                        />
                                        {emailError && <div className="invalid-feedback" style={{fontSize:"16px",color:"red"}}>{emailError}</div>}
                                    </div>
                                </div>
                                <div className="col-md-6 mb-2">
                                    <div className="form-group">
                                        <input type="password" className={`form-control ${passwordError ? 'is-invalid' : ''}`} name="password" placeholder="Password"
                                              value={signUpData.password} onChange={(e) => {
                                                  handleInputChange(e);
                                                  handleValidationPassword(e)
                                              }
                                        }
                                        />
                                        {passwordError && <div className="invalid-feedback" style={{fontSize:"16px"}}>{passwordError}</div>}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="password" className={`form-control ${confirmPasswordError ? 'is-invalid' : ''}`} name="confirmPassword" placeholder="Confirm Password"
                                              value={signUpData.confirmPassword} onChange={(e) => {
                                                    handleInputChange(e);
                                                    handleValidationPassword(e)
                                              }
                                        }
                                        />
                                        {confirmPasswordError && <div className="invalid-feedback" style={{fontSize:"16px"}}>{confirmPasswordError}</div>}
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <p className="agree-privacy">By clicking the Sign Up button below you agreed to our privacy policy and terms of use of our website.</p>
                                </div>
                                <div className="col-md-6">
                                    <span className="go-login">Already a member? <Link to="/login">Sign In</Link></span>
                                </div>
                                <div className="col-md-6 text-right">
                                    <div className="form-group">
                                        <button type="button" className="btn btn-primary sign-up"
                                                       onClick={handleSignUp} >Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-6 auth-bg-image d-flex justify-content-center align-items-center">
                    <div className="auth-left-content mt-5 mb-5 text-center">
                        <Weather/>
                        <div className="text-white mt-5 mb-5">
                            <h2 className="create-account mb-3">Create Account</h2>
                            <p>Enter your personal details and start journey with us.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register;