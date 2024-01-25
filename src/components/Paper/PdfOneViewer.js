import React from 'react';
import { domain } from '../../api/domain';
import styles from "./styles.module.scss";

const PdfOneViewer = ({url}) => {
  const pdfUrl = url; // Replace with the actual path or URL of your PDF file

  return (
    <div className={styles.embed}>
      <embed src={domain + url.substring(1)} width="100%" height="600px" type="application/pdf" />
    </div>
  );
};

export default PdfOneViewer;