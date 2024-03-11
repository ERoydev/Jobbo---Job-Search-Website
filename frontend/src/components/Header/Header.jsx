import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import Path from '../../Paths.js';

export default function Header() {
    const {isAuthenticated, email} = useContext(AuthContext).values;

    return (

    <header className="site-header">
        <div className="site-title">
            <p>
                <Link to="/">Jobbo</Link>
            </p>
        </div>
        <label htmlFor="nav-toggle" className="nav-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
        </label>
        <nav className="main-nav">
            <ul>
                <li className="links">
                    <Link to={Path.SearchJob}>Search for a job</Link>
                </li>
                <li className="links">
                    <Link to={Path.PostJob}>Post a job</Link>
                </li>
                <li className="links extra">
                    <a href="#">Contact us</a>
                </li>
                <li className="links extra">
                    <a href="#">About us</a>
                </li>

                {isAuthenticated && (
                    <li>
                        <Link to={Path.UserProfile} className="auth-btn myaccount-btn">My Account</Link>
                        <Link to={Path.Logout} className="auth-btn">Logout</Link>
                    </li>
                )}

                {!isAuthenticated && (
                    <>
                        <li>
                            <Link to={Path.Login} className="auth-btn">Log in</Link>
                        </li>
                        <li>
                            <Link to={Path.SignUp} className="auth-btn">Sign Up</Link>

                        </li>
                    </>
                )}
            </ul>
        </nav>
    </header>
    );
}