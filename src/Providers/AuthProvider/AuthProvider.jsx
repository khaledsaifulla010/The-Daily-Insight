import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

import { auth } from "../../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // SignIn Using Google //

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Register User //

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign In //

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Save User //

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("logged in user", currentUser);
        setUser(currentUser);
      } else {
        console.log("no user logged in");
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    signInWithGoogle,
    createUser,
    signIn,
    user,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
