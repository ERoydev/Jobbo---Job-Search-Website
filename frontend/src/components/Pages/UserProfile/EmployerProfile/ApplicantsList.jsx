import { useState, useEffect } from "react";
import * as UserService from "../../../../services/UserService";

import Applicants from "./Applicants";
import ApplicantsItems from "./ApplicantsItem";


export default function ApplicantsList({
    job_title,
    applied
}) {
    // There is way for reusing the applicants from my employee profile with custom react hook TODO //
    const [applicants, setApplicants] = useState([]);


    useEffect(() => {
        const fetchUsers = async () => {
            const userPromises = [];
            try {
                for(let userId of applied) {
                    const response = await UserService.getUser(userId)
                    userPromises.push(response);
                }
                setApplicants(userPromises)

            } catch {
                console.log('Error occured in ApplicantsList')
            }
        }
        fetchUsers();
    }, [])
    
    return (
        <>
            {applicants.length > 0 && applicants.map((employee) => <ApplicantsItems key={employee.id} {...employee} job_title={job_title} />)}
            {applicants.length < 1 && <p>No applicants</p>}
        </>
    );
}