import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import JobDetails from "../JobDetails/JobDetails";
import JobsList from "./JobsList";
import SearchForm from "./SearchForm";

import { useState } from "react";

export default function SearchJob() {
    const [showDetails, setShowDetails] = useState(false);
    const [detailInfo, setDetailInfo] = useState({});

    const detailsHandler = (props) => {
        setDetailInfo(props)
        setShowDetails(true);
    }

    return (
        <>
            <Header />

            {showDetails && <JobDetails props={detailInfo}/>}
            {!showDetails && (
                <main className="site-main post-form-container">
                    <div className="container">
                        <SearchForm />
                        <JobsList detailsHandler={detailsHandler}/>
                    </div>
                </main>
            )}
            <Footer />
        </>
    );
}