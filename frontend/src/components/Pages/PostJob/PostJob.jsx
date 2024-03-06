import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import PostForm from "./PostForm";

export default function PostJob() {
    return (
        <>
            <Header />
            <main class="site-main post-form-container post">
                <div class="container">
                    <div class="search-title">
                        <p class="heading-title">Find your new team.</p>
                        <h1>Fill all the needed information for your <span class="clr-coral">job post.</span></h1>
                    </div>
                    <PostForm />
                </div>
            </main>
            <Footer />
        </>
    );
}