import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import JobDescription from "./JobDescription";

export default function JobDetails({
    props
}) {

    return(
        <>
            <main className="site-main post-form-container">
                <div className="container details-container">
                    <h2>{props.job_title}</h2>
                    <div className="job-details">
                        {props.job_description.length > 0 && (
                        <div>
                            <JobDescription jobDescription={props.job_description} />
                        </div>
                        )}
                    </div>

                    <button className="auth-btn apply-btn">Apply now</button>
                </div>
            </main>
        </>
    );
}