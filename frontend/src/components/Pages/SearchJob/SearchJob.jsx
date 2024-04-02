import { useContext, useState } from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import JobsList from "./JobsList";
import SearchForm from "./SearchForm";

import SearchCriteriaContext, { SearchCriteriaProvider} from "../../../contexts/SearchCriteriaContext";



export default function SearchJob() {
    const { searchCriteria, SearchFormSearchHandler} = useContext(SearchCriteriaContext);

    return (
        <>
            <Header />
   
                <main className="site-main post-form-container">
                    <div className="container">
                        <SearchForm SearchFormSearchHandler={SearchFormSearchHandler}/>

                        {searchCriteria ? <JobsList searchCriteria={searchCriteria} /> : <JobsList searchCriteria={null} />}
                    </div>
                </main>
             
            <Footer />
        </>
    );
}