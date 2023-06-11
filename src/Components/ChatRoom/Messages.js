import React, { Component } from 'react';
import Message from './Message';

export class Messages extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    
  };

  render() {
    return (
      <div id='Messages' className='bg-[#CBC3E3] h-[92.8%] overflow-scroll'>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <form onSubmit={this.handleSubmit}>
          <input className='w-[95%] bg-gray-700 font-mono text-white p-2 absolute inset-x-0 bottom-0 h-1/20' type='text' id='inputted' placeholder='Type a message'></input>
          <button className='w-1/20 absolute bg-gray-800 bottom-0 h-1/20 right-0 text-[45px] text-white hover:bg-gray-950' >⏎</button>
        </form>
      </div>
    )
  }
}

export default Messages;
