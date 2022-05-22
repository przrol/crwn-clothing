import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { async } from "@firebase/util";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
//   useEffect(() => {
//     async function redirectResult() {
//       // You can await here
//       const response = await getRedirectResult(auth);
//       if(response) {
//           const userDocRef = await createUserDocumentFromAuth(response.user)
//       }
//       // ...
//     }
//     redirectResult();
//   }, []); // Or [] if effect doesn't need props or state

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
