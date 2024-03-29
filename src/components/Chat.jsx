import {db} from '../Firebase';
import {query, collection, orderBy, onSnapshot} from 'firebase/firestore';
import SendMessage from "./SendMessage";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../Firebase';
import { useEffect, useRef, useState } from 'react';
import Message from '../components/Message'

const Chat = () => {
    const [message, setMessage] = useState([]);
    const scroll = useRef();
    const [user] = useAuthState(auth);
    
    useEffect(() => {
        const q = query(collection(db, 'Messages'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = []
            querySnapshot.forEach(doc => {
                messages.push({...doc.data(), id: doc.id})
            });
            setMessage(messages);
        })
        return () => unsubscribe();
    }, [])

    return ( 
        <>
            <section className="chat-content">
                {
                
                    message && message.map(item => (
                        <Message
                            key={item.id}
                            message={item}
                        />
                    ))
                }
            { user && <SendMessage scroll={scroll}/> }
            
            <span ref={scroll}></span>
            </section>
        </>
     );
}
 
export default Chat;