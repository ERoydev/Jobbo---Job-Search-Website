
export default function PostFormModel1({
    formValues,
    onChange,
}) {

    return (
        <div className="model1">
                <div className="job-description">
                    <label htmlFor="description">Job Description</label>
                    <p className="info">
                        Describe your company activities, requirements for the position,
                        responsibilities, qualifications, required skills and benefits for
                        working with you.
                    </p>

                    <textarea type="text" row="60" col="10" name="job_description" onChange={onChange} value={formValues.job_description} />
                </div>

            </div>
    );
}