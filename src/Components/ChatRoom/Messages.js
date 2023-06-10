import React, { Component } from 'react'
import Message from './Message';
export class Messages extends Component {
  render() {
    return (
      <div id='Messages' className='bg-[#CBC3E3] h-screen'>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <input className='w-19/20 bg-gray-700 shadow-[inset_0px_-3px_0px_0px_rgb(255,255,255,0.3)] font-mono text-white p-2 absolute inset-x-0 bottom-0 h-1/20' type='text' placeholder='Type a message'></input>
        <button className='w-1/20 absolute bg-gray-800 bottom-0 h-1/20 right-0 text-[50px] text-white hover:bg-gray-950' >⏎</button>
      </div>
    )
  }
}

export default Messages