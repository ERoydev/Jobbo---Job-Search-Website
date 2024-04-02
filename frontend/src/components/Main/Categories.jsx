import { Link, useNavigate } from 'react-router-dom';
import Path from '../../Paths';

import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';
import img5 from '../../assets/images/img5.jpg';
import img6 from '../../assets/images/img6.jpg';

export default function Categories({
    SearchFormSearchHandler,
}) {
    const navigate = useNavigate();

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

            <div className="card">
                <div className="media">
                    <img src={img1} alt="" />
                </div>
                
                <div className="content">
                    <div>
                        <p className="job-title">Business and Finance</p>
                        <p className="job-time">Full-Time</p>
                    </div>

                    <div>
                        <p className="job-count">120+ Jobs</p>
                        <a href='#' className="apply-job" onClick={buttonClickHandler}>
                        Apply now
                        </a>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="media">
                <img
                    src={img2}
                    alt=""
                />
                </div>
                <div className="content">
                <div>
                    <p className="job-title">Computer and IT</p>
                    <p className="job-time">Full-Time</p>
                </div>
                <div>
                    <p className="job-count">120+ Jobs</p>
                    <a href="#" className="apply-job" onClick={buttonClickHandler}>
                    Apply now
                    </a>
                </div>
                </div>
            </div>
            <div className="card">
                <div className="media">
                <img
                    src={img3}
                    alt=""
                />
                </div>
                <div className="content">
                <div>
                    <p className="job-title">Engineering</p>
                    <p className="job-time">Full-Time</p>
                </div>
                <div>
                    <p className="job-count">120+ Jobs</p>
                    <a href="#" className="apply-job" onClick={buttonClickHandler}>
                    Apply now
                    </a>
                </div>
                </div>
            </div>
            <div className="card">
                <div className="media">
                <img
                    src={img4}
                    alt=""
                />
                </div>
                <div className="content">
                <div>
                    <p className="job-title">Marketing and Sales</p>
                    <p className="job-time">Full-Time</p>
                </div>
                <div>
                    <p className="job-count">120+ Jobs</p>
                    <a href="#" className="apply-job" onClick={buttonClickHandler}>
                    Apply now
                    </a>
                </div>
                </div>
            </div>
            <div className="card">
                <div className="media">
                <img
                    src={img5}
                    alt=""
                />
                </div>
                <div className="content">
                <div>
                    <p className="job-title">Human Resources</p>
                    <p className="job-time">Full-Time</p>
                </div>
                <div>
                    <p className="job-count">120+ Jobs</p>
                    <a href="#" className="apply-job" onClick={buttonClickHandler}>
                    Apply now
                    </a>
                </div>
                </div>
            </div>
            <div className="card">
                <div className="media">
                <img src={img6} alt="" />
                </div>
                <div className="content">
                <div>
                    <p className="job-title">Media and Communications</p>
                    <p className="job-time">Full-Time</p>
                </div>
                <div>
                    <p className="job-count">120+ Jobs</p>
                    <a href="#" className="apply-job" onClick={buttonClickHandler}>
                    Apply now
                    </a>
                </div>
                </div>
            </div>
            </div>
            <p>
            <a href="#" className="categories-btn">
                Categories
            </a>
            </p>
        </section>
    );
}