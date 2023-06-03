import React, { Component } from 'react';
import Sidenav from './Sidnav';


class ChatRoom extends Component {
  render() {
    return (
      <div>
          <div>
            <section className='h-screen right-0 w-5/6 fixed'>
            ChatRoom
            </section>
            <Sidenav />
          </div>
      </div>
    );
  }
}

export default ChatRoom;
