import React, { useEffect, useState } from "react";
import firebase from "firebase/app";

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt-BR');
  const [token, setToken] = useState(null);
  const [loadingAuthState, setLoadingAuthState] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      const userToken = await user?.getIdToken();
      setToken(userToken);
      setLoadingAuthState(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ token, loadingAuthState, language, setLanguage }}>
      {children}
    </AuthContext.Provider>
  );
};
