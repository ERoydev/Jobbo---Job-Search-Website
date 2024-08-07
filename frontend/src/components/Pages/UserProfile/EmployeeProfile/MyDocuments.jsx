import { useContext, useState, useEffect } from "react";
import AuthContext from "../../../../contexts/AuthContext";
import MyDocumentsList from "./MyDocumentsList";
import useErrors from "../../../../hooks/useErrors";
import * as DocumentsService from "../../../../services/DocumentsService";

const initialValues = {
    file: '',
    wrongDocType: ''
}

export default function MyDocuments() {
    const { userId } = useContext(AuthContext);
    const [selectedFile, setSelectedFile] = useState(null);
    const {error, handleError, clearError} = useErrors(initialValues);
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        DocumentsService.getDocuments(userId)
            .then(setDocuments)
    }, [])  


    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(!selectedFile) {
            handleError('file', 'You must choose a PDF file to submit.');
        }

        else if (selectedFile && selectedFile.type == 'application/pdf') {
            clearError('file');
            clearError('wrongDocType');

            const formData = new FormData();
            formData.append('file', selectedFile);
            formData.append('user', userId);
            const result = await DocumentsService.uploadDocument(formData, userId);
            setDocuments(state => [...state, result])
            setSelectedFile(null)

            e.target.parentNode.querySelector('input[name="file"]').value = '';
        }

        else {
            handleError('wrongDocType', 'Only PDF file format allowed. Please try again!')
        }
    }

    return (
        <>
            <div className="appliedJobs">
                <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
                    <label htmlFor="document_upload">Upload CV:</label>
                    <input type="file" name="file" onChange={handleFileChange} />
                    {error.wrongDocType && <p className="formError">{error.wrongDocType}</p>}
                    {error.file && <p className="formError">{error.file}</p>}
                    <button className="auth-btn" type="submit">Submit</button>
                </form>
                <MyDocumentsList documents={documents} />
            </div>
        </>
    );
}