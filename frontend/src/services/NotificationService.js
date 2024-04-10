import * as request from "../lib/request";

const baseUrl = 'http://127.0.0.1:8000/notifications';

export const createNotificationOnApply = async (userId, email, job_title) => {
    const message = `User with email address: "${email}" has applied for "${job_title}" position.`;
    const data = {
        text: message,
        user: userId,
    }


    const result = await request.post(`${baseUrl}/${userId}/`, data)
}

export const getNotifications = async (userId) => {
    const result = await request.get(`${baseUrl}/${userId}`)
}