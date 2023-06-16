import React, { useContext, useState } from 'react';
import { db } from '../../firebase';
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  setDoc,
  serverTimestamp,
  updateDoc
} from 'firebase/firestore';
import { AuthContext } from '../Context/AuthContext';
import Topnav from './Topnav';
import Chatlog from './Chatlog';
import { ChatContext } from '../Context/ChatContext';

const Chat = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const { dispatch } = useContext(ChatContext);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(collection(db, 'users'), where('displayName', '==', username));

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      console.error('Error searching for user:', error);
      setErr(true);
    }
  };

  const handleSelect = async (u) => {
    if (!user) {
      return;
    }

    const combinedId =
      currentUser.uid > user.userId ? currentUser.uid + user.userId : user.userId + currentUser.uid;

    try {
      const docRef = doc(db, 'chats', combinedId);
      const docSnapshot = await getDoc(docRef);

      if (!docSnapshot.exists()) {
        await setDoc(docRef, { messages: [] });
      }

      const userChatRef = doc(db, 'userChats', currentUser.uid);
      const otherUserChatRef = doc(db, 'userChats', user.userId);

      const userChatSnapshot = await getDoc(userChatRef);
      const otherUserChatSnapshot = await getDoc(otherUserChatRef);

      const userChatData = {
        userInfo: {
          uid: user.userId,
          displayName: user.displayName
        },
        date: serverTimestamp()
      };

      const otherUserChatData = {
        userInfo: {
          uid: currentUser.uid,
          displayName: currentUser.displayName
        },
        date: serverTimestamp()
      };

      if (!userChatSnapshot.exists()) {
        await setDoc(userChatRef, { [combinedId]: userChatData });
      } else {
        await updateDoc(userChatRef, { [combinedId]: userChatData });
      }

      if (!otherUserChatSnapshot.exists()) {
        await setDoc(otherUserChatRef, { [combinedId]: otherUserChatData });
      } else {
        await updateDoc(otherUserChatRef, { [combinedId]: otherUserChatData });
      }
      dispatch({ type: 'CHANGE_USER', payload: u });
    } catch (error) {
      console.error('Error handling user selection:', error);
    }
  };

  const handleKey = (e) => {
    if (e.code === 'Enter') {
      handleSearch();
    }
  };

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const clearInput = () => {
    setUsername('');
  };

  return (
    <div>
      <Topnav user={user} />
      <div className='py-4'>
        <input
          className='w-full bg-transparent shadow-[inset_0px_-3px_0px_0px_rgb(255,255,255,0.3)] font-mono text-white'
          type='text'
          placeholder='Find Your Chat!'
          value={username}
          onChange={handleInputChange}
          onKeyDown={handleKey}
        />
        {err && <p>Error searching for user</p>}
        <button onClick={clearInput} className='font-mono text-gray-400'>Clear</button>
        <Chatlog user={user} handleSelect={handleSelect} />
      </div>
    </div>
  );
};

export default Chat;
