import { useState } from "react";
import { auth, db } from "../Firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import EmojiPicker from "emoji-picker-react";

const SendMessage = () => {
  const [input, setInput] = useState();
  const [open, setOpen] = useState("close");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "Messages"), {
      text: input,
      name: displayName,
      uid,
      photo: photoURL,
      timestamp: serverTimestamp(),
    });
    setInput("");
  };

  const ActiveEmoji = () => {
    setOpen('open');
  }
  const closeEmoji = () => {
    setOpen('close');
  }

  const onEmojiClick = (event, emojiObject) => {
    setInput(`${input}${emojiObject}`);
  }

  return (
    <form onSubmit={sendMessage}>
      <button
        type="button"
        className="btn-emoji"
        onClick={ActiveEmoji}
      >
        <i className="fa-solid fa-face-smile-beam"></i>
      </button>
      <div className={open}>
        <button
          type="button"
          className="close-emoji"
          onClick={closeEmoji}>
        </button>
        <i className="fa-regular fa-circle-xmark"></i>
        <EmojiPicker onEmojiClick={onEmojiClick} />
      </div>
      <input
        type="text"
        placeholder="Enter your message here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SendMessage;
