import React from "react";
import DropZoneIcon from "../../icons/Upload";
import Dropzone from "react-dropzone";
import { mutate } from "utils/graphql";
import { singleFileUpload } from "utils/graphql/mutations/order";
import { toast } from "react-toastify";

// loading the sass style fot the component
import "./index.scss";

function DropZone(props) {
  const {
    className = "",
    children,
    onChange,
    multiple,
    setFiles,
    files,
    ...other
  } = props;

  const uploadFile = async (file) => {
    try {
      const result = await mutate(singleFileUpload, { file });
      const fileResult = result.data.singleUpload;
      fileResult.name = file.name;
      setFiles([...files, fileResult]);
    } catch (err) {
      toast.error("Não foi possível realizar o upload do arquivo");
    }
  };

  return (
    <div className={"atom__drop-zone-container " + className} {...other}>
      <Dropzone onDrop={(acceptedFiles) => uploadFile(acceptedFiles[0])}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input required {...getInputProps()} />
              <div className="drop-zone-content">
                <DropZoneIcon />
                <div className="drop-zone-text">
                  <span>Arraste e solte </span> ou <br />
                  <u>
                    <span className="select-option">Selecione um arquivo</span>
                  </u>
                </div>
              </div>
            </div>
          </section>
        )}
      </Dropzone>
    </div>
  );
}

export default DropZone;
