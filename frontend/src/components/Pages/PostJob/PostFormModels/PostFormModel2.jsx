export default function PostFormModel2() {
    return (
        <div className="model2">
                <div className="job-description">
                <label htmlFor="description">Job Description</label>
                <p className="info">
                    Describe your company activities, requirements for the position,
                    responsibilities, qualifications, required skills and benefits for
                    working with you.
                </p>
                <textarea
                    name="text_description"
                    id="description"
                    cols={30}
                    rows={10}
                    defaultValue={""}
                />
                </div>
            </div>
    );
}