import BaseCard from "components/atoms/base-card";
import Button from "components/atoms/button";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { formatPersonalInfoMessage } from "utils/generalHelper";
import { mutate } from "utils/graphql";
import sendEmailWithUserInfo from "utils/graphql/mutations/user/sendEmailWithUserInfo";
import Alert from "../alert";
import InputSet from "../input-set";
import Cookies from "js-cookie";

// loading the sass style fot the component
import "./index.scss";

function PersonalInfo(props) {
  const { className = "", children, setPopUp, ...other } = props;

  const { register, handleSubmit } = useForm();
  const [radio, setRadio] = useState("");
  const [selectedBoxes, setBoxes] = useState([]);
  const [form, setForm] = useState({});
  const [submit, setSubmit] = useState(false);

  React.useEffect(() => {
    if (submit) {
      const message = formatPersonalInfoMessage(form);
      mutate(sendEmailWithUserInfo, { message })
        .catch((err) => {
          toast.error("Ocorreu um erro ao enviar as informações");
        })
        .finally(() => {
          setPopUp(false);
          Cookies.set("cc_personal_info_sent", true);
        });
    }
  }, [form, submit]);  // eslint-disable-line react-hooks/exhaustive-deps

  const radios = document.querySelectorAll("input[type=radio]");
  const boxes = document.querySelectorAll("input[type=checkbox]");

  const checkRadios = () => {
    [...radios].forEach((item) => {
      if (item.checked) {
        setRadio(item.value);
      }
    });
  };

  const checkBoxes = () => {
    let checkedArray = [];
    [...boxes].forEach((item) => {
      if (item.checked) {
        checkedArray.push(item.value);
      }
    });
    setBoxes(checkedArray);
  };

  const onSubmit = handleSubmit((data) => {
    if (radio === "" || selectedBoxes.length === 0) {
      toast.error("Preencha todo o formulário para prosseguir");
    } else {
      setForm({
        ...data,
        radio: { label: "Qual o lead time médio de compras", value: [radio] },
        boxes: {
          label:
            "Quais as principais fontes de abastecimento de aço para a empresa?",
          value: selectedBoxes,
        },
      });
      setSubmit(true);
      toast.success("Informações enviadas, obrigado!");
    }
  });

  return (
    <div
      className={"molecule__personal-info-container " + className}
      {...other}
    >
      <BaseCard id="card">
        <h2>Precisamos conhecer você!</h2>
        <Alert
          id="alert"
          title="ALERTA DE PRIVACIDADE"
          subtitle="As informações destes formulários estarão disponíveis apenas para a equipe do Compra Comigo."
        />
        <form onSubmit={onSubmit} id="text">
          <p>Qual o seu consumo estimado ANUAL?</p>
          <section>
            <InputSet
              {...register("ALQ")}
              label="Aço Laminado à Quente"
              type="text"
              style={{ minWidth: 100 }}
              required
            />
            <span>Toneladas</span>
          </section>
          <section>
            <InputSet
              {...register("ALF")}
              label="Aço Laminado à Frio"
              type="text"
              style={{ minWidth: 100 }}
              required
            />
            <span>Toneladas</span>
          </section>
          <section>
            <InputSet
              {...register("AP")}
              label="Chapas Grossas"
              type="text"
              style={{ minWidth: 100 }}
              required
            />
            <span>Toneladas</span>
          </section>
          <section>
            <InputSet
              {...register("AG")}
              label="Aço Galvanizado"
              type="text"
              style={{ minWidth: 100 }}
              required
            />
            <span>Toneladas</span>
          </section>
          <section>
            <InputSet
              {...register("AI")}
              label="Aço Inox"
              type="text"
              style={{ minWidth: 100 }}
              required
            />
            <span>Toneladas</span>
          </section>
          <p>Qual o lead time médio de compras?</p>
          <div id="radios">
            <div>
              <input
                onChange={checkRadios}
                type="radio"
                id="7-15"
                name="time"
                value="7-15"
              />
              <label for="7-15">7-15 dias</label>
            </div>

            <div>
              <input
                onChange={checkRadios}
                type="radio"
                id="15-30"
                name="time"
                value="15-30"
              />
              <label for="15-30">15-30 dias</label>
            </div>

            <div>
              <input
                onChange={checkRadios}
                type="radio"
                id="30-60"
                name="time"
                value="30-60"
              />
              <label for="30-60">30 - 60 dias</label>
            </div>

            <div>
              <input
                onChange={checkRadios}
                type="radio"
                id="+60"
                name="time"
                value="+60"
              />
              <label for="+60"> + 60 dias</label>
            </div>
          </div>

          <p>
            Quais as principais fontes de abastecimento de aço para a empresa?
          </p>

          <div id="radios">
            <div>
              <input
                onChange={checkBoxes}
                type="checkbox"
                id="distrBR"
                name="suppliers"
                value="Distribuição Brasil"
              />
              <label for="distrBR">Distribuição Brasil</label>
            </div>
            <div>
              <input
                onChange={checkBoxes}
                type="checkbox"
                id="distr&usinBR"
                name="suppliers"
                value="Distribuição e Usinas Brasil"
              />
              <label for="distr&usinBR">Distribuição e Usinas Brasil</label>
            </div>
            <div>
              <input
                onChange={checkBoxes}
                type="checkbox"
                id="usinBR"
                name="suppliers"
                value="Usinas Brasil"
              />
              <label for="usinBR">Usinas Brasil</label>
            </div>
            <div>
              <input
                onChange={checkBoxes}
                type="checkbox"
                id="usinBR&import"
                name="suppliers"
                value="Usinas Brasil e importação"
              />
              <label for="usinBR&import">Usinas Brasil e importação</label>
            </div>
          </div>
          <div id="row">
            <Button
              onClick={() => {
                Cookies.set("cc_personal_info_timestamp", new Date().toISOString());
                setPopUp(false);
              }}
              variant="link"
            >
              Responder mais tarde
            </Button>
            <Button>
              <input
                style={{ cursor: "pointer" }}
                value="Enviar Informações"
                type="submit"
              />
            </Button>
          </div>
        </form>
      </BaseCard>
    </div>
  );
}

export default PersonalInfo;
