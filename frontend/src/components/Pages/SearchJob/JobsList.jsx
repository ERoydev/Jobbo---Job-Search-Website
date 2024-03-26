import { useEffect, useState } from "react";
import JobsListItem from "./JobsListItem";


export default function JobsList({
    detailsHandler,
}) {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/jobposts/')
            .then(res => res.json())
            .then(result => {
                setJobs(result)
            })
            .catch(err => console.log(err))
    }, [])


    const showDetailsHandler = (props) => {
        detailsHandler(props);
    }

    return (
        <div className="SearchJobs">
            
            {jobs.length > 0 ? jobs.map(job => <JobsListItem key={job.id} props={job} showDetailsHandler={showDetailsHandler}/>) : (<p>There are no Job to apply for, yet.</p>)}
        </div>
    );
}