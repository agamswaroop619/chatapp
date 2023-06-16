import React, { useContext } from 'react';
import moment from 'moment'; // Import Moment.js library
import { AuthContext } from '../Context/AuthContext';

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);

  let messageDate;
  if (moment(message.date, 'YYYY-MM-DD HH:mm:ss', true).isValid()) {
    messageDate = moment(message.date, 'YYYY-MM-DD HH:mm:ss');
  } else {
    messageDate = moment();
  }
  const formattedDate = messageDate.format('YYYY-MM-DD');
  const formattedTime = messageDate.format('HH:mm');

  return (
    <div className={`flex ${message.senderId === currentUser ? 'flex-col gap-[20px]' : 'flex-col '}`}>
      <div id='messageInfo'>
        <img
          className='h-[50px] w-[50px] rounded-full'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzC4vcQZWXEYl5FBNhRu75i-zcY3gfT5DAWhSgZVbFQ&s'
          alt='Aarat'
        />
        <p className='text-gray-500 text-xs fixed left-50'>{formattedDate} {formattedTime}</p>
      </div>
      <div id='messageContent' className='max-w-[80%] flex flex-col gap-[10px]'>
        <p className={`bg-white rounded-full ${message.senderId === currentUser ? 'rounded-tl-none' : 'rounded-tr-none'} px-5`}>
          {message.text}
        </p>
      </div>
    </div>
  );
};

export default Message;
