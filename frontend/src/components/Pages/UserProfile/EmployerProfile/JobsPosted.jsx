import JobsPostedItem from "./JobsPostedItem";

export default function JobsPosted() {
    return (
    <section>
        <header>
            <h1>Jobs posted</h1>
        </header>
        <div className="userprofile">
            <div className="information applicants">
                <div className="container">
                    <JobsPostedItem />
                </div>
            </div>
        </div>
    </section>

    );
}