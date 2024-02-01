import { auth } from "../Firebase";
import { formatDate } from "../helpers";

const Message = ({message}) => {
  let newStyle = 'message';
  if (auth.currentUser){
    const user = auth.currentUser;
    const newUser = message.uid;
    newStyle = user === newUser ? 'my-message' : 'message';
  }
  return (
    <article className="my-message">
      <div>
        <div className="text-message">
          <p className="text"> {message.text} </p>
        </div>
        <p className="time">{formatDate(message.timestamp)}</p>
      </div>
      <img src={message.photo} alt="user photo" referrerPolicy="no-referrer" />
    </article>
  )
}

export default Message
