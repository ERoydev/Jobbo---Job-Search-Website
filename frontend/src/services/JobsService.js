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

export const getAppliedJobs = async (userId) => {
    const result = await request.get(`${baseUrl}getjobs/${userId}/`)

    return result;
}

export const applyJob = async (jobId, ownerId) => {
    const result = await request.post(`${baseUrl}apply/${jobId}/${ownerId}/`)

    console.log(result)
}