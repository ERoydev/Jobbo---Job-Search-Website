import * as request from '../lib/request.js';


const baseUrl = 'http://127.0.0.1:8000/users';

export const getUser = async (userId) => {
    const result = await request.get(`${baseUrl}/${userId}/`)

    return result;
}

export const saveUser = async (values, userId) => {
    const formData = new FormData();
    formData.append('city', values.city);
    formData.append('country', values.country);
    formData.append('email', values.email);
    formData.append('phone_number', values.phone_number);
    formData.append('profile_picture', values.profile_picture);
    formData.append('role', values.role);
    formData.append('street', values.street);
    formData.append('universal_name', values.universal_name);

    const response = await fetch(`http://127.0.0.1:8000/users/${userId}/`,
     {
        method: 'POST',
        body: formData
      })

    if (response.ok) {
      const result = await response.json();
      return result
    }
    // const result = await request.post(`${baseUrl}/${userId}/`, values)
    // return result;
}