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
                    <div className="details">
                        <div className="job-info">
                            <h2>{props.job_title}</h2>
                            <p>{props.job_description}</p>
                        </div>

                        <div className="employer-info">
                            
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}