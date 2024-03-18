import * as request from '../lib/request';

const baseUrl = 'http://127.0.0.1:8000/api/jobposts/';

export const postJob = async (values, userId) => {
    console.log(values)
    const result = await request.post(`${baseUrl}`, values)

    return result;
}   