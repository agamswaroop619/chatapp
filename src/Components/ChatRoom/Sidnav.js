import React, { useContext } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Chat from './Chat';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
const Sidnav = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    firebase.auth().signOut();
    navigate('/signin');
  };

  return (
    <div className="w-1/6 h-19/20 left-0 fixed bg-gray-800 bottom-0">
      <Chat />
      {firebase.auth().currentUser && (
        <div>
          <button
            onClick={handleSignOut}
            className="absolute inset-x-0 bottom-0 rounded-full p-2 border-whitesmoke text-xl border-4 border-solid bg-gray-800 text-white font-mono text-[17px] px-5"
          >
            Sign Out from {currentUser.displayName}
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidnav;
