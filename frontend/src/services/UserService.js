import * as request from '../lib/request.js';


const baseUrl = 'http://127.0.0.1:8000/users';

export const getUser = async (userId) => {
    const result = await request.get(`${baseUrl}/${userId}/`)

    return result;
}

export const saveUser = async (values, userId) => {
    const result = await request.post(`${baseUrl}/${userId}/`, values)

    return result;
}