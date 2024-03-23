export default function PostFormTypeInfo({
    formValues,
    onChangeHandler,
    setErrorHandler,
}) {

    const selectValidator = (e) => {
        const mainValues = e.target[0].value;
        const choosenValue = e.target.value;
        
        if (mainValues === choosenValue) {
            setErrorHandler(e.target);
        } else {
            setErrorHandler('')
        }
    }

    const inputValidator = (e) => {
        if (e.target.value == '') {
            setErrorHandler('PASS')
        } else {
            setErrorHandler('')
        }
    }

    return (
        <>
            <div className="search-info">
                <select name="job_category" value={formValues.job_category} onChange={onChangeHandler} onBlur={selectValidator}>
                    <option>Category</option>
                    <option>Computer and IT</option>
                    <option>Business and Finance</option>
                    <option>Education and Training</option>
                    <option>Engineering</option>
                    <option>Healthcare</option>
                    <option>Law</option>
                    <option>Human Resources</option>
                    <option>Marketing and Sales</option>
                    <option>Media and Communications</option>
                    <option>Science</option>
                    <option>Trades and Services</option>
                    <option>Arts, Audio/Video Technology, and Communication</option>
                    <option>Hospitality and Tourism</option>
                    <option>Government</option>
                </select>

                <select name="job_type" value={formValues.job_type} onChange={onChangeHandler} onBlur={selectValidator}>
                    <option>Job Type</option>
                    <option value="all">All</option>
                    <option value="full-time">Full time</option>
                    <option value="part-time">Part time</option>
                    <option value="internship">Internship</option>
                    <option value="temporary">Temporary</option>
                    <option value="for-students">For students</option>
                    <option value="flexible">Flexible</option>
                </select>

                <select name="job_employment_type" value={formValues.job_employment_type} onChange={onChangeHandler} onBlur={selectValidator}>
                    <option>Employment Location</option>
                    <option value="remote">Remote only, anywhere</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="office">Office</option>
                </select>
            </div>

            <div className="search-info" >
                <input type="text" placeholder="Country" name="job_country" value={formValues.job_country} onChange={onChangeHandler} onBlur={inputValidator}/>
                <input type="text" placeholder="City" name="job_city" value={formValues.job_city} onChange={onChangeHandler} onBlur={inputValidator}/>
                <input type="text" placeholder="Street" name="job_street" value={formValues.job_street} onChange={onChangeHandler} onBlur={inputValidator}/>

                <input type="text" placeholder="Salary (1500-1800)..." name="job_salary" value={formValues.job_salary} onChange={onChangeHandler} onBlur={inputValidator}/>
            </div>

            
        </>
    );
}