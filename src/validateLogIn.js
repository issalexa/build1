export default function validateLogIn(values){
    let errors={}

    if(!values.email.trim()){
        errors.email = "Email required";
    }
    else{
        if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)){
            errors.email = "Email address is invalid";
        }
    }
    if(!values.password.trim()){
        errors.password = "Password required";
    }
    else if(values.password.length < 8){
        errors.password = "Password needs to be 6 characters or more";
    }

    return errors;
}