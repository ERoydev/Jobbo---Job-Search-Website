import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../../contexts/AuthContext";
import * as JobsService from "../../../../services/JobsService";
import ApplicantsList from "./ApplicantsList";

export default function Applicants() {
    const [applications, setApplications] = useState([]);
    const { userId } = useContext(AuthContext);

    useEffect(() => {
        JobsService.getAllJobs(userId)
            .then(setApplications)
    }, [])

    return (
        <section>
            <header>
                <h1>Applicants to your job posts.</h1>
            </header>

            <div className="information applicants">
                <div className="container">
                    {applications.length > 0 && applications.map((item) => <ApplicantsList key={item.id} job_title={item.job_title} applied={item.applicants}/>)}
                </div>
            </div>
        </section>

    );
}