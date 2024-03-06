import { backTwo } from "../Steps/StepsIndicator";

export default function SignupFormThreeEmployee ({
    formSubmitHandler,
    formRefs,
}) {
    return (
        <form name="employee" id="form3" onSubmit={formSubmitHandler} ref={(element) => { formRefs.current.form3 = element; }}>
            <h3>Personal Information</h3>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Location" />
            <div className="btn-box">
                <button type="button" id="back2" onClick={(e) => backTwo(e, formRefs)}>
                Back
                </button>
                <button type="submit" id="next3">
                Next
                </button>
            </div>
        </form>
    );
}