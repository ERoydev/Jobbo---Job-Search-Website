import { useEffect, useState } from "react";
import * as UserService from '../../../services/UserService';

export default function JobsListItem({
    ownerId,
    job_title,
    job_category,
    job_type,
    job_employment_type,
    job_country,
    job_city,
    job_salary,
    company_overview,
    key_responsibilities,
    qualifications,
    preferred_skills,
    job_description
}) {

    const [ownerInfo, setOwnerInfo] = useState({});

    useEffect(() => {
        UserService.getUser(ownerId)
            .then(setOwnerInfo)
    }, [])

    console.log(ownerInfo)
    return (
        <div className="card">
            <div className="card-info">
                <div className="media">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                    </svg>
                </div>
                <div>
                    <p>{ownerInfo.universal_name}</p>
                    <p className="fullAddress">
                    {ownerInfo.country}, {ownerInfo.city}, {ownerInfo.street}
                    </p>
                    <p className="postedDate">Posted on: 01.02.2023</p>
                </div>

            </div>

            <div>
                <p className="jobTitle">Regulator</p>
            </div>
        </div>
 
    );
}