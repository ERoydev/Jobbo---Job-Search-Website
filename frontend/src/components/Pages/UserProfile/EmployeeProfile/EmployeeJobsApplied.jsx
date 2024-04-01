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

    const createJobsList = async (jobId) => {
        const result = await JobsService.getOneJob(jobId)
        return result;
    }

    useEffect(() => {
       jobsApplied.forEach((el) => {
        createJobsList(el.job_post_id)
            .then(res => {
                setJobList(state => [...state, res])
            })
       }) 
    }, jobsApplied)


    console.log(jobList)
    return(
        <div className="appliedJobs">
            <div className="SearchJobs">
                {jobList && jobList.map((job) => <JobsListItem key={job.id} props={job}/>)}
            </div>
        </div>
    );
}