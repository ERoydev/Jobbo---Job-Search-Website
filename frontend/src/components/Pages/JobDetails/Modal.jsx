import { useEffect, useState } from "react";
import * as DocumentService from "../../../services/DocumentsService";
import ModalDocumentItem from "./ModalDocumentItem";

export default function Modal({
    closeModalHandler,
    userId,
    applySubmitHandler,
}) {  
    const [documents, setDocuments] = useState([]);
    const [choosedDocument, setChoosedDocument] = useState(null);


    useEffect(() => {
        DocumentService.getDocuments(userId)
            .then(setDocuments)
    }, [])

    const chooseDocument = (id) => {
        setChoosedDocument(id);
    }

    const clearChoosedDocuments = () => {
        setChoosedDocument(null);
    }
    
    return (
        <>
            <div className="overlay" onClick={closeModalHandler}></div>
            <div className="modal">
                <p>Choose one of your uploaded CV's to apply for that job!</p>

                {documents.length > 0 && documents.map((doc) => <ModalDocumentItem key={doc.id} {...doc} chooseDocument={chooseDocument} choosedDocument={choosedDocument} clearChoosedDocuments={clearChoosedDocuments}/>)}
                <button className="auth-btn" onClick={() => applySubmitHandler(choosedDocument)}>Apply</button>
            </div>
        </>
    );
}