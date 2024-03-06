export default function PostFormModel1() {
    return (
        <div className="model1">
                <div className="job-description">
                    <label htmlFor="description">Company Overview</label>
                    <p className="info">
                        Introduce your company, business plans, activities or provide a concise overview of when the company was founded and any significant milestones you've achieved.
                    </p>
                    <textarea
                        name="text_company_overview"
                        id="description"
                        cols={30}
                        rows={10}
                        defaultValue={""}
                    />
                </div>

                <div className="job-description">
                    <label htmlFor="description">Key Responsibilities</label>
                    <p className="info">
                        Describe the most important duties and tasks associated with a particular role or position. The skills that you want from the next employee.
                    </p>
                    <textarea
                        name="text_key_responsibilities"
                        id="description"
                        cols={30}
                        rows={10}
                        defaultValue={""}
                    />
                </div>

                <div className="job-description">
                    <label htmlFor="description">Qualifications</label>
                    <p className="info">
                        Describe the skills, experience, knowledge, and attributes necessary to be successful in a particular role or position.
                    </p>
                    <textarea
                        name="text_qualifications"
                        id="description"
                        cols={30}
                        rows={10}
                        defaultValue={""}
                    />
                </div>

                <div className="job-description">
                    <label htmlFor="description">Preferred skills</label>
                    <p className="info">Indicate desirable qualities, knowledge, or experience that would be a plus for a role or position, but aren't necessarily essential qualifications. </p>
                    <textarea
                        name="text_preferred_skills"
                        id="description"
                        cols={30}
                        rows={10}
                        defaultValue={""}
                    />
                </div>

            </div>
    );
}