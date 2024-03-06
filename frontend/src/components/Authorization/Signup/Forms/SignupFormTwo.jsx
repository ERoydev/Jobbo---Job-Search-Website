export default function SignupFormTwo() {
    return (
        <form id="form2">
            <h3>Create Account</h3>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <input type="text" placeholder="Confirm Password" />
            <div className="btn-box">
                <button type="button" id="back1">
                Back
                </button>
                <button type="button" id="next2">
                Next
                </button>
            </div>
        </form>

    );
}