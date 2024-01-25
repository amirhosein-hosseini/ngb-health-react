import React from 'react';

const PdfOneViewer = () => {
  const pdfUrl = 'path-to-your-pdf-file.pdf'; // Replace with the actual path or URL of your PDF file

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <iframe
        title="PDF Viewer"
        src={`https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
        style={{ width: '100%', height: '100%' }}
        frameBorder="0"
      >
        Your browser does not support embedded PDF files.
      </iframe>
    </div>
  );
};

export default PdfOneViewer;