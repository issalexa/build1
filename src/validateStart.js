export default function validateStart(values){
    let errors={}
    if(!values.firstname.trim()){
        errors.firstname = "First name required";
    }
    if(!values.lastname.trim()){
        errors.lastname = "Last name required";
    }
    if(!values.company.trim()){
        errors.company = "Company required";
    }
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
    if(!values.confirmpassword.trim()){
        errors.confirmpassword = "Password confirmation required";
    }
    else if(values.confirmpassword !== values.password){
        errors.confirmpassword = "Passwords do not match";
    }
    return errors;
}