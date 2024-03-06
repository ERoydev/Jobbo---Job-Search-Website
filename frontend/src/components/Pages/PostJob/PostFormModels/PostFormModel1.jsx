export default function PostFormModel1() {
    return (
        <div className="model1">
                <div className="job-description">
                    <label htmlFor="description">Company Overview</label>
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