import { auth } from '../firebase/index';

export function useAuth() {
  return {
    login: (data) => {
      return auth.signInWithEmailAndPassword(data.email, data.password);
    },
    logout: () => {
      return auth.signOut();
    },
    ...auth,
  };
}