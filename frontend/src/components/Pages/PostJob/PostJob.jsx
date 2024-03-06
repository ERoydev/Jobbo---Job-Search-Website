import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import PostForm from "./PostForm";

export default function PostJob() {
    return (
        <>
            <Header />
            <main className="site-main post-form-container post">
                <div className="container">
                    <div className="search-title">
                        <p className="heading-title">Find your new team.</p>
                        <h1>Fill all the needed information for your <span className="clr-coral">job post.</span></h1>
                    </div>
                    <PostForm />
                </div>
            </main>
            <Footer />
        </>
    );
}