import { useState } from "react";

import FormInput from "../form-input/form-input.component";

import Button from "../button/button.component";

import './sign-in-form.styles.scss';
import { createUserDocumentFromAuth, signInWithGooglePopup, singInAuthUserWithEmailAndPAssword } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

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
      const { user }= await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
 
      const response = await singInAuthUserWithEmailAndPAssword(email, password);
      console.log(response);
      resetForm();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user. Email already in use");
      } 
      else {
        console.error("Sign Up Error: ", error);
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
        <Button  type="submit">Sign In</Button>
        <Button buttonType='google' onClick={signInWithGoogle} type="button">Google Sign In</Button>
       </div>
      </form>
    </div>
  );
};

export default SignInForm;
