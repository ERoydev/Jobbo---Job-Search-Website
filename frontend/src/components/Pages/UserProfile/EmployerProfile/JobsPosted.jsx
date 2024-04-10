import { useContext, useState, useEffect } from "react";

import AuthContext from '../../../../contexts/AuthContext';
import * as JobsService from '../../../../services/JobsService';
import * as UserService from "../../../../services/UserService";

import JobsPostedItem from "./JobsPostedItem";


export default function JobsPosted() {

    const [jobs, setJobs] = useState([]);
    const { userId } = useContext(AuthContext)
    const [ownerInfo, setOwnerInfo] = useState({});

    useEffect(() => {
        JobsService.getAllJobs(userId)
            .then(setJobs)
    }, [])


    useEffect(() => {
        UserService.getUser(userId)
            .then(setOwnerInfo)
    }, [])

    return (
    <section>
        <header>
            <h1>Jobs posted</h1>
        </header>
        <div className="userprofile">
            <div className="information applicants">
                <div className="container">
                    {jobs.map(job => <JobsPostedItem key={job.id} {...job} {...ownerInfo}/>)}
                </div>
            </div>
        </div>
    </section>

    );
}