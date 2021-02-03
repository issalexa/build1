import React,{useState} from 'react'
import StartLogIn from './StartLogIn'
import StartEmpty from './StartEmpty'
import './Start.css'

const LogIn = () => {

    const [isSubmitted,setIsSubmitted] = useState(false);

    function submitStart(){
        setIsSubmitted(true);
    }

    return (
        <div className="form-container">
        {!isSubmitted ? (<StartLogIn submitStart={submitStart}/>) : (<StartEmpty/>)} 
    </div>
    )
}

export default LogIn

