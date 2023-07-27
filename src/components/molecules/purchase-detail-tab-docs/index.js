import React from 'react';
import IcnPdf from 'components/icons/IcnPdf';
import { CgTrash } from 'react-icons/cg';

// loading the sass style fot the component
import './index.scss';

function PurchaseDetailTabDocs(props) {
  const {
    className = "",
    documents = [],
    setDocuments,
    children,
    showDeleteButton = false,
    ...other
  } = props;

  const deleteDocument = (i) => {
    const newList = documents.filter((item)=> item !== documents[i]);
    setDocuments(newList);
  };

  function drawCards(doc, i) {
    return (
      <div className='document'>
        <a href={doc.url}>
          <div className="doc-card">
            <IcnPdf />
            <div className="name">{doc.name}</div>
          </div>
        </a>
        { showDeleteButton && (
          <CgTrash onClick={() => deleteDocument(i)} />
        )}
      </div>
    );
  }

  return <div
    className={"molecule__purchase-detail-tab-docs-container " + className}
    {...other}
  >
    {documents.length !== 0 ?
      documents.map((doc, i) => { return drawCards(doc, i); })
      :
      null
    }
    {children}
  </div>;
}

export default PurchaseDetailTabDocs;
