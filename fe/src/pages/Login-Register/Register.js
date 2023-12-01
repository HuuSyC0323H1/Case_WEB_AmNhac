import Img from '../../assets/images/logoNew.svg';
import './css/auth.css'
import {Link} from "react-router-dom";
import Weather from "./Weather";
export default function Register(){
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
                                        <input type="text" className="form-control" name="" placeholder="First Name"/>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="" placeholder="Last Name"/>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-4">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="" placeholder="Email Address"/>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-4">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="" placeholder="Phone Number"/>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="form-group">
                                        <select name="" id="" className="form-control">
                                            <option value="">- Select Day -</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="form-group">
                                        <select name="" id="" className="form-control">
                                            <option value="">- Select Month -</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="form-group">
                                        <select name="" id="" className="form-control">
                                            <option value="">- Select Year -</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-2">
                                    <div className="form-group">
                                        <input type="password" className="form-control" name="" placeholder="Password"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="password" className="form-control" name="" placeholder="Confirm Password"/>
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
                                        <button type="button" className="btn btn-primary sign-up">Sign Up</button>
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