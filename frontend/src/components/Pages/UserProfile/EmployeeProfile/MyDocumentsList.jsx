import * as DocumentsService from "../../../../services/DocumentsService";
import { useState, useEffect } from "react";
import MyDocumentsItem from "./MyDocumentsItem";

export default function MyDocumentsList({
    userId,
}) {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        DocumentsService.getDocuments(userId)
            .then(setDocuments)
    }, [])  

    console.log(documents)

    return(
        <>
            {documents.length > 0 && documents.map((doc) => <MyDocumentsItem key={doc.id} {...doc} />)}
            {documents.length == 0 && <h1>You haven't upload any documents yet.</h1>}
        </>
    );
}