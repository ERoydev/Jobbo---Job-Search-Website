import SignupFormOne from "./Forms/SignupFormOne.jsx";
import SignupFormTwo from "./Forms/SignupFormTwo.jsx";
import SignupFormThreeEmployee from "./Forms/SignupFormThreeEmployee.jsx";
import SignupFormThreeEmployer from "./Forms/SignupFormThreeEmployer.jsx";
import SignupSteps from "./Steps/SignupSteps.jsx";

import BackButton from "../BackButton.jsx";
import { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import useForm from "../../../hooks/useForm.js";
import AuthContext from "../../../contexts/AuthContext";
import useValidator from "../../../hooks/useValidator.js";

const initialFormValues = {
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    city: '',
    role: '',
    universal_name: '',
}

export default function Signup() {
    const formRefs = useRef({ container: null, form1: null, form2: null, form3: null, progress: null });
    const { registerSubmitHandler, failedRegister, setFailedRegister } = useContext(AuthContext);
    const {values, onChange, onSubmit, onClickChange} = useForm(registerSubmitHandler, initialFormValues);
    const [userType, setUserType] = useState('');
    const {errors, setErrorMessage, removeErrorMessage, validateEmailHandler, validatePasswordHandler} = useValidator(initialFormValues);

    const userTypeClickHandler = (result) => {
        setUserType(result);
    }


    return (
        <div className="authorization">
            <BackButton />

            <div className="auth-container" ref={(element) => {formRefs.current.container = element; }}>

                <SignupFormOne 
                    formRefs={formRefs} 
                    userTypeClickHandler={userTypeClickHandler} 
                    onClickChange={onClickChange} 
                />

                <SignupFormTwo 
                    formRefs={formRefs} 
                    formValue={values} 
                    onChangeHandler={onChange} 
                    errors={errors} 
                    emailValidator={validateEmailHandler} 
                    passwordValidator={validatePasswordHandler}
                />

                {userType === "Employee" && <SignupFormThreeEmployee 
                                                formSubmitHandler={onSubmit} 
                                                formValue={values} 
                                                formRefs={formRefs} 
                                                onChangeHandler={onChange} 
                                                errors={errors}
                                                failedRegister={failedRegister}
                                                setFailedRegister={setFailedRegister}
                                            />}

                {userType === "Employer" && <SignupFormThreeEmployer 
                                                formSubmitHandler={onSubmit} 
                                                formValue={values} 
                                                formRefs={formRefs} 
                                                onChangeHandler={onChange} 
                                            />}

                <SignupSteps 
                    formRefs={formRefs}
                />

            </div>
        </div>

    );
}

