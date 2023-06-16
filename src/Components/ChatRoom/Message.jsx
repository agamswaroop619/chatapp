import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { ChatContext } from '../Context/ChatContext';

const Message = ({message}) => {
  console.log({message})

  const {currentUser}= useContext(AuthContext);
  const {data}= useContext(ChatContext);
  return (

    <div className='flex flwx-col gap-[20px]'>
      <div id='messageInfo'>
        <img
          className='h-[50px] w-[50px] rounded-full'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzC4vcQZWXEYl5FBNhRu75i-zcY3gfT5DAWhSgZVbFQ&s'
          alt='Aarat'
        />
        <span className='text-gray-500 text-xs'>Just now</span>
      </div>
      <div id='messageContent' className='max-w-[80%] flex flex-col gap-[10px]'>
        <p className='bg-white rounded-full rounded-tl-none px-5'>Hello</p>
      </div>
    </div>
  );
};

export default Message;
