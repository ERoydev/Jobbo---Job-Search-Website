export default function JobsListItem({
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
    return (
        <>
        <h1>{job_title}</h1>
        <h1>{job_type}</h1>
        </>
    );
}