import { useContext, useEffect, useState } from "react";
import ApplicantsItems from "./ApplicantsItem";
import AuthContext from "../../../../contexts/AuthContext";
import * as JobsService from "../../../../services/JobsService";

export default function Applicants() {
    const [applications, setApplications] = useState([]);
    const { userId } = useContext(AuthContext);

    useEffect(() => {
        JobsService.getAllJobs(userId)
            .then(setApplications)
    }, [])

    console.log(applications)
    return (
        <section>
            <header>
                <h1>Applicants to your job posts.</h1>
            </header>

            <div className="information applicants">
                <div className="container">
                    <ApplicantsItems />
                </div>
            </div>
        </section>

    );
}