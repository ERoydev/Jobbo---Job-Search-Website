export default function AccountSettings() {
    return (
        <div className="userprofile">
            <aside>
                <nav className="profile-settings">
                <ul>
                    <li>
                    <a href="#">Jobs Applied</a>
                    </li>
                    <li>
                    <a href="#">My Documents</a>
                    </li>
                    <li>
                    <a href="#">Account Settings</a>
                    </li>
                </ul>
                </nav>
            </aside>
            <section>
                <header>
                <h1>Account Settings</h1>
                </header>
                <div className="information">
                <div className="container">
                    <div className="card">
                    <div className="card-info">
                        <div className="media">
                        <img src="images/img2.jpg" alt="" />
                        </div>
                        <div>
                        <p>Emil Roydev</p>
                        <p className="view-profile">
                            <a href="#">View Profile</a>
                        </p>
                        </div>
                    </div>
                    <div>
                        <a href="#" className="auth-btn">
                        Upload
                        </a>
                    </div>
                    </div>
                    <div className="form-field">
                    <form action="#">
                        <div>
                        <input type="text" name="firstName" placeholder="First name" />
                        <input type="text" name="lastName" placeholder="Last name" />
                        </div>
                        <div>
                        <input type="email" name="email" placeholder="Email" />
                        <input
                            type="text"
                            name="phoneNumber"
                            placeholder="Phone number"
                        />
                        </div>
                        <input type="text" name="address" placeholder="Address" />
                        <div>
                        <input type="text" name="country" placeholder="Country" />
                        <input type="text" name="city" placeholder="City" />
                        </div>
                    </form>
                    </div>
                    <div className="user-buttons">
                    <a href="#" className="userprofile-btn">
                        Cancel
                    </a>
                    <a href="#" className="auth-btn">
                        Save
                    </a>
                    </div>
                    <div className="card">
                    <div>
                        <p className="title">Deactivate account</p>
                        <p className="info">
                        Once you delete your account, there is no going back. Please be
                        certain
                        </p>
                    </div>
                    <a href="#" className="delete-btn">
                        Deactivate
                    </a>
                    </div>
                </div>
                </div>
            </section>
        </div>

    );
    
}