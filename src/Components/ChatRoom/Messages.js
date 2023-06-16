import React, { useState, useContext, useEffect } from 'react';
import Message from './Message';
import { ChatContext } from '../Context/ChatContext';
import { db } from '../../firebase';
import { doc ,onSnapshot } from 'firebase/firestore';
import { AuthContext } from '../Context/AuthContext';
import { v4 as uuid } from 'uuid';
import { updateDoc } from 'firebase/firestore';
import { arrayUnion } from 'firebase/firestore';
import { Timestamp } from 'firebase/firestore';

const Messages = () => {
  const [text, setText] = useState("");
  
  const [messages, setMessages] = useState([]);
  const {currentUser}= useContext(AuthContext);
  const { data } = useContext(ChatContext);

  useEffect ( ()=>{
    const unSub = onSnapshot (doc (db, "chats", data.chatId), (doc)=>{
    doc.exists () && setMessages (doc.data().messages )
    })

    return()=>{
      unSub();
    }
  },[data.chatId])


  const handleSend = async() =>{

    await updateDoc(doc(db, "chats", data.chatId) , {
      messages: arrayUnion ({
      id: uuid(),
      text,
      senderId: currentUser.uid,
      date: Timestamp.now(),
      })
      })
  }

  return (
    <div id='Messages' className='bg-[#CBC3E3] h-[100%] overflow-scroll relative'>
      {messages.map (m=> (
      <Message message={m} key={m.id}/>
      ))}

        <input
          className='w-[95%] bg-gray-700 font-mono text-white p-2 absolute inset-x-0 bottom-0 h-1/20'
          type='text'
          id='inputted'
          placeholder='Type a message'
          onChange={e=>setText(e.target.value)}
          value={text}
        />
        <button className='w-1/20 absolute bg-gray-800 bottom-0 h-1/20 right-0 text-[45px] text-white hover:bg-gray-950' onClick={handleSend}>
          ⏎
        </button>
    </div>
  );
};

export default Messages;
