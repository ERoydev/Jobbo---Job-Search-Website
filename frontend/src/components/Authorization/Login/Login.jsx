import BackButton from "../BackButton";

export default function Login() {

    return (
        <div className="authorization">
            <BackButton />
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