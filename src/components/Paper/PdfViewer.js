import React, { useState } from 'react';
import { Document, Page, pdfjs } from '@react-pdf-viewer';
import styles from "./styles.module.scss";

const PdfViewer = ({pdfUrl}) => {



        const [numPages, setNumPages] = useState(null);
        const [pageNumber, setPageNumber] = useState(1);
    
        function onDocumentLoadSuccess({ numPages }) {
            setNumPages(numPages);
        }
    
        return (
            <div>
                <Document
                    file={pdfUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
            </div>
        );
}

export default PdfViewer;