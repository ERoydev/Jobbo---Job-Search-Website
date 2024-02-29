import { useNavigate } from "react-router-dom";

export default function Signup() {
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
        <div className="auth-container">
            <form id="form1">
            <h3>What are you going to do ?</h3>
            <input type="button" defaultValue="Find job" />
            <input type="button" defaultValue="Find employees" />
            <div className="btn-box">
                <button type="button" id="next1">
                Next
                </button>
            </div>
            </form>
            <form id="form2">
            <h3>Create Account</h3>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <input type="text" placeholder="Confirm Password" />
            <div className="btn-box">
                <button type="button" id="back1">
                Back
                </button>
                <button type="button" id="next2">
                Next
                </button>
            </div>
            </form>
            <form name="employee" id="form3">
            <h3>Personal Information</h3>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Location" />
            <div className="btn-box">
                <button type="button" id="back2">
                Back
                </button>
                <button type="button" id="next3">
                Next
                </button>
            </div>
            </form>
            <div className="step-row">
            <div id="progress" />
            <div className="step-col">
                <small>Step 1</small>
            </div>
            <div className="step-col">
                <small>Step 2</small>
            </div>
            <div className="step-col">
                <small>Step 3</small>
            </div>
            </div>
        </div>
    </div>

    );
}