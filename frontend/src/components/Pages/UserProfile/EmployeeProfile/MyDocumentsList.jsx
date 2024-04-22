import MyDocumentsItem from "./MyDocumentsItem";

export default function MyDocumentsList({
    documents,
}) {
    

    return(
        <>
            {documents.length > 0 && documents.map((doc) => <MyDocumentsItem key={doc.id} {...doc} />)}
            {documents.length == 0 && <h2>You haven't upload any documents yet.</h2>}
        </>
    );
}