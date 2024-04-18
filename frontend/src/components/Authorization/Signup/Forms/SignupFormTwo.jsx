import { useState, useEffect } from "react";
import { backOne, backTwo, nextTwo } from "../Steps/StepsIndicator";

export default function SignupFormTwo({
    formValue,
    formRefs,
    onChangeHandler,
    errors,
    emailValidator,
    passwordValidator,
}) {
    const [showButton, setShowButton] = useState(true);

    const passwordConfirmHandler = (e) => {
        const password = document.querySelector('input[name="password"]').value;
        const confirmPassword = document.querySelector('input[name="confirmPassword"]').value;
        passwordValidator(password, confirmPassword);
    } 
    
    useEffect(() => {
        if (!errors.email && !errors.password) {
            setShowButton(false);
        } else {
            setShowButton(true);
        }
    }, [errors])

    return (
        <form id="form2" ref={(element) => { formRefs.current.form2 = element; }}>
            <h3>Create Account</h3>
            <input type="email" placeholder="Email" name='email' value={formValue.email} onChange={onChangeHandler} onBlur={emailValidator}/>
            <input type="password" placeholder="Password" name='password' value={formValue.password} onChange={onChangeHandler} onBlur={passwordConfirmHandler}/>
            <input type="password" placeholder="Confirm Password" name='confirmPassword' value={formValue.confirmPassword} onChange={onChangeHandler} onBlur={passwordConfirmHandler} />

            {errors.email && <p className="formError">{errors.email}</p>}
            {errors.password && <p className="formError">{errors.password}</p>}
            
            <div className="btn-box">

                <button type="button" id="back1" onClick={(e) => backOne(e, formRefs)}>
                    Back
                </button>

                <button type="button" disabled={showButton} id="next2" onClick={(e) => nextTwo(e, formRefs)}>
                    Next
                </button>
            </div>

        </form>
    );
}