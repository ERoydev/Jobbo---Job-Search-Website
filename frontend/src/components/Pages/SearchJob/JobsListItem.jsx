import { useEffect, useState } from "react";
import * as UserService from '../../../services/UserService';
import formatDate from "../../../utils/convertDate";
import { Link } from "react-router-dom";
import Path from "../../../Paths";

export default function JobsListItem({
    props,
}) {
    const [ownerInfo, setOwnerInfo] = useState({});
    useEffect(() => {
        UserService.getUser(props.ownerId)
            .then(setOwnerInfo)
    }, [])

    return (
        <Link to={`${Path.JobDetails}/${props.id}`} className="card" >
            <div className="card-info">
                <div className="media">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                    </svg>
                </div>
                <div>
                    <p>{ownerInfo.universal_name}</p>
                    <p className="fullAddress">
                    {props.job_country}, {props.job_city}, {props.job_street}
                    </p>
                    <p className="postedDate">Posted on: {formatDate(props.created_at)}</p>
                </div>

            </div>

            <div>
                <p className="jobTitle">{props.job_title}</p>
                <p className="jobType">{props.job_type}</p>
                <p className="salary">Salary: {props.job_salary}</p>
            </div>
        </Link>
 
    );
}