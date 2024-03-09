import { backTwo } from "../Steps/StepsIndicator";

export default function SignupFormThreeEmployer ({
    formValue,
    formRefs,
    onChangeHandler,
}) {
    return (
        <form name="employee" id="form3" ref={(element) => { formRefs.current.form3 = element; }}>
            <h3>Personal Information</h3>
            <input type="text" placeholder="Company Name" name="companyName" value={formValue.companyName} onChange={onChangeHandler}/>
            <input type="text" placeholder="Country" name="country" value={formValue.country} onChange={onChangeHandler}/>
            <input type="text" placeholder="City" name="city" value={formValue.city} onChange={onChangeHandler}/>
            <div className="btn-box">
                <button type="button" id="back2" onClick={(e) => backTwo(e, formRefs)}>
                    Back
                </button>
                <button type="submit" id="next3" onSubmit={formSubmitHandler}>
                    Register
                </button>
            </div>
        </form>
    );
}