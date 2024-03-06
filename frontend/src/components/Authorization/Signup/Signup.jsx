import BackButton from "../BackButton.jsx";
import { nextOne, stepsIndicator } from "./Steps/StepsIndicator.js";

import './Steps/StepsIndicator.js';
import { useEffect } from "react";
import SignupFormOne from "./Forms/SignupFormOne.jsx";
import SignupFormTwo from "./Forms/SignupFormTwo.jsx";
import SignupFormThreeEmployee from "./Forms/SignupFormThreeEmployee.jsx";
import SignupSteps from "./Steps/SignupSteps.jsx";
// TODO

export default function Signup() {

    return (
        <div className="authorization">
            <BackButton />

            <div className="auth-container">

                <SignupFormOne />

                <SignupFormTwo />

                <SignupFormThreeEmployee />

                <SignupSteps />

            </div>
        </div>

    );
}

