import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { domain } from '../../api/domain';

const PdfViewer = ({ url }) => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  if (!url) {
    return <p>No PDF URL provided.</p>;
  }

  console.log(url)

  return (
    <div>
      {url != null ?
        <Document file={domain + url.substring(1)} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        :""
      }
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default PdfViewer;