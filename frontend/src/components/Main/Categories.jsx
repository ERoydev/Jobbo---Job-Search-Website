import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Path from '../../Paths';

import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';
import img5 from '../../assets/images/img5.jpg';
import img6 from '../../assets/images/img6.jpg';

import * as CategoryService from "../../services/CategoryService";
import CategoryItem from './CategoryItem';


export default function Categories({
    SearchFormSearchHandler,
}) {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

    const getImage = (jobId) => {
        switch (jobId) {
            case 1:
                return img1
            case 2:
                return img2
            case 3:
                return img3
            case 4:
                return img4
            case 5:
                return img5
            case 6:
                return img6
        }
    }

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
                {categories && categories.map((job) => <CategoryItem key={job.id} img={getImage(job.id)} buttonClickHandler={buttonClickHandler} {...job}/>)}
            </div>

            <p>
            <Link to={Path.CategoriesPage} className="categories-btn">
                Categories
            </Link>
            </p>
        </section>
    );
}