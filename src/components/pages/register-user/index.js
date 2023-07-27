import React, { useState } from "react";
import Sidebanner from "components/organisms/side-banner";
import SignInPerson from "components/molecules/sign-in-person";
import SvgSuccess from "components/icons/Success";
import { useParams } from "react-router-dom";
import AccountSuccess from "components/molecules/account-success";
import AccountError from "components/molecules/account-error";
import PageLoader from "../../organisms/loader";
import { mutate } from "utils/graphql";
import createUserMt from "utils/graphql/mutations/user/create-user";
import { toast } from "react-toastify";
import uploadImage from "utils/graphql/mutations/user/upload-image";
import { useQuery } from "utils/graphql";
import decodeInviteUserToken from "utils/graphql/queries/auth/decodeUserToken";
// loading the sass style fot the component
import "./index.scss";

function RegisterUser(props) {
  const { className = "", children, ...other } = props;
  const param = useParams();
  const [created, setCreated] = useState(false);
  const [profilePic, setProfilePic] = React.useState();

  const { error, data, loading } = useQuery(decodeInviteUserToken, {
    token: param.token,
  });

  if (loading) {
    return <PageLoader />;
  }

  const submitForm = async (newUser) => {
    const result = await mutate(uploadImage, { file: profilePic });
    let form = newUser;
    form.photo = result?.data.uploadImage.url;
    form.companyId = data?.decodeInviteUserToken.decodedToken.companyId;
    form.inviterId = data?.decodeInviteUserToken.decodedToken.userId;
    form.role = "EMPLOYEE";
    form.token = param.token;
    await createUser(form);
  };

  async function createUser(params) {
    try {
      await mutate(createUserMt, params);
      setCreated(true);
    } catch (err) {
      toast.error(
        "Falha ao cadastrar usuário, verifique se o email não está cadastrado!"
      );
    }
  }

  return (
    <div className={"page__register-user-container " + className} {...other}>
      <Sidebanner />
      <div className="main-area">
        {!created && data ? (
          <div className="content-area">
            <div className="stepper">
              <div className="step-active">
                <SvgSuccess className="icon" />
                DADOS PESSOAIS
              </div>
            </div>
            <SignInPerson
              handler={submitForm}
              className="person"
              setProfilePic={setProfilePic}
              profilePic={profilePic}
              next={() => {}}
              hideBackButton={true}
            />
          </div>
        ) : error ? (
          <AccountError />
        ) : (
          <AccountSuccess createUser={true} />
        )}
      </div>
    </div>
  );
}

export default RegisterUser;
