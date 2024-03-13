import { useContext } from "react";
import BackButton from "../BackButton";
import AuthContext from "../../../contexts/AuthContext";
import useForm from "../../../hooks/useForm";

const initialValues = {
    email: '',
    password: '',
}

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, initialValues);

    return (
        <div className="authorization">
            <BackButton />
            <div className="login-container">
                <form onSubmit={onSubmit}>
                    <h3>Login</h3>
                    <input type="email" placeholder="Email" name="email" value={values.email} onChange={onChange} />
                    <input type="password" placeholder="Password" name="password" value={values.password} onChange={onChange} />
                    <div className="btn-box">
                        <button type="submit">Log in</button>
                    </div>
                </form>
            </div>
        </div>

    );
}