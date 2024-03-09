import { useState } from "react";
import { nextOne } from "../Steps/StepsIndicator";

export default function SignupFormOne({
    formRefs,
    userTypeClickHandler,
}) {
    const [clicked, setClicked] = useState(false);
    const [buttonText, setButtonText] = useState({
        employee: 'Find job',
        employer: 'Find employees',
    })

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
            <input type="button" className="employee" value={buttonText.employee} onClick={selectInputHandler} readOnly />
            <input type="button" className="employer" value={buttonText.employer} onClick={selectInputHandler} readOnly />
            <div className="btn-box">
                <button type="button" disabled={!clicked} id="next1" onClick={(e) => nextOne(e, formRefs)}>
                Next
                </button>
            </div>
        </form>
    );
}   