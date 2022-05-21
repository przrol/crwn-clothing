import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { async } from "@firebase/util";

const SignIn = () => {
  useEffect(() => {
    async function redirectResult() {
      // You can await here
      const response = await getRedirectResult(auth);
      if(response) {
          const userDocRef = await createUserDocumentFromAuth(response.user)
      }
      // ...
    }
    redirectResult();
  }, []); // Or [] if effect doesn't need props or state

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
