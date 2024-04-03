import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Path from '../../Paths';

import { images } from '../../utils/images';

import * as CategoryService from "../../services/CategoryService";
import CategoryItem from './CategoryItem';


export default function Categories({
    SearchFormSearchHandler,
}) {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        CategoryService.getAllCategories()
            .then(result => {
                setCategories(result.slice(0, 6))
            })
    }, [])

    const buttonClickHandler = (e) => {
        e.preventDefault();

        const jobTitle = e.target.parentNode.parentNode.querySelector(".job-title").textContent
        const data = {category: jobTitle}
        SearchFormSearchHandler(data)
        navigate(Path.SearchJob)
    }

    return (
        <section className="categories">
            <h1>
            Popular <span className="clr-coral">Jobs</span> Categories
            </h1>
            <div className="wrapper">
                {categories && categories.map((job) => <CategoryItem key={job.id} img={images[job.id]} buttonClickHandler={buttonClickHandler} {...job}/>)}
            </div>

            <p>
            <Link to={Path.CategoriesPage} className="categories-btn">
                Categories
            </Link>
            </p>
        </section>
    );
}