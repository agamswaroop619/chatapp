import React, { Component } from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export class Sidnav extends Component {
  render() {
    return (
        <div className='w-1/6 h-19/20 left-0 fixed bg-gray-800 bottom-0'>
            <chat></chat>
          {firebase.auth().currentUser && (
            <div>
              <button onClick={() => firebase.auth().signOut()} className='absolute inset-x-0 bottom-0 rounded-full p-2 border-whitesmoke text-xl border-4 border-solid bg-gray-800 text-white font-mono text-[20px] px-5 '>
                Sign Out.
                </button>
            </div>
          )}
        </div>
      );
  }
}
export default Sidnav