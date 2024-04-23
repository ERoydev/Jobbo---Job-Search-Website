import { useEffect, useState } from "react";
import * as DocumentService from "../../../services/DocumentsService";
import ModalDocumentItem from "./ModalDocumentItem";

export default function Modal({
    closeModalHandler,
    userId,
}) {  
    const [documents, setDocuments] = useState([]);


    useEffect(() => {
        DocumentService.getDocuments(userId)
            .then(setDocuments)
    }, [])

    const chooseDocument = (id) => {
        console.log(id)
    }
    
    return (
        <>
            <div className="overlay" onClick={closeModalHandler}></div>
            <div className="modal">
                <p>Choose one of your uploaded CV's to apply for that job!</p>

                {documents.length > 0 && documents.map((doc) => <ModalDocumentItem key={doc.id} {...doc} chooseDocument={chooseDocument}/>)}
            </div>
        </>
    );
}