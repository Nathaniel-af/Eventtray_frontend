import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  getAuth,
  signInWithPhoneNumber,
  onAuthStateChanged,
  RecaptchaVerifier,
} from "firebase/auth";

const userAuthContext = createContext();
export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState("");
  // function signUp(email, password) {
  //   return createUserWithEmailAndPassword(auth, email, password);
  // }
  // function login(email, password) {
  //   return signInWithEmailAndPassword(auth, email, password);
  // }
  function setUpRecaptcha(value) {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, value, recaptchaVerifier);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider value={(user, setUpRecaptcha)}>
      {children}
    </userAuthContext.Provider>
  );
}
export function useUserAuth() {
  return useContext(userAuthContext);
}
