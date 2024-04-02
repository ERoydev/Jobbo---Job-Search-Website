import { useEffect, useState } from "react";
import JobsListItem from "./JobsListItem";
import Pagination from "./Pagination";

const baseUrl = 'http://127.0.0.1:8000/api';

export default function JobsList({
    detailsHandler,
    searchCriteria,
}) {
    const [jobs, setJobs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(5);
    
    useEffect(() => {
        const url = new URL('/jobposts/', baseUrl)
        
        if (searchCriteria.search !== "" && searchCriteria.search) {
            url.searchParams.set('search', searchCriteria.search)
        }

        if (searchCriteria.category !== 'Category' && searchCriteria.category) {
            url.searchParams.set('job_category', searchCriteria.category)
        }
        if (searchCriteria.jobType !== "Job Type" && searchCriteria.jobType) {
            url.searchParams.set('job_type', searchCriteria.jobType)
        }

        if (searchCriteria.location !== "Location" && searchCriteria.location) {
            url.searchParams.set('job_location', searchCriteria.location)
        }

        const fetchJobs = () => {
            fetch(url.toString())
                .then(res => {
                    if (!res.ok) {
                        return {}
                    } else {
                        return res.json()
                    }
                })
                .then(result => setJobs(result))
                .catch(err => {
                    console.error('Error fetching jobs:', err);
                });
        };

        fetchJobs(); 
    }, [searchCriteria])

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = jobs.slice(firstPostIndex, lastPostIndex);

    return (
             
        <div className="SearchJobs">
            {currentPosts.length > 0 ? currentPosts.map(job => <JobsListItem key={job.id} props={job} />) : (<p className="noJobsMessage">There are no jobs to apply for.</p>)}
            <Pagination totalPosts={jobs.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
    );
}