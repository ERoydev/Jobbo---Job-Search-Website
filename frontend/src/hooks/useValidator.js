import { useState } from "react";

export default function useValidator(initialValues) {
    const [errors, setErrors] = useState(initialValues);

    const setErrorMessage = (property, message) => {
        setErrors(state => ({
            ...state,
            [property]: message
        }))
    }

    const validateEmailHandler = (e) => {
        const email = e.target.value;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let errorMessage; 

        if (!email) {
            errorMessage = 'Email is required.';  
        } else if (!emailRegex.test(email)) {
            errorMessage = 'Please enter a valid email address.';  
        }

        if (errorMessage) {
            setErrorMessage('email', errorMessage);

        } else {
            removeErrorMessage('email');
        }
    }

    const validatePasswordHandler = (password, confirmPassword) => {
        let errorMessage;

        if (password.length < 12) {
            errorMessage = 'Password must be at least 12 characters';
        } else if (password !== confirmPassword) {
            errorMessage = 'Passwords do not match.'
        } else {
            errorMessage = '';
        }

        if (errorMessage) {
            setErrorMessage('password', errorMessage);

        } else {
            removeErrorMessage('password');
        }
    }

    const removeErrorMessage = (property) => {
        setErrors(state => ({
            ...state,
            [property]: ''
        }))
    }

    return {
        errors,
        setErrorMessage,
        removeErrorMessage,
        validateEmailHandler,
        validatePasswordHandler,
    }
}