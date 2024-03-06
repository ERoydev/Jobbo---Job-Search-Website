import { nextOne } from "../Steps/StepsIndicator";

export default function SignupFormOne({
    formRefs,
}) {

    return (
        <form id="form1" ref={(element) => { formRefs.current.form1 = element; }}>
            <h3>What are you going to do ?</h3>
            <input type="button" value="Find job" />
            <input type="button" value="Find employees" />
            <div className="btn-box">
                <button type="submit" id="next1" onClick={(e) => nextOne(e, formRefs)}>
                Next
                </button>
            </div>
        </form>
    );
}