import { useState } from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import JobsList from "./JobsList";
import SearchForm from "./SearchForm";

export default function SearchJob() {
    const [searchCriteria, setSearchCriteria] = useState({});

    const SearchFromSearchHanlder = (values) => {
        setSearchCriteria(values)
    }

    return (
        <>
            <Header />
   
                <main className="site-main post-form-container">
                    <div className="container">
                        <SearchForm SearchFromSearchHanlder={SearchFromSearchHanlder}/>

                        {searchCriteria ? <JobsList searchCriteria={searchCriteria} /> : <JobsList searchCriteria={null} />}
                    </div>
                </main>
             
            <Footer />
        </>
    );
}