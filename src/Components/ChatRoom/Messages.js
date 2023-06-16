import React, { Component, useState, useContext, useEffect } from 'react';
import Message from './Message';
import { ChatContext } from '../Context/ChatContext';
import { db } from '../../firebase';
import { doc ,onSnapshot } from 'firebase/firestore';

const Messages = () => {
  const [messages, setMessages] = useState([]);

  const { data } = useContext(ChatContext);

  useEffect ( ()=>{
    const unSub = onSnapshot (doc (db, "chats", data.chatId), (doc)=>{
    doc.exists () && setMessages (doc.data().messages )
    })

    return()=>{
      unSub();
    }
  },[data.chatId])

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div id='Messages' className='bg-[#CBC3E3] h-[92.8%] overflow-scroll'>
      {messages.map (m=> (
      <Message message={m}/>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className='w-[95%] bg-gray-700 font-mono text-white p-2 absolute inset-x-0 bottom-0 h-1/20'
          type='text'
          id='inputted'
          placeholder='Type a message'
        />
        <button className='w-1/20 absolute bg-gray-800 bottom-0 h-1/20 right-0 text-[45px] text-white hover:bg-gray-950'>
          ⏎
        </button>
      </form>
    </div>
  );
};

export default Messages;
