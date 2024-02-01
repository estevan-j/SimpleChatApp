import { auth } from "../Firebase";
import Login from "./Login"
import Logout from "./Logout"
import { useAuthState } from "react-firebase-hooks/auth";
import UserImg from '../assets/user.png'

const User = () => {
  const [user] = useAuthState(auth);//object user authenticated or null.
  const image = user ? user.photoURL : UserImg;
  const name = user ? user.displayName : "Name user";
  return (
    <div className="right-side">
      <h1><i className="fa-solid fa-people-roof"></i>QuickChat</h1>
      <article className="card-user">
        <img src={image} alt="userphoto" referrerPolicy="no-referrer" />
        <p>{name}</p>
        {
          user?  <Logout /> : <Login />
        }
      </article>      
    </div>
  )
}

export default User
