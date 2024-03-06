import SignupFormOne from "./Forms/SignupFormOne.jsx";
import SignupFormTwo from "./Forms/SignupFormTwo.jsx";
import SignupFormThreeEmployee from "./Forms/SignupFormThreeEmployee.jsx";
import SignupSteps from "./Steps/SignupSteps.jsx";

import BackButton from "../BackButton.jsx";
import { useEffect, useState } from "react";
import { useRef } from "react";

export default function Signup() {
    const [forms, setForms] = useState([]);
    const formRefs = useRef({ container: null, form1: null, form2: null, form3: null, progress: null });

    const formSubmitHandler = (e) => {
        e.preventDefault();

        console.log(formRefs.current.form1)
        console.log(formRefs.current.form2)
        console.log(formRefs.current.form3)
    }

    return (
        <div className="authorization">
            <BackButton />

            <div className="auth-container" ref={(element) => {formRefs.current.container = element; }}>

                <SignupFormOne formSubmitHandler={formSubmitHandler} formRefs={formRefs}/>

                <SignupFormTwo formSubmitHandler={formSubmitHandler} formRefs={formRefs}/>

                <SignupFormThreeEmployee formSubmitHandler={formSubmitHandler} formRefs={formRefs} />

                <SignupSteps formSubmitHandler={formSubmitHandler} formRefs={formRefs}/>

            </div>
        </div>

    );
}

