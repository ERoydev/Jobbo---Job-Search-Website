export default function SignupFormOne() {
    return (
        <form id="form1">
            <h3>What are you going to do ?</h3>
            <input type="button" value="Find job" />
            <input type="button" value="Find employees" />
            <div className="btn-box">
                <button type="submit" id="next1">
                Next
                </button>
            </div>
        </form>

    );
}