import { useEffect, useState } from "react";
import JobsListItem from "./JobsListItem";

export default function JobsList() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/jobposts/')
            .then(res => res.json())
            .then(setJobs)
            .catch(err => console.log(err))
    })

    return (
        jobs.map(job => <JobsListItem key={job.id} {...job}/>)
    );
}