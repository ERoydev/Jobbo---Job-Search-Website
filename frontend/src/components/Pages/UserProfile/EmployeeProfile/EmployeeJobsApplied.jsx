import { useContext, useEffect, useState } from "react";
import * as JobsService from "../../../../services/JobsService";
import AuthContext from "../../../../contexts/AuthContext";
import JobsListItem from "../../SearchJob/JobsListItem";

export default function EmployeeJobsApplied() {
    const { userId } = useContext(AuthContext);
    const [jobsApplied, setJobsApplied] = useState([]);
    const [jobList, setJobList] = useState([]);


    useEffect(() => {
        JobsService.getAppliedJobs(userId)
            .then(setJobsApplied)
    }, [])

    useEffect(() => {
        const fetchJobs = async () => {
            const newJobList = [];
            for (const el of jobsApplied) {
                const job = await JobsService.getOneJob(el.job_post_id);
                newJobList.push(job);
            }
            setJobList(newJobList);
        };

        fetchJobs();
    }, [jobsApplied]);


    return(
        <div className="appliedJobs">
            <div className="SearchJobs">
                {jobList && jobList.map((job) => <JobsListItem key={job.id} props={job}/>)}
                {jobList.length == 0 && <h2 className="noJobsMessage">You have not applied to any jobs.</h2>}
            </div>
        </div>
    );
}