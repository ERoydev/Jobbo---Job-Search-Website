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
            console.log('Document uploaded successfully:', data);
        } else {
            console.error('Failed to upload document');
        }

    } catch (error) {
        console.error('Error uploading document:', error);
    }
}