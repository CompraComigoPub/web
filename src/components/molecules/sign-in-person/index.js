import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { cpf } from "cpf-cnpj-validator";

import Button from "components/atoms/button";
import UploadImage from "components/atoms/upload-image";

import { maxLengthCheck, phoneMask } from "utils/input";

// loading the sass style fot the component
import "./index.scss";

function SignInPerson(props) {
  const {
    className = "",
    handler = () => void 0,
    children,
    profilePic,
    setProfilePic,
    loading = false,
    moveBack,
    hideBackButton = false,
    ...other
  } = props;

  const { register, handleSubmit } = useForm();
  let formContent = {};

  const isValidForm = (form) => {
    if (!profilePic) {
      toast.error("É necessário fazer o upload da imagem de perfil");
      return;
    }

    if (!cpf.isValid(form.cpf)) {
      toast.error("O valor informado não é um CPF válido.");
      return;
    }

    if (form.password !== form.passwordConfirmation) {
      toast.error("A confirmação de senha deve ser igual à senha indicada.");
      return;
    }

    return true;
  };

  const onSubmit = handleSubmit((data) => {
    formContent = data;
    if (isValidForm(formContent)) {
      handler(formContent);
    }
  });

  return (
    <div
      className={"molecule__sign-in-person-container " + className}
      {...other}
    >
      <div className="title">Criar nova conta</div>
      <div className="subtitle">Preenche com suas informações pessoais</div>
      <hr />
      <form className="form" onSubmit={onSubmit}>
        <div className="field">
          <div className="label">Nome completo*</div>
          <input
            {...register("name")}
            id="personName"
            type="text"
            placeholder="Digite seu nome"
            required
          />
        </div>
        <div className="field">
          <UploadImage register={register} setProfilePic={setProfilePic}>
            <p>Escolha uma imagem de perfil</p>
          </UploadImage>
        </div>
        <div className="field">
          <div className="label">CPF*</div>
          <input
            {...register("cpf")}
            onInput={maxLengthCheck}
            id="personCpf"
            type="number"
            maxlength={11}
            size={11}
            placeholder="Somente números"
            required
          />
        </div>
        <div className="field">
          <div className="label">Celular*</div>
          <input
            {...register("phone")}
            id="personPhone"
            type="text"
            placeholder="(00) 0000-0000"
            onInput={phoneMask}
            required
          />
        </div>
        <div className="field">
          <div className="label">Cargo/Função*</div>
          <input {...register("position")} id="personPosition" required />
        </div>
        <div className="field">
          <div className="label">E-mail*</div>
          <input
            {...register("email")}
            id="personEmail"
            type="email"
            placeholder="nome@empresa.com"
            required
          />
        </div>
        {/* <div className="field">
        <div className="label">Confirme seu e-mail</div>
        <input
          id="personEmailConfirmation"
          type="text"
          placeholder="nome@empresa.com"
        />
      </div> */}
        <div className="field">
          <div className="label">Crie uma senha*</div>
          <input
            {...register("password")}
            id="personPassword"
            type="password"
            minLength="6"
            required
          />
        </div>
        <div className="field">
          <div className="label">Confirme a senha*</div>
          <input
            {...register("passwordConfirmation")}
            id="personPasswordConfirmation"
            type="password"
            minLength="6"
            required
          />
        </div>
        <div className="buttons-container">
          <Button disabled={loading} className="button">
            <input
              className="content"
              type="submit"
              disabled={loading}
              value={loading ? "CADASTRANDO..." : "CADASTRAR"}
            />
          </Button>
          {!hideBackButton && (
            <Button className="button" variant="link" onClick={moveBack}>
              Voltar
            </Button>
          )}
        </div>
        <span>
          Ao se cadastrar está concordando com os{" "}
          <a
            href="https://www.uconex.com.br/privacy"
            target="_blank"
            rel="noreferrer"
          >
            termos de uso
          </a>
          .
        </span>
      </form>
      <hr />
      {/* <Button className="button" onClick={handleForm}>Continue</Button> */}

      {children}
    </div>
  );
}

export default SignInPerson;
