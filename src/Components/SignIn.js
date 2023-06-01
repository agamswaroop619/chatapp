import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import './animation.css';

export default function SignIn() {
    let popupcounter=1;

  const signInWithGoogle = () => {
    if (popupcounter === 1) {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
      popupcounter = popupcounter+1;
    }

  };


  return (
    <div className='flex items-center justify-center bg-gray-900 min-h-screen min-w-screen'>
      <div className='bg-cyan-500 p-16 rounded-full transition-transform duration-500 animate-scale'>
        <div className='transition-transform duration-500 animate-scale1'>
        <h1 className='text-white select-none text-[75px] font-bold font-mono underline decoration-dashed'>ChatApp</h1>
        <button className='rounded-full p-2 border-whitesmoke text-xl border-4 border-solid bg-gray-700 text-white font-mono' onClick={signInWithGoogle}>Sign In with Google</button>
      </div>
      </div>
    </div>
  );
}
