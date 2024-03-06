import { backTwo } from "../Steps/StepsIndicator";

export default function SignupFormThreeEmployer ({
    formRefs,
    onChangeHandler,
}) {
    return (
        <form name="employee" id="form3" ref={(element) => { formRefs.current.form3 = element; }}>
            <h3>Personal Information</h3>
            <input type="text" placeholder="Company Name" />
            <input type="text" placeholder="Country" />
            <input type="text" placeholder="City" />
            <div className="btn-box">
                <button type="button" id="back2" onClick={(e) => backTwo(e, formRefs)}>
                    Back
                </button>
                <button type="submit" id="next3">
                    Register
                </button>
            </div>
        </form>
    );
}