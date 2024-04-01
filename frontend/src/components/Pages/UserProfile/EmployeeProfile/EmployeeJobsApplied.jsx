import { useContext, useEffect, useState } from "react";
import * as JobsService from "../../../../services/JobsService";
import AuthContext from "../../../../contexts/AuthContext";


export default function EmployeeJobsApplied() {
    const { userId } = useContext(AuthContext);
    const [jobsApplied, setJobsApplied] = useState([]);

    useEffect(() => {
        JobsService.getAppliedJobs(userId)
            .then(setJobsApplied)
    }, [])

    console.log(jobsApplied)

    return(
        <h1>hey</h1>
    );
}