import { useContext, useState } from "react";
import BackButton from "../BackButton";
import AuthContext from "../../../contexts/AuthContext";
import useForm from "../../../hooks/useForm";
import useValidator from "../../../hooks/useValidator";

const initialValues = {
    email: '',
    password: '',
}

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, initialValues);
    const { errors, setErrorMessage, removeErrorMessage, validateEmailHandler} = useValidator(initialValues);

    return (
        <div className="authorization">
            <BackButton />
            <div className="login-container">
                <form onSubmit={onSubmit}>
                    <h3>Login</h3>
                    <input type="email" placeholder="Email" name="email" value={values.email} onChange={onChange} onBlur={validateEmailHandler}/>
                    <input type="password" placeholder="Password" name="password" value={values.password} onChange={onChange}/>
                   
                    {errors.email && <p className="formError">{errors.email}</p>}
                    <div className="btn-box">
                        <button type="submit">Log in</button>
                    </div>
                </form>
            </div>
        </div>

    );
}