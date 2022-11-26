import { useState} from "react";

import FormInput from "../form-input/form-input.component";
import Button, {BUTTON_TYPE_CLASSES } from "../button/button.component";
// import { UserContext } from "../../contexts/user.context";

import {
  signInWithGooglePopup,
  singInAuthUserWithEmailAndPAssword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // const { setCurrentUser } = useContext(UserContext);

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  // useEffect(async () => {
  //     const response = await getRedirectResult(auth);

  //     if (response) {
  //         const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  // }, []);

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await singInAuthUserWithEmailAndPAssword(
        email,
        password
      );

      resetForm();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Email or password is incorrect");
          break;
        case "auth/user-not-found":
          alert("User not found");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have and Account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
          minLength="6"
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle} type="button">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
