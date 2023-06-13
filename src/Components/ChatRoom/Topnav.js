import React from 'react';

const Topnav = ({ user }) => {
  return (
    <div className='h-1/20 w-screen top-0 fixed bg-gray-800 font-mono'>
      <div className='w-1/6 h-1/20 text-[35px] text-white select-none underline decoration-dashed align-bottom py-4 left-0 fixed top-0'>
        <p>ChatApp</p>
      </div>
      <div className='w-5/6 h-1/20 text-[30px] text-white select-none align-bottom py-4 right-0 top-0 fixed flex px-2 bg-gray-700'>
        {user ? <p>{user.displayName}</p> : <p>Search to go into chat</p>}
      </div>
    </div>
  );
}

export default Topnav;
