import React, { Component } from 'react'

export class Topnav extends Component {
  render() {
    return (
        <div className='h-1/20 w-screen top-0 fixed bg-gray-800 font-mono'>
            <div className='w-1/6 h-1/20 text-[35px] text-white select-none underline decoration-dashed align-bottom py-4'>   
                <p>ChatApp</p>
            </div>
            <div className='w-1/6 h-19/20 text-[30px] text-white select-none flexbox underline decoration-dashed'>    
            </div>
        </div>
    )
  }
}

export default Topnav