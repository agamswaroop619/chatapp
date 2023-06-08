import React, { Component } from 'react';
import Sidenav from './Sidnav';
import Topnav from './Topnav';

class ChatRoom extends Component {
  render() {
    return (
      <div>
          <div>
            <Topnav></Topnav>
            <section className='h-19/20 right-0 w-5/6 bottom-0 fixed'>
            ChatRoom
            </section>
            <Sidenav />
          </div>
      </div>
    );
  }
}

export default ChatRoom;
