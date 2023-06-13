import React from 'react';

const Chatlog = ({ user, handleSelect }) => {

  return (
    <div>
      {user ? (
        <div id='userChat' className='flex items-center py-2 hover:bg-gray-950 cursor-pointer' onClick={handleSelect}>
          <img className='h-[50px] w-[50px] rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzC4vcQZWXEYl5FBNhRu75i-zcY3gfT5DAWhSgZVbFQ&s' alt='User Avatar' />
          <span className='text-white font-mono px-2'>{user.displayName}</span>
        </div>
      ) : (
        <div className='text-white font-mono px-2'>No users available</div>
      )}
    </div>
  );
}

export default Chatlog;
