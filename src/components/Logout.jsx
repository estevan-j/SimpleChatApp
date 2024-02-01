import { signOut } from "firebase/auth";
import { auth } from "../Firebase";

const Logout = () => {
  const logOut = () => {

  };

  return (
    <button className="btn-login btn-logout" onClick={logOut}>
        <i className="fa-brands fa-google"></i>
        Logout
    </button>
  );
};

export default Logout;
