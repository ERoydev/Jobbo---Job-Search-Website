import SignupFormOne from "./Forms/SignupFormOne.jsx";
import SignupFormTwo from "./Forms/SignupFormTwo.jsx";
import SignupFormThreeEmployee from "./Forms/SignupFormThreeEmployee.jsx";
import SignupSteps from "./Steps/SignupSteps.jsx";

import BackButton from "../BackButton.jsx";
import { useEffect, useState } from "react";
import { useRef } from "react";

const initialFormValues = {
    userType: '',

}

export default function Signup() {
    const formRefs = useRef({ container: null, form1: null, form2: null, form3: null, progress: null });
    const [formValues, setFormValues] = useState(initialFormValues);
    const [userType, setUserType] = useState('');

    const formSubmitHandler = (e) => {
        e.preventDefault();
    }

    const onChangeHandler = (e) => {
        e.preventDefault();

        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <div className="authorization">
            <BackButton />

            <div className="auth-container" ref={(element) => {formRefs.current.container = element; }}>

                <SignupFormOne formRefs={formRefs} onChangeHandler={onChangeHandler} />

                <SignupFormTwo formRefs={formRefs} onChangeHandler={onChangeHandler} />

                <SignupFormThreeEmployee formRefs={formRefs} onChangeHandler={onChangeHandler} />

                <SignupSteps formRefs={formRefs}/>

            </div>
        </div>

    );
}

