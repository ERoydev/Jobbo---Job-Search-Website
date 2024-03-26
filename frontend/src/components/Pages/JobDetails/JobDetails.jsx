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