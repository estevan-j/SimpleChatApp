import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../Firebase";

const Login = () => {
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();//Instanciar the provider  Google-Authentication
    signInWithRedirect(auth, provider);//Inicia la authentication with google(redirect)
  };

  return (
    <button className="btn-login" onClick={googleLogin}>
      <i className="fa-brands fa-google"></i>
      Sign in with Google
    </button>
  );
};

export default Login;
