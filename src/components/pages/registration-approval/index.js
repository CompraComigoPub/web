import Button from "components/atoms/button";
import Loader from "components/atoms/loader";
import Title from "components/molecules/title";
import React from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useQuery, mutate } from "utils/graphql";
import companyDataQR from "utils/graphql/queries/all/company-data";
import updateNetworkStatus from "utils/graphql/mutations/operator/updateNetworkStatus";

// loading the sass style fot the component
import "./index.scss";
import ApprovalConclusion from "components/molecules/approval-conclusion";
import { formatRoleText } from "utils/generalHelper";

function RegistrationApproval(props) {
  const { className = "", children, ...other } = props;

  const param = useParams();
  const [approving, setApproving] = React.useState(false);
  const [reproving, setReproving] = React.useState(false);
  const [conclusion, setConclusion] = React.useState(false);
  const [reprove, setReprove] = React.useState(null);
  const [justify, setJustify] = React.useState(false);
  const id = param.itemId;
  const { data, loading } = useQuery(
    companyDataQR,
    { id },
    { fetchPolicy: "no-cache" }
  );

  if (loading) {
    return <Loader>Carregando...</Loader>;
  }

  const handleChange = (e) => {
    if (e.target.value !== "") {
      setJustify(false);
    }
  };

  const updateStatus = async (status, e) => {
    const description = document.querySelector("#description").value;
    if (description === "" && status === "INVALID") {
      e.preventDefault();
      setJustify(true);
      return;
    }
    const methodText = status === "INVALID" ? "reprovar" : "aprovar";
    const approved = status === "INVALID" ? false : true;
    const reproved = status === "INVALID" ? true : false;

    try {
      await mutate(updateNetworkStatus, { companyId: id, status, description });
      setApproving(approved);
      setReproving(reproved);
    } catch (err) {
      toast.error(`Erro ao ${methodText} empresa`);
    } finally {
      setApproving(!approved);
      setReproving(!reproved);
      setConclusion(true);
      setReprove(status === "INVALID");
    }
  };

  return (
    <div
      className={"page__registration-approval-container " + className}
      {...other}
    >
      <Title
        dataSubtitle={<>Aprove a entrada de novas empresas na rede</>}
        dataType="big"
        separator
      >
        Aprovação de cadastro
      </Title>

      {conclusion ? (
        <ApprovalConclusion
          reprove={reprove}
          buttonLink={"/cadastros"}
          subtitle={"o cadastro"}
          title={"A empresa será notificada que a solicitação foi "}
        />
      ) : (
        <>
          <div id="card">
            <section>
              <h2>Informações da Empresa</h2>
              <img src={data?.company.logo} alt=""></img>
            </section>
            <section>
              <div>
                <h3>Nome fantasia</h3>
                <p>{data?.company.tradeName}</p>
              </div>
              <div>
                <h3>Razão social</h3>
                <p>{data?.company.name}</p>
              </div>
            </section>
            <section>
              <div>
                <h3>CNPJ</h3>
                <p>{data?.company.cnpj}</p>
              </div>
              <div>
                <h3>Perfil da empresa</h3>
                <p>{formatRoleText(data?.company.role)}</p>
              </div>
            </section>
            <hr />
            <section>
              <div>
                <h3>Estado</h3>
                <p>{data?.company.addresses[0].state}</p>
              </div>
              <div>
                <h3>Cidade</h3>
                <p>{data?.company.addresses[0].city}</p>
              </div>
            </section>
            <section>
              <div>
                <h3>Bairro</h3>
                <p>{data?.company.addresses[0].neighborhood}</p>
              </div>
              <div>
                <h3>Rua</h3>
                <p>{data?.company.addresses[0].street}</p>
              </div>
            </section>
            <section>
              <div>
                <h3>Número</h3>
                <p>{data?.company.addresses[0].numericIndentifier || "S/N"}</p>
              </div>
              <div>
                <h3>Complemento</h3>
                <p>
                  {data?.company.addresses[0].complement || "Não informado"}
                </p>
              </div>
            </section>
            <section>
              <div>
                <h3>CEP</h3>
                <p>{data?.company.addresses[0].zipcode}</p>
              </div>
            </section>
            <hr />
            <h2>Informações do Usuário</h2>
            <section>
              <div>
                <h3>Nome</h3>
                <p>{data?.company.users[0].name}</p>
              </div>
              <div>
                <h3>E-mail</h3>
                <p>{data?.company.users[0].email}</p>
              </div>
            </section>
            <section>
              <div>
                <h3>Celular</h3>
                <p>{data?.company.users[0].phone}</p>
              </div>
              <div>
                <h3>CPF</h3>
                <p>{data?.company.users[0].cpf}</p>
              </div>
            </section>

            <div>
              <h3>Cargo</h3>
              <p>{data?.company.users[0].position}</p>
            </div>
          </div>

          <div
            className={justify ? "observation-area red" : "observation-area"}
          >
            <textarea
              onChange={handleChange}
              id="description"
              rows="5"
              cols="33"
              type="text"
              placeholder="Descreva aqui alguma observação."
            />
            <small>
              Por que você não irá o cadastro? Por favor, justifique.
            </small>
          </div>

          <div id="action-zone">
            <Button
              className="button"
              variant="link"
              disabled={reproving}
              onClick={(e) => updateStatus("INVALID", e)}
            >
              {reproving ? "Reprovando cadastro..." : "Não aprovar o cadastro"}
            </Button>

            <Button disabled={approving} onClick={() => updateStatus("VALID")}>
              {approving ? "Aprovando cadastro..." : "Aprovar cadastro"}
            </Button>
          </div>
        </>
      )}

      {children}
    </div>
  );
}

export default RegistrationApproval;
