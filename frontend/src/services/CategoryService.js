import * as request from '../lib/request';

const baseUrl = 'http://127.0.0.1:8000/api/categories';


export const getAllCategories = async () => {
    const result = await request.get(baseUrl)

    return Object.values(result);
}