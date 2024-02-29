import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const BackBtnHandler = () => {
        navigate("/")
    }
    return (
        <div className="authorization">
            <div className="back-btn" onClick={BackBtnHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z" />
                </svg>
            </div>
            <div className="login-container">
                <form>
                <h3>Login</h3>
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <div className="btn-box">
                    <button type="button">Log in</button>
                </div>
                </form>
            </div>
        </div>

    );
}