import * as request from "../lib/request.js";

const baseUrl = 'http://127.0.0.1:8000/users';

export const register = async (email, password) => {
    const data = {
        email,
        password
    }

    const result = await request.post(`${baseUrl}/register/`, data)

    return result;
}

export const login = async (email, password) => {

    try {
        const data = {
            email,
            password
        }
        
        const result = await request.post(`${baseUrl}/login/`, data)
        return result;

    } catch (err) {
        return
    }
}