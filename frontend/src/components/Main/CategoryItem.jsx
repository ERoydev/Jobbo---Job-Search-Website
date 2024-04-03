export default function CategoryItem({
    img, 
    buttonClickHandler,
    name,
    job_count,
}) {

    return (
        <div className="card">
            <div className="media">
                <img src={img} alt="" />
            </div>
            
            <div className="content">
                <div>
                    <p className="job-title">{name}</p>
                    <p className="job-time">Full-Time</p>
                </div>

                <div>
                    <p className="job-count">{job_count === undefined ? '0': job_count} Jobs</p>
                    <a href='#' className="apply-job" onClick={buttonClickHandler}>
                    Apply now
                    </a>
                </div>
            </div>
        </div>
    );
}