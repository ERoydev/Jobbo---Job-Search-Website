export default function SignupFormThreeEmployee () {
    return (
        <form name="employee" id="form3">
            <h3>Personal Information</h3>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Location" />
            <div className="btn-box">
                <button type="button" id="back2">
                Back
                </button>
                <button type="button" id="next3">
                Next
                </button>
            </div>
        </form>

    );
}