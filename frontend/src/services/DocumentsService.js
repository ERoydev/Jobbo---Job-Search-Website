import * as request from '../lib/request';

const baseUrl = 'http://127.0.0.1:8000/documents';

export const uploadDocument = async (formData, id) => {
    try {
        const response = await fetch(`${baseUrl}/${id}/`, {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error('Failed to upload document');
        }

    } catch (error) {
        console.error('Error uploading document:', error);
    }
}

export const getDocuments = async (userId) => {
    try {
        const response = await request.get(`${baseUrl}/getDocument/${userId}/`)

        if (response.status == 200) {
            return response.data;

        } else {
            console.log('Error 0 documents uploaded')
        }
    }
    
    catch (error) {
        console.log('Error with get documents')
    }
}