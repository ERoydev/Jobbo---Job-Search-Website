import * as request from '../lib/request';

const baseUrl = 'https://jobbo.onrender.com/api/categories';


export const getAllCategories = async () => {
    const result = await request.get(baseUrl)

    return Object.values(result);
}