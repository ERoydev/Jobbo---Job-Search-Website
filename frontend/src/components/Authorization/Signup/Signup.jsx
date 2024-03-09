import SignupFormOne from "./Forms/SignupFormOne.jsx";
import SignupFormTwo from "./Forms/SignupFormTwo.jsx";
import SignupFormThreeEmployee from "./Forms/SignupFormThreeEmployee.jsx";
import SignupFormThreeEmployer from "./Forms/SignupFormThreeEmployer.jsx";
import SignupSteps from "./Steps/SignupSteps.jsx";

import BackButton from "../BackButton.jsx";
import { useEffect, useState } from "react";
import { useRef } from "react";
import useForm from "../../../hooks/useForm.js";

const initialFormValues = {
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    country: '',
    city: '',
    companyName: '',
}

export default function Signup() {
    const formRefs = useRef({ container: null, form1: null, form2: null, form3: null, progress: null });
    const {values, onChange} = useForm(initialFormValues);
    const [userType, setUserType] = useState('');

    const userTypeClickHandler = (result) => {
        setUserType(result);
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        
        console.log(values)
    }

    return (
        <div className="authorization">
            <BackButton />

            <div className="auth-container" ref={(element) => {formRefs.current.container = element; }}>

                <SignupFormOne formRefs={formRefs} userTypeClickHandler={userTypeClickHandler} />

                <SignupFormTwo formRefs={formRefs} formValue={values} onChangeHandler={onChange} />

                {userType === "Employee" && <SignupFormThreeEmployee formSubmitHandler={formSubmitHandler} formValue={values} formRefs={formRefs} onChangeHandler={onChange} />}
                {userType === "Employer" && <SignupFormThreeEmployer formSubmitHandler={formSubmitHandler} formValue={values} formRefs={formRefs} onChangeHandler={onChange} />}

                <SignupSteps formRefs={formRefs}/>

            </div>
        </div>

    );
}

