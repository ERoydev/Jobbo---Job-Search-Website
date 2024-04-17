import { useContext, useEffect, useState } from "react";
import * as NotificationService from "../../../../../services/NotificationService";
import AuthContext from '../../../../../contexts/AuthContext';
import NotificationsBox from "./NotificationsBox";

export default function NotificationsList() {
    const [notifications, setNotifications] = useState([]);
    const { userId } = useContext(AuthContext)

    const closeNotificationBox = (id) => {
        NotificationService.deleteNotification(id);
        setNotifications(state => state.filter(user => user.id !== id))
    }

    console.log(notifications)
    useEffect(() => {
        NotificationService.getNotifications(userId)
            .then(setNotifications)
    }, [])

    return (
        <>
            {notifications.length > 0 && notifications.map((item) => <NotificationsBox key={item.user} closeNotificationBox={closeNotificationBox} {...item} />)}
        </>
    );
}