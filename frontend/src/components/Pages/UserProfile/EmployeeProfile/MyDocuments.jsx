import { useContext, useState, useEffect } from "react";
import AuthContext from "../../../../contexts/AuthContext";
import MyDocumentsList from "./MyDocumentsList";
import useErrors from "../../../../hooks/useErrors";
import * as DocumentsService from "../../../../services/DocumentsService";

const initialValues = {
    file: ''
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

        if (selectedFile) {
            clearError('file');

            const formData = new FormData();
            formData.append('file', selectedFile);
            formData.append('user', userId);
            const result = await DocumentsService.uploadDocument(formData, userId);
            console.log(result, '-')

            setDocuments(state => [...state, result])
        }
    }

    return (
        <>
            <div className="appliedJobs">
                <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
                    <label htmlFor="document_upload">Upload CV:</label>
                    <input type="file" name="file" onChange={handleFileChange} />
                    {error.file && <p className="formError">{error.file}</p>}
                    <button className="auth-btn" type="submit">Submit</button>
                </form>
                <MyDocumentsList documents={documents} />
            </div>
        </>
    );
}