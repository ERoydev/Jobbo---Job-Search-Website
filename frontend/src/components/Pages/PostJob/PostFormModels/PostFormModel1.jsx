export default function PostFormModel1({
    formValues,
    onChangeHandler,
}) {
    return (
        <div className="model1">
                <div className="job-description">
                    <label htmlFor="description">Company Overview</label>
                    <p className="info">
                        Introduce your company, business plans, activities or provide a concise overview of when the company was founded and any significant milestones you've achieved.
                    </p>
                    <textarea
                        name="companyOverview"
                        id="description"
                        cols={30}
                        rows={10}
                        value={formValues.companyOverview}
                        onChange={onChangeHandler}
                    />
                </div>

                <div className="job-description">
                    <label htmlFor="description">Key Responsibilities</label>
                    <p className="info">
                        Describe the most important duties and tasks associated with a particular role or position. The skills that you want from the next employee.
                    </p>
                    <textarea
                        name="keyResponsibilities"
                        id="description"
                        cols={30}
                        rows={10}
                        value={formValues.keyResponsibilities}
                        onChange={onChangeHandler}
                    />
                </div>

                <div className="job-description">
                    <label htmlFor="description">Qualifications</label>
                    <p className="info">
                        Describe the skills, experience, knowledge, and attributes necessary to be successful in a particular role or position.
                    </p>
                    <textarea
                        name="qualifications"
                        id="description"
                        cols={30}
                        rows={10}
                        value={formValues.qualifications}
                        onChange={onChangeHandler}
                    />
                </div>

                <div className="job-description">
                    <label htmlFor="description">Preferred skills</label>
                    <p className="info">Indicate desirable qualities, knowledge, or experience that would be a plus for a role or position, but aren't necessarily essential qualifications. </p>
                    <textarea
                        name="preferredSkills"
                        id="description"
                        cols={30}
                        rows={10}
                        value={formValues.preferredSkills}
                        onChange={onChangeHandler}
                    />
                </div>
                
                <div className="job-description">
                    <label htmlFor="description">Job Description</label>
                    <p className="info">
                        Describe your company activities, requirements for the position,
                        responsibilities, qualifications, required skills and benefits for
                        working with you.
                    </p>
                    <textarea
                        name="jobDescription"
                        id="description"
                        cols={30}
                        rows={10}
                        value={formValues.jobDescription}
                        onChange={onChangeHandler}
                    />
                </div>

            </div>
    );
}