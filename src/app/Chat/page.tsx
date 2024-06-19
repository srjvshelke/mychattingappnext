import React from 'react'

function page() {
  return (
    <div className='Container w-screen h-screen p-5'>
      <div className="chat_cotainer flex container mx-auto">
        <div className='chat_left bg-red-500 flex-1'>
          left
        </div>
        <div className='chat_right bg-lime-500 flex-1'>
          right
        </div>

      </div>
    </div>
  )
}

export default page
