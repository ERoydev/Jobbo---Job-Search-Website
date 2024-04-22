import { useContext, useState } from "react";
import AuthContext from "../../../../contexts/AuthContext";
import MyDocumentsList from "./MyDocumentsList";

export default function MyDocuments() {
    const { userId } = useContext(AuthContext);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);
            formData.append('user', userId);
            await DocumentsService.uploadDocument(formData, userId);
        }
    }

    return (
        <>
            <div className="appliedJobs">
                <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
                    <label htmlFor="document_upload">Upload CV:</label>
                    <input type="file" name="file" onChange={handleFileChange} />
                    <button className="auth-btn" type="submit">Submit</button>
                </form>
                <MyDocumentsList userId={userId} />
            </div>
        </>
    );
}