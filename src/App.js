import React, { Suspense, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PageLoader from "./components/organisms/loader";
import LandingPage from "./components/pages/landing";
import AbimaqLandingPage from "./components/pages/abimaq-landing";
import Enter from "components/pages/enter";
import Register from "components/pages/register";

import pages from "./utils/data/pages";
import { /* useQuery, useLazyQuery, */ GQLProvider } from "./utils/graphql";
import Layout from "./utils/layout";
import { UserProvider, useUser } from "./utils/contexts/user";
import { AuthContext, AuthProvider } from "utils/contexts/authProvider";
import "./utils/styles/App.scss";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AnalysisRegister from "components/pages/analysisRegister";
import RegisterUser from "components/pages/register-user";

export default function TheApp() {
  return (
    <GQLProvider>
      <Router>
        <AuthProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </AuthProvider>
        <ToastContainer />
      </Router>
    </GQLProvider>
  );
}

function LoggedOut() {
  return <LandingPage />;
}

function App() {
  const { userData } = useUser();
  const { roleCompany, companyStatus } = userData;

  const { token, loadingAuthState } = useContext(AuthContext);

  if (loadingAuthState) {
    return null;
  }

  if (token) {
    return (
      <Layout>
        <Switch>{getPages(roleCompany, companyStatus)}</Switch>
      </Layout>
    );
  }

  if (window.location.pathname === "/abimaq") {
    return (
      <AbimaqLandingPage />
    );
  }

  if (window.location.pathname === "/entrar") {
    return (
      <Route path={"/entrar"}>
        <Suspense fallback={<PageLoader>{"Carregando.."}</PageLoader>}>
          <Enter />
        </Suspense>
      </Route>
    );
  }

  if (
    window.location.pathname.match(
      /^\/cadastrar\/[a-zA-Z0-9\-_.*&%#!$?@`´^~+,£¢₢;:ºª|§='"()¨]+$/
    )
  ) {
    return (
      <Route path={"/cadastrar/:token"}>
        <Suspense fallback={<PageLoader>{"Carregando.."}</PageLoader>}>
          <Register />
        </Suspense>
      </Route>
    );
  }

  if (
    window.location.pathname.match(
      /^\/cadastrar-usuario\/[a-zA-Z0-9\-_.*&%#!$?@`´^~+,£¢₢;:ºª|§='"()¨]+$/
    )
  ) {
    return (
      <Route path={"/cadastrar-usuario/:token"}>
        <Suspense fallback={<PageLoader>{"Carregando"}</PageLoader>}>
          <RegisterUser />
        </Suspense>
      </Route>
    );
  }

  return <LoggedOut />;
}

function getPages(role, companyStatus) {
  if (role) {
    if (companyStatus === "VALID") {
      return pages[role].map((page) => {
        const SuspendedComp = React.lazy(() =>
          import(`./components/pages/${page.name}`)
        );

        return (
          <Route path={page.path} key={page.name}>
            <Suspense fallback={<PageLoader>{page.loadMessage}</PageLoader>}>
              <SuspendedComp page={page} />
            </Suspense>
          </Route>
        );
      });
    }

    return (
      <Route>
        <Suspense fallback={<PageLoader>{"Carregando"}</PageLoader>}>
          <AnalysisRegister />
        </Suspense>
      </Route>
    );
  }
}


