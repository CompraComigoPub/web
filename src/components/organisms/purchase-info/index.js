import React from "react";

// loading the sass style fot the component
import "./index.scss";
import Title from "components/molecules/title";
import DropZone from "components/atoms/drop-zone";
import PurchaseDetailTabDocs from "components/molecules/purchase-detail-tab-docs";
import AddressCard from "components/molecules/address-card";
import Button from "components/atoms/button";
import { Alert } from "components/molecules/alert/__stories__/index.stories";
import { useQuery } from "utils/graphql";
import addressByCompany from "utils/graphql/queries/company/addressByCompany";

function PurchaseInfo(props) {
  const {
    className = "",
    children,
    setValues,
    values,
    next,
    prev,
    ...other
  } = props;

  const { data } = useQuery(addressByCompany);
  const [files, setFiles] = React.useState([]);

  React.useEffect(() => {
    const address = data?.addressByCompany;
    const fileIds = files?.map((file) => file.id);
    setValues({ ...values, address, fileIds });
  }, [data, files]);// eslint-disable-line react-hooks/exhaustive-deps


  return (
    <div className={className} >
      <Title
        id="title"
        dataSubtitle={<>Complete suas informações</>}
        dataType="medium"
      >
        Informações Auxiliares
      </Title>
      <Alert id="alert" />
      <div
        className={"organism__purchase-info-container "}
        {...other}
      >
        <h2>Notas Fiscais</h2>
        <div className="row">
          <DropZone files={files} setFiles={setFiles} />
          <PurchaseDetailTabDocs showDeleteButton={true} documents={files} setDocuments={setFiles} />
        </div>
        <hr />
        <h2>Endereço de Entrega</h2>
        <AddressCard address={data?.addressByCompany} />
        {children}
      </div>
      <br />
      <div className="row-button">
        <Button variant="link" onClick={prev}>
          Anterior
        </Button>
        <Button onClick={next}>
          Continuar
        </Button>
      </div>
    </div>
  );
}

export default PurchaseInfo;
