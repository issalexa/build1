import {useState,useEffect} from 'react';

const useLogIn = (callback,validate) => {
    const[values,setValue] = useState({
        email:'',
        password:''
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
        callback();
    },[errors])


    return{handleChange, values, handleSubmit,errors};
}

export default useLogIn;