import React, { createContext, useContext, useEffect, useState } from 'react';
import { query } from 'utils/graphql';
import getUser from 'utils/graphql/queries/user/user';
import { AuthContext } from './authProvider';

const UserContext = createContext({});

function UserProvider({ children }) {
  const [userData, setUser] = useState({});
  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (token) {
      query(getUser)
        .then((result) => {
          setUser(result.data.user);
        });
    }
  }, [token]);

  return (
    <UserContext.Provider value={{ userData }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
}

export { UserProvider, UserContext, useUser };
