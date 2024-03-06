import { nextOne } from "../Steps/StepsIndicator";

export default function SignupFormOne({
    formRefs,
    onChangeHandler,
}) {

    const selectInputHandler = (e) => {
        e.preventDefault();
        console.log(e.target.value);
    }

    return (
        <form id="form1" ref={(element) => { formRefs.current.form1 = element; }}>
            <h3>What are you going to do ?</h3>
            <input type="button" name="userType" value="Find job" onClick={selectInputHandler}/>
            <input type="button" name="userType" value="Find employees" onClick={selectInputHandler}/>
            <div className="btn-box">
                <button type="button" id="next1" onClick={(e) => nextOne(e, formRefs)}>
                Next
                </button>
            </div>
        </form>
    );
}   