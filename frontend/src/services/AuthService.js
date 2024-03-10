import * as request from "../lib/request.js";

const baseUrl = 'http://127.0.0.1:8000/users';

export const register = async (email, password) => {
    const data = {
        email,
        password
    }

    const response = await fetch(`${baseUrl}/register/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    // const result = await request.post(`${baseUrl}/register`, data)

    const result = await response.json()

    return result;
}