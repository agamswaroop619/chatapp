import React, { Component } from 'react'
import Chatlog from './Chatlog';
export class Chat extends Component {
  render() {
    return (
      <div className='py-4  '>
      <input className='w-full bg-transparent shadow-[inset_0px_-3px_0px_0px_rgb(255,255,255,0.3)] font-mono text-white' type='text' placeholder='Find Your Chat!' ></input>
      <Chatlog />
      </div>
    )
  }
}

export default Chat