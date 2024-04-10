import NotificationsBox from "./Notifications/NotificationsBox";

export default function Notifications() {

    const closeNotificationBox = (e) => {
        const msgbox = e.target.parentNode.parentNode;
        msgbox.style.display='none'
    }

    return (
    <section>
        <header>
            <h1>Notifications </h1>
        </header>

        <div className="information applicants">
            <div className="container">
                <div className="message-container">
                    <NotificationsBox closeNotificationBox={closeNotificationBox} />
                </div>
            </div>
        </div>
    </section>


    );
}