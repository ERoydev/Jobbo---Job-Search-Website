

export default function Applicants() {
    return (
        <section>
            <header>
                <h1>Applicants to your job posts.</h1>
            </header>

            <div className="information applicants">
                <div className="container">
                <div className="card">
                    <div className="card-info">
                    <div className="media">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                        </svg>
                    </div>
                    <div>
                        <p>Emil Roydev</p>
                        <p className="fullAddress">
                            Bulgaria, Ruse
                        </p>
                        <p className="phoneNumber">087 343 1923</p>
                    </div>
                    </div>
                    <div>
                    <p className="jobTitle">Regulator</p>
                    </div>
                </div>
                </div>
            </div>
        </section>

    );
}