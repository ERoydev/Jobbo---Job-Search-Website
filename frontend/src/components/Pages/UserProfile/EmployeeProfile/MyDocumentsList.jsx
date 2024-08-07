import MyDocumentsItem from "./MyDocumentsItem";
import * as DocumentsService from "../../../../services/DocumentsService";

export default function MyDocumentsList({
    documents,
}) {
    
    const downloadClickHandler = async (id) => {
        DocumentsService.downloadDocument(`http://127.0.0.1:8000/documents/${id}/download/`, id);
    };

    return(
        <>
            {documents.length > 0 && documents.map((doc) => <MyDocumentsItem key={doc.id} {...doc} downloadClickHandler={downloadClickHandler} />)}
            {documents.length == 0 && <h2>You haven't upload any documents yet.</h2>}
        </>
    );
}
