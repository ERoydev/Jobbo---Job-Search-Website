import SignupFormOne from "./Forms/SignupFormOne.jsx";
import SignupFormTwo from "./Forms/SignupFormTwo.jsx";
import SignupFormThreeEmployee from "./Forms/SignupFormThreeEmployee.jsx";
import SignupFormThreeEmployer from "./Forms/SignupFormThreeEmployer.jsx";
import SignupSteps from "./Steps/SignupSteps.jsx";

import BackButton from "../BackButton.jsx";
import { useEffect, useState } from "react";
import { useRef } from "react";

const initialFormValues = {

}

export default function Signup() {
    const formRefs = useRef({ container: null, form1: null, form2: null, form3: null, progress: null });
    const [formValues, setFormValues] = useState(initialFormValues);
    const [userType, setUserType] = useState('');

    const userTypeClickHandler = (result) => {
        setUserType(result);
    }

    const onChangeHandler = (e) => {
        e.preventDefault();

        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className="authorization">
            <BackButton />

            <div className="auth-container" ref={(element) => {formRefs.current.container = element; }}>

                <SignupFormOne formRefs={formRefs} onChangeHandler={onChangeHandler} userTypeClickHandler={userTypeClickHandler} />

                <SignupFormTwo formRefs={formRefs} onChangeHandler={onChangeHandler} />

                {userType === "Employee" && <SignupFormThreeEmployee formRefs={formRefs} onChangeHandler={onChangeHandler} />}
                {userType === "Employer" && <SignupFormThreeEmployer formRefs={formRefs} onChangeHandler={onChangeHandler} />}

                <SignupSteps formRefs={formRefs}/>

            </div>
        </div>

    );
}

