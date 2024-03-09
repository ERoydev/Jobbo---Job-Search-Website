import { backTwo } from "../Steps/StepsIndicator";

export default function SignupFormThreeEmployee ({
    formValue,
    formRefs,
    onChangeHandler,
    formSubmitHandler,
}) {
    return (
        <form name="employee" id="form3" ref={(element) => { formRefs.current.form3 = element; }}>
            <h3>Personal Information</h3>
            <input type="text" placeholder="Full Name" name="fullName" value={formValue.fullName} onChange={onChangeHandler} />
            <input type="text" placeholder="Country" name="country" value={formValue.country} onChange={onChangeHandler} />
            <input type="text" placeholder="City" name="city" value={formValue.city} onChange={onChangeHandler} />
            <div className="btn-box">
                <button type="button" id="back2" onClick={(e) => backTwo(e, formRefs)}>
                    Back
                </button>
                <button type="submit" id="next3" onClick={formSubmitHandler}>
                    Register
                </button>
            </div>
        </form>
    );
}