export default function JobDescription({
    jobDescription,
}) {

    if (!jobDescription) {
        return <p>No job description available.</p>;
    }

    return (
        <pre className="job-description-content">{jobDescription}</pre>
    );

}