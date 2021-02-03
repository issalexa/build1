import React from 'react';
import useStart from './useLogIn';
import validate from './validateLogIn';
import './Start.css';
import {Link } from "react-router-dom";

const StartLogIn = ({submitStart}) => {

    const {handleChange, values, handleSubmit, errors} 
    = useStart(submitStart,validate);

    return (  
            <div className="form-content-right">
            <form className="form" onSubmit= {handleSubmit}>
                <span className="spnCreateAccount">Sign in </span>
                <div>
                    <div className="form-content1">
                        <div className="form-inputs">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input id="email" type="email" name="email" className="form-input" placeholder="Type email" value={values.email} onChange={handleChange}></input>
                            {errors.email && <p>{errors.email}</p>}
                        </div>
                    </div>
                    <div  className="form-content1">
                        <div className="form-inputs">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input id="password" type="password" name="password" className="form-input" placeholder="Type password" value={values.password} onChange={handleChange}></input>
                            {errors.password && <p>{errors.password}</p>}
                        </div>
                    </div>
                </div>
                    <button className="form-input-btn" type="submit"><span className="txtSignUp">Sign in</span></button>
                    <span className="form-input-login">Don't have an account yet? <Link to="/">Sign up</Link></span>
            </form>
        </div>    
    )
}

export default StartLogIn
