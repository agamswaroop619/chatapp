import React, { Component } from 'react'

export class Chatlog extends Component {
  render() {
    return (
      <div>
        <div id='userChat' className='flex items-center py-2 hover:bg-gray-950'>
          <img className='h-[50px] w-[50px] rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzC4vcQZWXEYl5FBNhRu75i-zcY3gfT5DAWhSgZVbFQ&s'></img>
          <span className='text-white font-mono px-2 '>Aarat</span>
        </div>
        <div id='userChat' className='flex items-center py-2 hover:bg-gray-950'>
          <img className='h-[50px] w-[50px] rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzC4vcQZWXEYl5FBNhRu75i-zcY3gfT5DAWhSgZVbFQ&s'></img>
          <span className='text-white font-mono px-2 '>Atam</span>
        </div>
        <div id='userChat' className='flex items-center py-2 hover:bg-gray-950'>
          <img className='h-[50px] w-[50px] rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzC4vcQZWXEYl5FBNhRu75i-zcY3gfT5DAWhSgZVbFQ&s'></img>
          <span className='text-white font-mono px-2 '>Nihal</span>
        </div>
      </div>
    )
  }
}

export default Chatlog