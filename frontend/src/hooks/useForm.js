import { useState } from "react";

export default function useForm(submitHandler, initialValues) {
    const [values, setValues] = useState(initialValues);

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const onChangeDraft = (name, value) => {
        setValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submitHandler(values);
    }
    
    const onClickChange = (e) => {
        e.preventDefault();
        const typeOfUser = e.target.classList[0];
        setValues(state => ({
            ...state,
            role: typeOfUser
        }))
    }

    return {
        values,
        onChange,
        onSubmit,
        onClickChange,
        onChangeDraft,
    }
}