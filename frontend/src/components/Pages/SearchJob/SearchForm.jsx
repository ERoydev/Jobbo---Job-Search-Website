import { useState } from "react";
import useForm from "../../../hooks/useForm";

const initialValue = {
    search: '',
    category: 'Category',
    jobType: 'Job Type',
    location: 'Location',
}

export default function SearchForm({
    SearchFromSearchHanlder,
}) {

    const { values, onChange, onSubmit } = useForm(SearchFromSearchHanlder, initialValue)

    
    return (
        <section className="search-form">
            <div className="search-title">
                <p className="heading-title">Jobs Search. Made Easy.</p>
                <h1>
                Find your perfect match,
                <br /> discover roles that align with your skills.
                </h1>
            </div>

            <form action="#" onSubmit={onSubmit}>
                <div className="search-keywords">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                    </svg>
                    <input type="text" placeholder="Keywords" name="search" value={values.search} onChange={onChange} />
                </div>

                <div className="search-info">
                    <select name="category" value={values.category} onChange={onChange}>
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

                    <select name="jobType" value={values.jobType} onChange={onChange}>
                        <option>Job Type</option>
                        <option value="all">All</option>
                        <option value="full-time">Full time</option>
                        <option value="part-time">Part time</option>
                        <option value="internship">Internship</option>
                        <option value="temporary">Temporary</option>
                        <option value="for-students">For students</option>
                        <option value="flexible">Flexible</option>
                    </select>

                    <select name="location" value={values.location} onChange={onChange}>
                        <option>Location</option>
                        <option value="remote">Remote only, anywhere</option>
                        <option value="hybrid">Hybrid</option>
                        <option value="office">Office</option>
                    </select>

                    <button className="post-form-submit">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                        </svg>
                    </button>
                </div>
            </form>
            
        </section>

    );
}