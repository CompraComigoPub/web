import React from "react";
import SignInPerson from "components/molecules/sign-in-person";
import SignInCompany from "components/molecules/sign-in-company";
import SvgSuccess from "components/icons/Success";
import SvgInative from "components/icons/Inative";

// loading the sass style fot the component
import "./index.scss";
import { mutate } from "utils/graphql";
import createCompanyMt from "utils/graphql/mutations/company/create-company";
import { toast } from "react-toastify";
import uploadImage from "utils/graphql/mutations/user/upload-image";

function SignIn(props) {
  const { className = "", children, setCreated, data, token, ...other } = props;

  const networkId = data.decodeInviteCompanyToken.decodedToken.networkId;
  const role = data.decodeInviteCompanyToken.decodedToken.role;
  const inviterId = data.decodeInviteCompanyToken.decodedToken.userId;
  const [step, setStep] = React.useState("company");
  const [formLoading, setFormLoading] = React.useState(false);
  const [formContent, setFormContent] = React.useState({});
  const [companyData, setCompanyData] = React.useState(null);
  const [companyPic, setCompanyPic] = React.useState();
  const [profilePic, setProfilePic] = React.useState();

  async function setPersonalInfo(info) {
    let form = { ...formContent };
    setFormContent(form);
    const result = await mutate(uploadImage, { file: profilePic });
    form.personal = info;
    form.personal = {
      ...form.personal,
      photo: result?.data.uploadImage.url,
      inviterId,
    };
    setFormLoading(true);
    doRegister(form);
  }

  async function setCompanyInfo(info) {
    let form = { ...formContent };
    form.company = info;
    setFormContent(form);
    if (companyPic) {
      const result = await mutate(uploadImage, { file: companyPic });
      form.company = { ...form.company, logo: result.data.uploadImage.url };
    }
  }

  async function doRegister(formData) {
    delete formData.personal.passwordConfirmation;
    const params = {
      ...formData.company,
      ...formData.company.address,
      role,
      networkId,
      token,
      user: formData.personal
    };
    setFormLoading(true);
    await createCompany(params);
    setFormLoading(false);
  }

  async function createCompany(params) {
    try {
      await mutate(createCompanyMt, params);
      setCreated(true);
    } catch (err) {
      toast.error("Não foi possível cadastrar sua empresa. Entre em contato conosco através do nosso chat.");
    }
  }
  return (
    <div className={"organism__sign-in-container " + className} {...other}>
      <div className="stepper">
        <div className="step-active" onClick={(_) => setStep("person")}>
          <SvgSuccess className="icon" />
          DADOS DA EMPRESA
        </div>
        <div className={step === "person" ? "step-active" : "step-inactive"}>
          {step === "person" ? (
            <SvgSuccess className="icon" />
          ) : (
            <SvgInative className="icon" />
          )}
          DADOS PESSOAIS
        </div>
      </div>

      <SignInCompany
        className={step === "company" ? null : "hidden"}
        handler={setCompanyInfo}
        setCompanyPic={setCompanyPic}
        companyPic={companyPic}
        companyData={companyData}
        setCompanyData={setCompanyData}
        next={setStep}
      />

      <SignInPerson
        className={step === "person" ? null : "hidden"}
        handler={setPersonalInfo}
        loading={!!formLoading}
        setProfilePic={setProfilePic}
        profilePic={profilePic}
        moveBack={(_) => {
          setStep("company");
        }}
      />

      {children}
    </div>
  );
}

export default SignIn;
