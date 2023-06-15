import React, { useContext, useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import { AuthContext } from '../Context/AuthContext';
import {ChatContext} from '../Context/ChatContext';

const Chatlog = ({ user, handleSelect }) => {
  const [chats, setchats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setchats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect1 = (u)=>
    dispatch({type: "CHANGE_USER", payload:u});


  return (
    <div>
      {user ? (
        <div
          id='userChat'
          className='flex items-center p-2 hover:bg-gray-950 cursor-pointer rounded-lg'
          onClick={() => handleSelect(user)}
        >
          <img
            className='h-[50px] w-[50px] rounded-full'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzC4vcQZWXEYl5FBNhRu75i-zcY3gfT5DAWhSgZVbFQ&s'
            alt='User Avatar'
          />
          <div>
          <span className='text-white font-mono px-2'>{user.displayName}</span>
          </div>
        </div>
      ) : (
        <div className='text-white font-mono px-2'>No users available</div>
      )}
      {Object.entries(chats)?.map(chat=>(
        <div className="mt-4 p-2 bg-transparent rounded-lg flex items-centerflex items-center py-2 hover:bg-gray-950 cursor-pointer" key={chat[0]} onClick={() => handleSelect1(chat[1].userInfo)}>
        <img
          className="h-[50px] w-[50px] rounded-full"
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzC4vcQZWXEYl5FBNhRu75i-zcY3gfT5DAWhSgZVbFQ&s'
          alt='User Avatar'
          />
        <div>
          <span className="text-white font-mono px-2">{chat[1].userInfo.displayName}</span>
        </div>
      </div>
    ))}
    </div>
  );
};

export default Chatlog;
