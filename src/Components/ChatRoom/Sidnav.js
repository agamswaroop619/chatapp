import React, { Component } from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export class Sidnav extends Component {
  render() {
    return (
        <div className='w-1/6 h-screen left-0 fixed bg-gray-800'>
            <chat></chat>
          {firebase.auth().currentUser && (
            <div>
              <button onClick={() => firebase.auth().signOut()} className='absolute inset-x-0 bottom-0 rounded-full p-2 border-whitesmoke text-xl border-4 border-solid bg-gray-800 text-white font-mono text-[47px] rotate-180 px-5'>
                <p className='rotate-180 text-[20px] py-1 hover:text-[22px]  hover:transition-all duration-500'>Sign Out.</p>
                </button>
            </div>
          )}
        </div>
      );
  }
}
export default Sidnav