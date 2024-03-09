export default function PostFormTypeInfo({
    formValues,
    onChangeHandler,
}) {
    return (
        <>
            <div className="search-info">
                <select name="category" value={formValues.category} onChange={onChangeHandler}>
                    <option>Category</option>
                    <option>Marketing</option>
                </select>

                <select name="jobType" value={formValues.jobType} onChange={onChangeHandler}>
                    <option>Job Type</option>
                    <option value="all">All</option>
                    <option value="full-time">Full time</option>
                    <option value="part-time">Part time</option>
                    <option value="internship">Internship</option>
                    <option value="temporary">Temporary</option>
                    <option value="for-students">For students</option>
                    <option value="flexible">Flexible</option>
                </select>

                <select name="employmentLocation" value={formValues.employmentLocation} onChange={onChangeHandler}>
                    <option>Employment Location</option>
                    <option value="remote">Remote only, anywhere</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="office">Office</option>
                </select>
            </div>

            <div className="search-info" >
                <input type="text" placeholder="Country" name="country" value={formValues.country} onChange={onChangeHandler}/>
                <input type="text" placeholder="City" name="city" value={formValues.city} onChange={onChangeHandler}/>
                <input type="text" placeholder="Street" name="street" value={formValues.street} onChange={onChangeHandler}/>

                <input type="text" placeholder="Salary (1500-1800)..." name="salary" value={formValues.salary} onChange={onChangeHandler}/>
            </div>
        </>
    );
}