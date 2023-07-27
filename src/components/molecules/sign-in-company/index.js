import React, { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { cnpj } from "cpf-cnpj-validator";
import cep from "cep-promise";

import Button from "components/atoms/button";
import Checkbox from "components/atoms/checkbox";
import UploadCompanyPhoto from "components/atoms/upload-company-photo";

import { query } from "utils/graphql";
import companyByCnpj from "utils/graphql/queries/company/companyByCnpj";
import { maxLengthCheck } from "utils/input";

// loading the sass style fot the component
import "./index.scss";

function SignInCompany(props) {
  const {
    className = "",
    handler = () => void 0,
    children,
    setCompanyPic,
    companyPic,
    companyData,
    setCompanyData,
    next,
    ...other
  } = props;

  const [noAddressNumber, setnoAddressNumber] = React.useState(false);
  const companyNoAddressNumber = function (event) {
    setnoAddressNumber(event.target.checked);
  };

  let formContent = {};
  const { register, watch, handleSubmit } = useForm();
  const addressNumber = watch("address.numericIndentifier");
  const zipcode = watch("address.zipcode");
  const cnpjValue = watch("cnpj");
  const [addressByZipCode, setAddressByZipCode] = React.useState(null);
  const [enabled, setEnabled] = React.useState(false);

  useEffect(() => {
    if (zipcode?.length === 8) {
      cep(zipcode).then((result) => {
        result && setAddressByZipCode(result);
      });
    }
  }, [zipcode]);

  useEffect(() => {
    if (cnpjValue?.length === 14) {
      if (!cnpj.isValid(cnpjValue)) {
        setEnabled(false);
        toast.error("O valor informado não é um CNPJ válido.");
        return;
      }

      query(companyByCnpj, { cnpj: cnpjValue }).then((response) => {
        const { companyByCnpj } = response.data;
        if (companyByCnpj) {
          setEnabled(false);
          toast.error(
            "Não é possível cadastrar este CNPJ. Entre em contato conosco através do nosso chat."
          );
          return;
        }

        setEnabled(true);
      });
    }
  }, [cnpjValue]);

  const isValidForm = (form) => {
    if (!cnpj.isValid(form.cnpj)) {
      toast.error("O valor informado não é um CNPJ válido.");
      return;
    }

    if (!companyPic) {
      toast.error("É necessário fazer o upload da imagem da empresa");
      return;
    }

    return true;
  };

  const onSubmit = handleSubmit((data) => {
    formContent = data;
    formContent.address =
      {
        ...addressByZipCode,
        zipcode: data.address.zipcode,
        numericIndentifier: data.address.numericIndentifier
          ? parseInt(data.address.numericIndentifier)
          : null,
        complement: data.address.complement,
      } || data.address;

    if (isValidForm(formContent)) {
      handler(formContent);
      next("person");
    }
  });

  return (
    <div
      className={"molecule__sign-in-company-container " + className}
      {...other}
    >
      <div className="title">Criar nova conta</div>
      <div className="subtitle">
        Preencha com as informações da sua empresa.
      </div>
      <hr />

      <form className="form" data-visible={1} onSubmit={onSubmit}>
        <div className="field">
          <div className="label">CNPJ (somente números)*</div>
          <input
            {...register("cnpj")}
            onInput={maxLengthCheck}
            id="companyCnpj"
            type="number"
            maxlength={14}
            placeholder="Somente números"
            required
          />
        </div>
        {enabled && (
          <Fragment>
            <div className="field">
              <UploadCompanyPhoto
                logo={companyData?.logo}
                setCompanyPic={setCompanyPic}
              >
                {!companyData?.logo && <p>Escolha uma imagem da empresa</p>}
              </UploadCompanyPhoto>
            </div>
            <div className="field">
              <div className="label">Razão social*</div>
              <input
                {...register("name")}
                id="name"
                type="text"
                value={companyData?.name || undefined}
                placeholder="Digite a razão social"
                required
              />
            </div>
            <div className="field">
              <div className="label">Nome fantasia*</div>
              <input
                {...register("tradeName")}
                id="tradeName"
                type="text"
                value={companyData?.tradeName || undefined}
                placeholder="Digite como é chamado"
                required
              />
            </div>
            <div className="field">
              <div className="label">CEP*</div>
              <div className="halfInput">
                <input
                  {...register("address.zipcode")}
                  id="companyCep"
                  type="text"
                  value={companyData?.addresses[0].zipcode || undefined}
                  maxLength={8}
                  placeholder="00000000"
                  required
                />
                <div className="check">
                  <a
                    href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Não sei o CEP
                  </a>
                </div>
              </div>
            </div>
            <div className="field">
              <div className="label">Estado*</div>
              <select
                // readOnly={addressByZipCode}
                value={
                  companyData?.addresses[0].state ||
                  addressByZipCode?.state ||
                  undefined
                }
                {...register("address.state")}
                id="companyState"
                required
              >
                <option id="AC" value="AC">
                  Acre
                </option>
                <option id="AL" value="AL">
                  Alagoas
                </option>
                <option id="AP" value="AP">
                  Amapá
                </option>
                <option id="AM" value="AM">
                  Amazonas
                </option>
                <option id="BA" value="BA">
                  Bahia
                </option>
                <option id="CE" value="CE">
                  Ceará
                </option>
                <option id="DF" value="DF">
                  Distrito Federal
                </option>
                <option id="ES" value="ES">
                  Espírito Santo
                </option>
                <option id="GO" value="GO">
                  Goiás
                </option>
                <option id="MA" value="MA">
                  Maranhão
                </option>
                <option id="MT" value="MT">
                  Mato Grosso
                </option>
                <option id="MS" value="MS">
                  Mato Grosso do Sul
                </option>
                <option id="MG" value="MG">
                  Minas Gerais
                </option>
                <option id="PA" value="PA">
                  Pará
                </option>
                <option id="PB" value="PB">
                  Paraíba
                </option>
                <option id="PR" value="PR">
                  Paraná
                </option>
                <option id="PE" value="PE">
                  Pernambuco
                </option>
                <option id="PI" value="PI">
                  Piauí
                </option>
                <option id="RJ" value="RJ">
                  Rio de Janeiro
                </option>
                <option id="RN" value="RN">
                  Rio Grande do Norte
                </option>
                <option id="RS" value="RS">
                  Rio Grande do Sul
                </option>
                <option id="RO" value="RO">
                  Rondônia
                </option>
                <option id="RR" value="RR">
                  Roraima
                </option>
                <option id="SC" value="SC">
                  Santa Catarina
                </option>
                <option id="SP" value="SP">
                  São Paulo
                </option>
                <option id="SE" value="SE">
                  Sergipe
                </option>
                <option id="TO" value="TO">
                  Tocantins
                </option>
              </select>
            </div>
            <div className="field">
              <div className="label">Cidade*</div>
              <input
                {...register("address.city")}
                id="companyCity"
                type="text"
                placeholder="Digite a cidade"
                required
                // readOnly={addressByZipCode}
                value={
                  companyData?.addresses[0].city ||
                  addressByZipCode?.city ||
                  undefined
                }
              />
            </div>
            <div className="field">
              <div className="label">Bairro*</div>
              <input
                {...register("address.neighborhood")}
                id="companyNeighborhood"
                type="text"
                placeholder="Digite o bairro"
                // readOnly={addressByZipCode}
                value={
                  companyData?.addresses[0].neighborhood ||
                  addressByZipCode?.neighborhood ||
                  undefined
                }
                required
              />
            </div>
            <div className="field">
              <div className="label">Rua/Avenida*</div>
              <input
                {...register("address.street")}
                id="companyAddress"
                type="text"
                placeholder="Digite o nome da rua"
                // readOnly={addressByZipCode}
                value={
                  companyData?.addresses[0].street ||
                  addressByZipCode?.street ||
                  undefined
                }
                required
              />
            </div>
            <div className="field">
              <div className="label">Número</div>
              <div className="halfInput">
                <input
                  {...register("address.numericIndentifier")}
                  id="companyAddressNumber"
                  type="number"
                  placeholder=""
                  value={
                    companyData?.addresses[0].numericIndentifier || undefined
                  }
                />
                {addressNumber?.length === 0 && (
                  <div className="check">
                    <div className="checkboxContainer">
                      <Checkbox
                        id="companyNoAddressNumber"
                        onClick={companyNoAddressNumber}
                        checked={noAddressNumber}
                      />
                    </div>
                    <span>Sem número</span>
                  </div>
                )}
              </div>
            </div>
            <div className="field">
              <div className="label">Referência</div>
              <input
                {...register("address.complement")}
                id="companyAddressReference"
                type="text"
                placeholder="Opcional"
                value={companyData?.addresses[0].complement || undefined}
              />
            </div>
            <br />
            <Button id="button">
              <input className="content" type="submit" value="CONTINUAR" />
            </Button>
          </Fragment>
        )}
      </form>
      {children}
    </div>
  );
}

export default SignInCompany;
