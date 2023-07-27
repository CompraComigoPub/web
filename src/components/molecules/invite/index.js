import React, { useEffect, useState } from "react";
// import Modal from '../../atoms/modal';
import TagCheck from "../../atoms/tagcheck";
import InputSet from "../../molecules/input-set";
import Modal from "components/atoms/modal";
// import OuterHeader from "components/molecules/header";
import ExitIcon from "../../icons/Exit";

// loading the sass style fot the component
import "./index.scss";
import { mutate } from "utils/graphql";
import generateInviteToken from "utils/graphql/mutations/user/generate-inviteToken";
import generateInviteUserToken from "utils/graphql/mutations/user/generate-inviteUserToken";

import { toast } from "react-toastify";

const STEPS = [
  {
    subtitle: "Escolha a opcão mais adequada.",
    title: "Qual o perfil do convidado?",
    type: "profile",
    button: "Continue",
  },
  // {
  //   button: "Enviar convite",
  //   subtitle: "Preencha com as informações de envio.",
  //   title: "Enviar Convite",
  //   type: "send"
  // },
  {
    button: "Fechar",
    subtitle: "Escolha a opcão mais adequada.",
    title: "Qual o perfil do convidado?",
    type: "confirm",
  },
];

function Invite(props) {
  const {
    className = "",
    children,
    // title,
    // subtitle,
    // type,   // profile, send, confirm
    // button,
    userOnly = false,
    selected,
    ...other
  } = props;
  const [modalOpened, setModalOpened] = useState(false);
  const [step, setStep] = useState(0);
  const [userType, setUserType] = useState("buyer");
  const [inviteURL, setInviteUrl] = useState(null);

  useEffect(
    (_) => {
      if (modalOpened === false) {
        if (userOnly) {
          generateInviteUserUrl();
          setStep(1);
        } else {
          setStep(0);
        }
      }
    },
    [modalOpened] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const { title, subtitle, type, button } = STEPS[step];

  async function moveNext() {
    if (STEPS[step + 1]) {
      setStep(step + 1);
      generateInviteCompanyUrl();
    } else {
      setModalOpened(false);
    }
  }

  async function generateInviteCompanyUrl() {
    try {
      const {
        data: {
          generateInviteCompanyToken: { tokenGenerated, success },
        },
      } = await mutate(generateInviteToken, { role: userType });
      if (!success) throw new Error("Não foi possível gerar Url");
      const inviteURL = `${
        window.location.protocol + "//" + window.location.host
      }/cadastrar/${tokenGenerated}`;
      setInviteUrl(inviteURL);
    } catch (error) {
      toast.error("Não foi possível gerar Url");
    }
  }

  async function generateInviteUserUrl() {
    try {
      const {
        data: {
          generateInviteUserToken: { tokenGenerated, success },
        },
      } = await mutate(generateInviteUserToken);
      if (!success) throw new Error("Não foi possível gerar Url");
      const inviteURL = `${
        window.location.protocol + "//" + window.location.host
      }/cadastrar-usuario/${tokenGenerated}`;
      setInviteUrl(inviteURL);
    } catch (error) {
      toast.error("Não foi possível gerar Url");
    }
  }

  function selectUserType(type) {
    setUserType(type);
  }

  function isStepValid() {
    if (step === 0) {
      return userType ? true : false;
    }
    // if (step === 1) {

    // }
    return true;
  }

  return (
    <div
      className={"molecule__invite-container " + className}
      data-type={type}
      // data-selected={1}
      {...other}
    >
      {/* temporary button just to call the modal */}
      <button onClick={(_) => setModalOpened(true)}>{children}</button>

      <Modal
        onClose={(_) => {
          setModalOpened(false);
        }}
        open={modalOpened}
      >
        {type === "confirm" ? (
          <div className="confirmation">
            <ExitIcon
              className="close-button"
              onClick={(_) => setModalOpened(false)}
            />
            <TagCheck primary />
            <span id="title">
              Convite criado!
              <br />
            </span>
            <span id="subtitle">Compartilhe o link do convite abaixo.</span>
            <div className="button">
              <button
                onClick={(_) =>
                  window.open(
                    `whatsapp://send?text=Participe do Compra Comigo clicando no link a seguir: ${inviteURL}`
                  )
                }
              >
                Compartilhar no WhatsApp
              </button>
              <a
                href={`mailto:?subject=Convite Compra Comigo&body=Participe do Compra Comigo clicando no link a seguir: ${inviteURL}`}
              >
                <button id="email">Compartilhar no E-mail</button>
              </a>
            </div>
          </div>
        ) : (
          <div>
            <div className="close-button">
              <ExitIcon onClick={(_) => setModalOpened(false)} />
            </div>
            <div className="card-title">
              <span id="title">{title}</span>
              <span id="subtitle">{subtitle}</span>
            </div>
            <div className="content">
              {type === "profile" ? (
                <div className="cards">
                  <div
                    className="card-item"
                    onClick={(_) => selectUserType("BUYER")}
                    data-selected={userType === "BUYER" ? 1 : null}
                  >
                    <div>
                      <span id="buyer">Amigo Comprador</span>
                      <p>
                        Trabalha no setor de compras e esta em busca de
                        oportunidades de compra para sua empresa.
                      </p>
                    </div>
                    <div>
                      <TagCheck primary />
                    </div>
                  </div>
                  <div
                    className="card-item"
                    onClick={(_) => selectUserType("SELLER")}
                    data-selected={userType === "SELLER" ? 1 : null}
                  >
                    <div>
                      <span id="buyer">Amigo Vendedor</span>
                      <p>
                        Trabalha no setor de vendas e esta em busca de
                        oportunidades de venda para sua empresa.
                      </p>
                    </div>
                    <div>
                      <TagCheck primary />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="forms">
                  <InputSet label="Nome" name="name" placeholder="Nome" />
                  <InputSet
                    label="E-mail"
                    name="email"
                    type="email"
                    placeholder="E-mail"
                  />
                </div>
              )}
            </div>
            <div className="button">
              <button onClick={moveNext} disabled={!isStepValid()}>
                {button}
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Invite;
