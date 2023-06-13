import React, { useState } from 'react';
import Chatlog from './Chatlog';
import { db } from '../../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const Chat = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("displayName", "==", username));

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      console.error("Error searching for user:", error);
      setErr(true);
    }
  };

  const handleKey = (e) => {
    if (e.code === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className='py-4'>
      <input
        className='w-full bg-transparent shadow-[inset_0px_-3px_0px_0px_rgb(255,255,255,0.3)] font-mono text-white'
        type='text'
        placeholder='Find Your Chat!'
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={handleKey}
      ></input>
      <Chatlog user={user} />
    </div>
  );
}

export default Chat;
