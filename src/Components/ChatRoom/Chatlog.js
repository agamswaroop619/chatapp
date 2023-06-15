import React, { useContext, useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import { AuthContext } from '../Context/AuthContext';

const Chatlog = ({ user, handleSelect }) => {
  const [chats, setchats] = useState([]);
  const { currentUser } = useContext(AuthContext);

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

  return (
    <div>
      {user ? (
        <div
          id='userChat'
          className='flex items-center py-2 hover:bg-gray-950 cursor-pointer'
          onClick={handleSelect}
        >
          <img
            className='h-[50px] w-[50px] rounded-full'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzC4vcQZWXEYl5FBNhRu75i-zcY3gfT5DAWhSgZVbFQ&s'
            alt='User Avatar'
          />
          <div>
          <span className='text-white font-mono px-2'>{user.displayName}</span>
          <p className="text-gray-300 font-mono text-xs">Hello</p>
          </div>
        </div>
      ) : (
        <div className='text-white font-mono px-2'>No users available</div>
      )}
      
      <div className="userChat mt-4 p-2 bg-gray-900 rounded-lg flex items-center">
        <img
          className="h-[50px] w-[50px] rounded-full"
          src="https://images.pexels.com/photos/8283967/pexels-photo-8283967.jpeg?auto=compress&cs"
          alt=""
        />
        <div>
          <span className="text-white font-mono">Jane</span>
          <p className="text-gray-300 font-mono text-xs">Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chatlog;
