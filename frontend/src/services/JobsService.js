import * as request from '../lib/request';

const baseUrl = 'http://127.0.0.1:8000/api/jobposts/';

export const postJob = async (values, userId) => {
    const result = await request.post(`${baseUrl}`, {...values, ownerId: userId})

    return result;
}   

// TODO Add filter on backend
export const getAllJobs = async (userId) => {
    const result = await request.get(`${baseUrl}`)

    return Object.values(result).filter(job => job.ownerId == userId);
}

export const getOneJob = async (jobId) => {
    const result = await request.get(`${baseUrl}${jobId}`)

    return result;
}