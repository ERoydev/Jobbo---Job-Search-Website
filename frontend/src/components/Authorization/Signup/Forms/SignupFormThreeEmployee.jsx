import { backTwo } from "../Steps/StepsIndicator";

export default function SignupFormThreeEmployee ({
    formValue,
    formRefs,
    onChangeHandler,
    formSubmitHandler,
}) {
    return (
        <form name="employee" id="form3" onSubmit={formSubmitHandler} ref={(element) => { formRefs.current.form3 = element; }}>
            <h3>Personal Information</h3>
            <input type="text" placeholder="Full Name" name="universal_name" value={formValue.universal_name} onChange={onChangeHandler} />
            <input type="text" placeholder="Country" name="country" value={formValue.country} onChange={onChangeHandler} />
            <input type="text" placeholder="City" name="city" value={formValue.city} onChange={onChangeHandler} />
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