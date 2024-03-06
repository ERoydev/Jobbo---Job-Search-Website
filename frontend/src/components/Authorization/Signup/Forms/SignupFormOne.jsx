import { useState } from "react";
import { nextOne } from "../Steps/StepsIndicator";

export default function SignupFormOne({
    formRefs,
    userTypeClickHandler,
}) {
    const [clicked, setClicked] = useState(false);

    const selectInputHandler = (e) => {
        e.preventDefault();
        if (e.target.value === "Find job") { 
            e.target.classList.add('form-input-clicked')
            e.target.parentNode.querySelector('.employer').classList.remove('form-input-clicked');

            userTypeClickHandler("Employee")
            
        } else {
            e.target.classList.add('form-input-clicked')
            e.target.parentNode.querySelector('.employee').classList.remove('form-input-clicked');

            userTypeClickHandler("Employer")
        }
        setClicked(true);
    }

    return (
        <form id="form1" ref={(element) => { formRefs.current.form1 = element; }}>
            <h3>What are you going to do ?</h3>
            <input type="button" className="employee" value="Find job" onClick={selectInputHandler}/>
            <input type="button" className="employer" value="Find employees" onClick={selectInputHandler}/>
            <div className="btn-box">
                <button type="button" disabled={!clicked} id="next1" onClick={(e) => nextOne(e, formRefs)}>
                Next
                </button>
            </div>
        </form>
    );
}   