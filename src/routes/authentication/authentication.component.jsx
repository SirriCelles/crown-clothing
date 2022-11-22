
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const Authentication = () => {

    return (
        <div>
            <h1>Sign In Page</h1>    
            {/* <button onClick={ logGoogleUser }>Sign in with Google popup</button>
            <button onClick={ signInWithGoogleRedirect }>Sign in with Google Redirect</button> */}
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication;