import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { domain } from '../../api/domain';
import styles from "./styles.module.scss";

const PdfViewer = ({ url }) => {
  const pdfUrl = url; // Replace with the actual path or URL of your PDF file

  return (
    <div className={styles.embed1}>
      <embed src={url} width="100%" height="600px" type="application/pdf" />
    </div>
  );
};

export default PdfViewer;