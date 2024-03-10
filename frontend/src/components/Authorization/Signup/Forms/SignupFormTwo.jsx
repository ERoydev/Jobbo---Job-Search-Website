import { backOne, backTwo, nextTwo } from "../Steps/StepsIndicator";

export default function SignupFormTwo({
    formValue,
    formRefs,
    onChangeHandler,
}) {

    return (
        <form id="form2" ref={(element) => { formRefs.current.form2 = element; }}>
            <h3>Create Account</h3>
            <input type="email" placeholder="Email" name='email' value={formValue.email} onChange={onChangeHandler} />
            <input type="password" placeholder="Password" name='password' value={formValue.password} onChange={onChangeHandler} />
            <input type="password" placeholder="Confirm Password" name='confirmPassword' value={formValue.confirmPassword} onChange={onChangeHandler} />
            <div className="btn-box">
                <button type="button" id="back1" onClick={(e) => backOne(e, formRefs)}>
                    Back
                </button>
                <button type="button" id="next2" onClick={(e) => nextTwo(e, formRefs)}>
                    Next
                </button>
            </div>
        </form>
    );
}