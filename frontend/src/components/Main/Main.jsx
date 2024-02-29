// COMPONENTS IMPORTS
import HeadBanner from './HeadBanner';
import Steps from './Steps';
import Categories from './Categories';

export default function Main () {
    return (
        <main className="site-main">
            <HeadBanner />

            <Steps />

            <Categories />
            <section className="cv">
                <div className="wrapper">
                <div className="content">
                    <h1>
                    Create your CV with
                    <br /> our assistance.
                    </h1>
                    <p>
                    Briefly introduce yourself, highlighting your
                    <br /> relevant expertise and career goals.
                    </p>
                    <span>
                    <a href="#" className="createcv-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                        </svg>{" "}
                        Create Now
                    </a>
                    </span>
                </div>
                <div className="media">
                    <img src="assets/images/cv.png" alt="" />
                </div>
                </div>
            </section>
            <section className="about-us">
                <h1>
                About <span className="clr-coral">us</span>
                </h1>
                <div className="container">
                <div className="media">
                    <div className="card">
                    <img
                        src="assets/images/krakenimages-376KN_ISplE-unsplash.jpg"
                        alt=""
                    />
                    </div>
                    <div className="card">
                    <img
                        src="assets/images/christina-wocintechchat-com-faEfWCdOKIg-unsplash.jpg"
                        alt=""
                    />
                    </div>
                    <div className="card">
                    <img
                        src="assets/images/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg"
                        alt=""
                    />
                    </div>
                </div>
                <div className="content">
                    <p>
                    Imagine using technology that feels as easy and inviting as your
                    favorite coffee shop. No more tangled buttons, confusing menus, or
                    feeling lost in a maze of options. That's the world we're building at
                    Jobbo.
                    </p>
                    <p>
                    We're not just techies, we're people who understand the frustration of
                    complicated interfaces. We believe everyone deserves technology that
                    works seamlessly and even brings a smile to your face.
                    </p>
                </div>
                </div>
            </section>
        </main>

    );
}