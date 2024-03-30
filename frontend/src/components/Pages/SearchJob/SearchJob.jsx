import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import JobsList from "./JobsList";
import SearchForm from "./SearchForm";

export default function SearchJob() {

    return (
        <>
            <Header />
   
                <main className="site-main post-form-container">
                    <div className="container">
                        <SearchForm />
                        <JobsList />
                    </div>
                </main>
             
            <Footer />
        </>
    );
}