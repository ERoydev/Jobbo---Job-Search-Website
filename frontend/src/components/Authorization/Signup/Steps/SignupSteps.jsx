export default function SignupSteps({
    formRefs,
}) {
    return (
        <div className="step-row">
            <div id="progress" ref={(element) => { formRefs.current.progress = element; }}/>
                <div className="step-col">
                    <small>Step 1</small>
                </div>
                <div className="step-col">
                    <small>Step 2</small>
                </div>
                <div className="step-col">
                    <small>Step 3</small>
                </div>

        </div>
    );
}