import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { doc, setDoc } from 'firebase/firestore'; 
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [displayName, setDisplayName] = useState('');
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    if (displayName.trim() === '') { // Fixed: Used displayName instead of user.displayName
      alert('Please enter a display name.');
      return;
    }

    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        const userId = user.uid;
        setDoc(doc(db, 'users', userId), {
          displayName: user.displayName, // Fixed: Changed user.displayName to displayName
          userId,
        });
        setDoc(doc(db, 'usersChats', userId), {});

        navigate('/chatroom');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='flex items-center justify-center bg-gray-900 min-h-screen min-w-screen'>
      <div className='bg-cyan-500 p-16 rounded-full transition-transform duration-500 animate-scale px-24'>
        <div className='transition-transform duration-500 animate-scale1'>
          <h1 className='text-white select-none text-[75px] font-bold font-mono underline decoration-dashed'>ChatApp</h1>
          <div className='flex flex-col items-center'>
            <input
              type='text'
              placeholder='Enter display name'
              value={displayName} // Fixed: Used displayName instead of user.displayName
              onChange={(e) => setDisplayName(e.target.value)}
              className='rounded-full p-2 border-whitesmoke text-xl border-4 border-solid bg-gray-700 text-white font-mono mb-1'
            />
            <button className='rounded-full p-2 border-whitesmoke text-xl border-4 border-solid bg-gray-700 text-white font-mono' onClick={signInWithGoogle}>
              Sign In with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
