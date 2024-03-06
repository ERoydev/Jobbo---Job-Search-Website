import { backOne, backTwo, nextTwo } from "../Steps/StepsIndicator";

export default function SignupFormTwo({
    formSubmitHandler,
    formRefs,
}) {
    return (
        <form id="form2" onSubmit={formSubmitHandler} ref={(element) => { formRefs.current.form2 = element; }}>
            <h3>Create Account</h3>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <input type="text" placeholder="Confirm Password" />
            <div className="btn-box">
                <button type="button" id="back1" onClick={(e) => backOne(e, formRefs)}>
                Back
                </button>
                <button type="submit" id="next2" onClick={(e) => nextTwo(e, formRefs)}>
                Next
                </button>
            </div>
        </form>

    );
}