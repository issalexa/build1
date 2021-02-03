import React,{useState} from 'react'
import StartSignUp from './StartSignUp'
import StartEmpty from './StartEmpty'
import './Start.css'


const SignUp = () => {

    const [isSubmitted,setIsSubmitted] = useState(false);

function submitStart(){
    setIsSubmitted(true);
}
    return (
        <div className="form-container">
             {!isSubmitted ? (<StartSignUp submitStart={submitStart}/>) : (<StartEmpty/>)} 
         </div>
    )
}


export default SignUp
