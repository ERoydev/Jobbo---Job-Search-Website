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
                        {jobs.length > 0 && jobs.map(job => <JobsPostedItem key={job.id} {...job} {...ownerInfo} jobId={job.id}/>)}
                        {jobs.length == 0 && <p className="noJobsMessage">You haven't post any jobs yet.</p>}
                    </div>
                </div>
            </div>
        </section>
    );
}

('Information Technology (IT)', 0),    
('Healthcare and Medical', 0),
('Education and Training', 0),
('Sales and Marketing', 0),
('Finance and Accounting', 0),
('Customer Service and Support', 0),
('Engineering and Construction', 0),    
('Human Resources (HR)', 0),
('Administrative and Clerical', 0),
('Creative Arts and Design', 0),
('Hospitality and Tourism', 0),
('Legal', 0),
('Manufacturing and Production', 0),
('Research and Development (R&D)', 0)