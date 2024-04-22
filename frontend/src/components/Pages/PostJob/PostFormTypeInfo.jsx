import { useEffect, useState } from "react";
import * as CategoryService from "../../../services/CategoryService";
import CategoriesOption from "../CategoriesOption";


export default function PostFormTypeInfo({
    formValues,
    onChangeHandler,
    setErrorHandler,
}) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        CategoryService.getAllCategories()
            .then(setCategories)
    }, [])

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
                    {categories.map((category) => <CategoriesOption key={category.id} {...category}/>)}
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