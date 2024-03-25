import RichTextForm from "./RichTextForm";
import "../../../init";
import {getCurrentContent} from 'draft-js';
export default function PostFormModel1({
    formValues,
    onChangeDraft,
}) {

    const onChangeClickHandler = (state, fieldName) => {
        const content = state.editorState.getCurrentContent().getPlainText()
        onChangeDraft(fieldName, content)
    }

    return (
        <div className="model1">
                <div className="job-description">
                    <label htmlFor="description">Company Overview</label>
                    <p className="info">
                        Introduce your company, business plans, activities or provide a concise overview of when the company was founded and any significant milestones you've achieved.
                    </p>
                    
                    <RichTextForm name={"company_overview"} value={formValues.company_overview} onChangeHandler={onChangeClickHandler}/>
    
                    {/* <textarea
                        name="company_overview"
                        id="description"
                        cols={30}
                        rows={10}
                        value={formValues.company_overview}
                        onChange={onChangeHandler}
                    /> */}
                </div>

                <div className="job-description">
                    <label htmlFor="description">Key Responsibilities</label>
                    <p className="info">
                        Describe the most important duties and tasks associated with a particular role or position. The skills that you want from the next employee.
                    </p>
                    <RichTextForm />
                    {/* <textarea
                        name="key_responsibilities"
                        id="description"
                        cols={30}
                        rows={10}
                        value={formValues.key_responsibilities}
                        onChange={onChangeHandler}
                    /> */}
                </div>

                <div className="job-description">
                    <label htmlFor="description">Qualifications</label>
                    <p className="info">
                        Describe the skills, experience, knowledge, and attributes necessary to be successful in a particular role or position.
                    </p>
                    <RichTextForm />
                    {/* <textarea
                        name="qualifications"
                        id="description"
                        cols={30}
                        rows={10}
                        value={formValues.qualifications}
                        onChange={onChangeHandler}
                    /> */}
                </div>

                <div className="job-description">
                    <label htmlFor="description">Preferred skills</label>
                    <p className="info">Indicate desirable qualities, knowledge, or experience that would be a plus for a role or position, but aren't necessarily essential qualifications. </p>
                    <RichTextForm />
                    {/* <textarea
                        name="preferred_skills"
                        id="description"
                        cols={30}
                        rows={10}
                        value={formValues.preferred_skills}
                        onChange={onChangeHandler}
                    /> */}
                </div>
                
                <div className="job-description">
                    <label htmlFor="description">Job Description</label>
                    <p className="info">
                        Describe your company activities, requirements for the position,
                        responsibilities, qualifications, required skills and benefits for
                        working with you.
                    </p>
                    <RichTextForm />
                    {/* <textarea
                        name="job_description"
                        id="description"
                        cols={30}
                        rows={10}
                        value={formValues.job_description}
                        onChange={onChangeHandler}
                    /> */}
                </div>

            </div>
    );
}