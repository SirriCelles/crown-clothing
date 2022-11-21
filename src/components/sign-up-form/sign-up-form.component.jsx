import { useState } from "react";
import { createAuthUserWithEmailAndPAssword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const resetForm = () => {
    setFormFields(defaultFormFields);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
        alert('Passord mismatch');
        return;
    }


    try {
        const { user } = await createAuthUserWithEmailAndPAssword(email, password); 
        
        await createUserDocumentFromAuth(user, {displayName: displayName});

        resetForm();

    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            alert('Cannot create user. Email already in use');
        } else if (error.code === 'auth/weak-password') {
            alert('Password should be at least 6 characters');
        }
        else {
            console.error('Sign Up Error: ', error);
        }   
    }

  }

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}

        />

        <label>Email</label>
        <input 
            type="email"  
            required 
            onChange={handleChange} 
            name="email" 
            value={email}
        />

        <label>Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
          minLength="6"
        />

        <label>Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          minLength="6"
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
