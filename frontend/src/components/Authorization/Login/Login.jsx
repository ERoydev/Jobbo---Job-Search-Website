import { useContext } from "react";
import BackButton from "../BackButton";
import AuthContext from "../../../contexts/AuthContext";
import useForm from "../../../hooks/useForm";

const initialValues = {
    email: '',
    password: '',
}

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext).values;
    const { values, onChange } = useForm(initialValues);

    return (
        <div className="authorization">
            <BackButton />
            <div className="login-container">
                <form onSubmit={loginSubmitHandler}>
                    <h3>Login</h3>
                    <input type="text" placeholder="Email" name="email" value={values.email} onChange={onChange} />
                    <input type="text" placeholder="Password" name="password" value={values.password} onChange={onChange} />
                    <div className="btn-box">
                        <button type="submit">Log in</button>
                    </div>
                </form>
            </div>
        </div>

    );
}