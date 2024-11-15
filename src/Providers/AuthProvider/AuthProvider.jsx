import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext } from "react";

export const AuthContext = createContext(null);

import { auth } from "../../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  // SignIn Using Google //

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const name = "Khaled";

  const authInfo = {
    name,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
