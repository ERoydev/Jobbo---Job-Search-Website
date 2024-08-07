import * as request from "../lib/request.js";

const baseUrl = 'http://127.0.0.1:8000/users';


export const register = async (values) => {
    const data = {
        email: values.email,
        password: values.password,
        role: values.role,
        country: values.country,
        city: values.city,
        universal_name: values.universal_name,
    }

    const result = await request.post(`${baseUrl}/register/`, data)

    if (!result.status) {
        return result;
    } else {
        return {'errorMessage': 'Registration failed. Please fill all the fields to register successfully!'}
    }

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

export const logout = async () => request.post(`${baseUrl}/logout/`)