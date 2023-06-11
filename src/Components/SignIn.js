import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import './animation.css';

export default function SignIn() {
  const [displayName, setDisplayName] = useState('');

  const signInWithGoogle = () => {
    if (displayName.trim() === '') {
      alert('Please enter a display name.');
      return;
    }

    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  return (
    <div className='flex items-center justify-center bg-gray-900 min-h-screen min-w-screen'>
      <div className='bg-cyan-500 p-16 rounded-full transition-transform duration-500 animate-scale px-24'>
        <div className='transition-transform duration-500 animate-scale1'>
          <h1 className='text-white select-none text-[75px] font-bold font-mono underline decoration-dashed'>ChatApp</h1>
          <div className="flex flex-col items-center">
            <input
              type='text'
              placeholder='Enter display name'
              value={displayName}
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
