import React, { useContext, useState } from 'react';
import Chatlog from './Chatlog';
import Topnav from './Topnav';
import { db } from '../../firebase';
import { collection, query, where, getDocs, doc, setDoc } from 'firebase/firestore'; // Import doc and setDoc
import { AuthContext } from '../Context/AuthContext';

const Chat = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

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

  const handleSelect = async () => {
    const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
    try {
      const docRef = doc(db, "chats", combinedId); // Create a document reference
      const docSnapshot = await getDocs(docRef); // Get the document snapshot
      
      if (!docSnapshot.exists()) {
        await setDoc(docRef, { messages: [] }); // Use docRef to set the document data
      }
    } catch (err) {
      console.error("Error handling user selection:", err);
    }
  };

  const handleKey = (e) => {
    if (e.code === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <Topnav user={user} />
      <div className='py-4'>
        <input
          className='w-full bg-transparent shadow-[inset_0px_-3px_0px_0px_rgb(255,255,255,0.3)] font-mono text-white'
          type='text'
          placeholder='Find Your Chat!'
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKey}
        />
        {err && <p>Error searching for user</p>}
        <Chatlog user={user} handleSelect={handleSelect} />
      </div>
    </div>
  );
};

export default Chat;
