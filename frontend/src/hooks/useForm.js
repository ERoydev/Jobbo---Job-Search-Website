import { useState } from "react";

export default function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    // const onSubmit = () => {
    //     e.preventDefault();
    //     submitHandler(values);
    // }   

    return {
        values,
        onChange,
    }
}