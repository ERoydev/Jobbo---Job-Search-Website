import img1 from '../../assets/images/about1.jpg';
import img2 from '../../assets/images/img5.jpg';
import img3 from '../../assets/images/about3.jpg';

export default function Aboutus () {
    return (
        <section className="about-us">
            <h1>
            About <span className="clr-coral">us</span>
            </h1>
            <div className="container">
            <div className="media">
                <div className="card">
                <img
                    src={img1}
                    alt="Success"
                />
                </div>
                <div className="card">
                <img
                    src={img2}
                    alt="Presentation"
                />
                </div>
                <div className="card">
                <img
                    src={img3}
                    alt="IT collegues laught while working"
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
    );
}