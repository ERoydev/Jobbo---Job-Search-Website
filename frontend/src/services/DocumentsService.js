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

export const downloadDocument = async (url, id) => {
    fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/pdf",
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
        }
            return response.blob();
        })
        .then(blob => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `document_${id}.pdf`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(error => {
            console.error('There was a problem with the download:', error);
        });
}