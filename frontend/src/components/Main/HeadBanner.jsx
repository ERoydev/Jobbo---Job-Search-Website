import { useNavigate } from 'react-router-dom';
import robotHead from '../../assets/images/robot-head.jpg';
import Path from '../../Paths';

export default function HeadBanner({
    SearchFormSearchHandler
}) {
    const navigate = useNavigate();

    const searchClickHandler = (e) => {
        e.preventDefault();
        const inputField = e.target.parentNode[0].value;
        
        const data = {search: inputField}
        SearchFormSearchHandler(data)
        navigate(Path.SearchJob)
    }
    return (
        <section className="head-banner">
            <div className="container">
                <section className="banner">
                    <h1>
                    Find Your Perfect Fit.
                    <br /> Millions Of <span className="clr-coral">Jobs</span> Await.
                    </h1>
                    <p>
                    Our resume app acts as your personal guide,
                    <br /> providing the tools and support you need to navigate
                    <br /> the process with confidence
                    </p>
                    <div className="wrapper">
                        <form action="#">
                            <input type="text" placeholder="Search..." />
                            <a className="submit-btn" type="submit" href="#" onClick={searchClickHandler}>
                            Find
                            </a>
                        </form>
                    </div>
                </section>

                <section className="main-image">
                    <div className="media">
                        <img src={robotHead} alt="" />
                    </div>
                </section>
            </div>
        </section>
    );
}