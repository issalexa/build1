import {useState,useEffect} from 'react';


const useStart = (callback,validate) => {
    const[values,setValue] = useState({
        firstname:'',
        lastname:'',
        company:'',
        email:'',
        password:'',
        confirmpassword:''
    });
    

    const [errors,setErrors] = useState({});

    const [isSubmitting,setIsSubmitting] = useState(false);

    const handleChange = e => {
        const {name,value} = e.target
        setValue({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting)
        if(callback)
            callback();
    },[errors]);


    return{handleChange, values, handleSubmit,errors};
}

export default useStart;