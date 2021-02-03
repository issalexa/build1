import React from 'react';
import useStart from './useStart';
import validate from './validateStart';
import './Start.css';
import {Link } from "react-router-dom";


const StartSignUp = ({submitStart}) => {

    const {handleChange, values, handleSubmit, errors} 
    = useStart(submitStart,validate);

    return (
       <div className="form-content-right">
           <form className="form" onSubmit= {handleSubmit}>
               <span className="spnCreateAccount">Create account </span>
                <div className="form-content1">
                    <div className="form-inputs">
                        <div className="form-inputs-left">
                            <label htmlFor="firstname" className="form-label">First name</label>
                            <input id="firstname" type="text" name="firstname" className="form-input" placeholder="Type first name" value={values.firstname} onChange={handleChange}></input>
                            <div className="lblError"> {errors.firstname}</div>
                            </div>
                    </div>
                    <div className="form-inputs">
                        <div className="form-inputs-right">
                            <label htmlFor="lastname" className="form-label">Last name</label>
                            <input id="lastname" type="text" name="lastname" className="form-input" placeholder="Type last name" value={values.lastname} onChange={handleChange}></input>
                            <div className="lblError"> {errors.lastname}</div>
                            </div>
                        </div>
                </div>
                <div className="form-content1">
                    <div className="form-inputs">
                        <div className="form-inputs-left">
                            <label htmlFor="company" className="form-label">Company</label>
                            <input id="company" type="text" name="company" className="form-input" placeholder="Type company" value={values.company} onChange={handleChange}></input>
                            <div className="lblError"> {errors.company}</div>
                        </div>
                    </div>
                    <div className="form-inputs">
                        <div className="form-inputs-right">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input id="email" type="email" name="email" className="form-input" placeholder="Type email" value={values.email} onChange={handleChange}></input>
                            <div className="lblError"> {errors.email}</div>
                        </div>
                    </div>
                </div>
                <div  className="form-content1">
                    <div className="form-inputs">
                        <div className="form-inputs-left">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input id="password" type="password" name="password" className="form-input" placeholder="Type password" value={values.password} onChange={handleChange}></input>
                            <div className="lblError"> {errors.password}</div>
                        </div>
                    </div>
                    <div className="form-inputs">
                        <div className="form-inputs-right">
                            <label htmlFor="confirmpassword" className="form-label">Confirm password</label>
                            <input id="confirmpassword" type="password" name="confirmpassword" className="form-input" placeholder="Type psssword" value={values.confirmpassword} onChange={handleChange}></input>
                            <div className="lblError"> {errors.confirmpassword}</div>
                        </div>
                    </div>
                </div>
                <button className="form-input-btn" type="submit"><span className="txtSignUp">Sign up</span></button>
                <span className="form-input-login">Already have an account? <Link to="/login">Sign in</Link></span>
           </form>
       </div>
    )
}

export default StartSignUp
