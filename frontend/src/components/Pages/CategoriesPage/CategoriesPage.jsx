import { useState, useEffect } from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

import CategoryItem from "../../Main/CategoryItem";
import * as CategoryService from "../../../services/CategoryService";
import { images } from "../../../utils/images";

export default function CategoriesPage() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        CategoryService.getAllCategories()
            .then(setCategories)
    }, [])
    
    const buttonClickHandler = (e) => {
        e.preventDefault();
        console.log('yes')
    }
    return (
        <>
            <Header />
                <div className="categories">
                    <div className="wrapper">
                        {categories && categories.map((category) => <CategoryItem key={category.id} img={images[category.id]} {...category}/>)}
                    </div>
                </div>
            <Footer />
        </>
    );

}