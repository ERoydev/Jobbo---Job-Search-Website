import BackButton from "../BackButton.jsx";
import { nextOne,stepsIndicator } from "../Signup/StepsIndicator.js";

import '../Signup/StepsIndicator.js';
import { useEffect } from "react";
// TODO

export default function Signup() {

    useEffect(() => {
        stepsIndicator();
    }, [])

    return (
        <div className="authorization">
            <BackButton />

            <div className="auth-container">

                <form id="form1">
                <h3>What are you going to do ?</h3>
                <input type="button" defaultValue="Find job" />
                <input type="button" defaultValue="Find employees" />
                <div className="btn-box">
                    <button type="button" id="next1" onClick={nextOne}>
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

