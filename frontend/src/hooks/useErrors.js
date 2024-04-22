import { useState } from "react";

export default function useErrors(initialValues) {
    const [error, setErrorMessage] = useState(initialValues);

    const handleError = (property, errorMessage) => {
        setErrorMessage(state => ({
            ...state,
            [property]: errorMessage
        }))
    }

    const clearError = (property) => {
        setErrorMessage(state => ({
            ...state,
            [property]: ''
        }))
    }

    return {
        error,
        handleError,
        clearError,
    }
}