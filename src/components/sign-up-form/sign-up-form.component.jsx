import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss'

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    setFormFields((p) => ({
      ...p,
      [event.target.name]: event.target.value,
    }));
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password === confirmPassword) {
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
        const userDocRef = await createUserDocumentFromAuth(user, {
          displayName,
        });

        resetFormFields();
        setErrorMessage("");
        setSuccessMessage("User successfully created :-)");
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          setErrorMessage("Cannot create user, email already in use!");
        } else {
          setErrorMessage(error.message);
          console.error(error);
        }
      }
    }
  };

  return (
    <div className="sign-up-container">
    <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          className="form-input"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label="Email"
          className="form-input"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          className="form-input"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
          //   minLength={6}
        />
        <FormInput
          label="Confirm Password"
          className="form-input"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          //   minLength={6}
        />
        <Button type="submit">Sign up</Button>
        {errorMessage ? (
          <p style={{ color: "red" }}>{errorMessage}</p>
        ) : (
          <p style={{ color: "green" }}>{successMessage}</p>
        )}
      </form>
    </div>
  );
};

export default SignUpForm;
