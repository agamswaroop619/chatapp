import React, { Component } from 'react'
import Message from './Message';
export class Messages extends Component {
  render() {
    return (
      <div id='Messages' className='bg-[#CBC3E3] h-[100%] overflow-scroll'>
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
        <input className='w-[85%] bg-gray-700 font-mono text-white p-2 absolute inset-x-0 bottom-0 h-1/20' type='text' placeholder='Type a message'></input>
        <input className='w-[10%] bg-gray-700 font-mono p-3 absolute right-[5%] bottom-0 h-1/20 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold  file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100' type='file' accept="image/png, image/jpg, image/gif, image/jpeg"></input>
        <button className='w-1/20 absolute bg-gray-800 bottom-0 h-1/20 right-0 text-[45px] text-white hover:bg-gray-950' >⏎</button>
      </div>
    )
  }
}

export default Messages