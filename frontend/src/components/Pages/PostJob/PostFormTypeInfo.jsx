export default function PostFormTypeInfo() {
    return (
        <>
            <div className="search-info">
                <select name="category">
                <option>Category</option>
                <option>Marketing</option>
                </select>

                <select name="job-type">
                <option>Job Type</option>
                <option value="all">All</option>
                <option value="full-time">Full time</option>
                <option value="part-time">Part time</option>
                <option value="internship">Internship</option>
                <option value="temporary">Temporary</option>
                <option value="for-students">For students</option>
                <option value="flexible">Flexible</option>
                </select>

                <select name="employment_location">
                <option>Employment location</option>
                <option value="remote">Remote only, anywhere</option>
                <option value="hybrid">Hybrid</option>
                <option value="office">Office</option>
                </select>
            </div>

            <div className="search-info">
                <input type="text" placeholder="Country" />
                <input type="text" placeholder="City" />
                <input type="text" placeholder="Salary (1500-1800)..." />
            </div>
        </>
    );
}