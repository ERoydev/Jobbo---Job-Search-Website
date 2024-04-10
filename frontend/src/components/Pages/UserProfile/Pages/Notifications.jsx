import NotificationsList from "./Notifications/NotificationsList";

export default function Notifications() {

    return (
    <section>
        <header>
            <h1>Notifications </h1>
        </header>

        <div className="information applicants">
            <div className="container">
                <div className="message-container">
                    <NotificationsList />
                </div>
            </div>
        </div>
    </section>


    );
}