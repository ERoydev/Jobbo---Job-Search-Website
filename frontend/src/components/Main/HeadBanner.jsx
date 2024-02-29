import robotHead from '../../assets/images/robot-head.jpg';


export default function HeadBanner() {
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
                        <a className="submit-btn" type="submit" href="#">
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