import React, { useContext } from 'react';
import moment from 'moment';
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

  const isCurrentUserMessage = message.senderId === currentUser.uid;
  const messageContainerClass = isCurrentUserMessage ? 'flex flex-1 flex-row-reverse ' : 'flex flex-1 flex-row ';

  return (
    <div className={messageContainerClass}>
      <div id='messageInfo'>
        <img
          className='h-[50px] w-[50px] rounded-full'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzC4vcQZWXEYl5FBNhRu75i-zcY3gfT5DAWhSgZVbFQ&s'
          alt='alt '
        />
        <p className='text-gray-500 text-xs'>{formattedDate} {formattedTime}</p>
        <p className={`bg-white rounded-full ${isCurrentUserMessage ? 'rounded-tr-none' : 'rounded-tl-none'} px-5`}>
          {message.text}
        </p>
      </div>
    </div>
  );
};

export default Message;
