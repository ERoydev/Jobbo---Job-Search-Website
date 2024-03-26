import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

export default function JobDetails({
    props
}) {

    console.log(props)
    return(
        <>
            <main className="site-main post-form-container">
                <div className="container">
                    <h2>{props.job_title}</h2>
                    <div className="job-details">

                        {props.company_overview.length > 0 && (
                            <div className="company_overview">
                                <h4>Company Overview</h4>
                                <p>{props.company_overview}</p>
                            </div>
                        )}

                        {props.key_responsibilities.length > 0 && (
                            <div className="key_responsibilities">
                                <h4>Key Responsibilities</h4>
                                <p>{props.key_responsibilities}</p>
                            </div>
                        )}
                        
                        {props.qualifications.length > 0 && (
                            <div className="qualifications">
                                <h4>Qualifications</h4>
                                <p>{props.qualifications}</p>
                            </div>
                        )}

                        {props.preferred_skills.length > 0 && ( 
                            <div className="preferred_skills">
                                <h4>Preferred Skills</h4>
                                <p>{props.preferred_skills}</p>
                            </div>
                        )}
                        
                        {props.job_description.length > 0 && (
                            <div className="job-description">
                                <h4>Job Description</h4>
                                <p>{props.job_description}</p>
                            </div>
                        )}

                    </div>
                </div>
            </main>
        </>
    );
}