import Image from 'next/image'
import React from 'react'

export default function index() {

  const imageStyle = {
    padding: '0px',
    borderRadius: '7px'
  }

  return (
    <div className='Footer-BV'>
      <div className='d-flex justify-content-around align-items-center Content'>
        <div className='d-flex flex-column justify-content-between align-items-start'>
          <p className='title'>Categories</p>
          <p>Dashboard</p>
          <p>Ask Queries</p>
          <p>All Queries</p>
          <p>Edit Query</p>
          <p>Quick Assistance</p>
          <p>Feedback</p>
        </div>
        <div>
          <Image 
            src="/Images/banner-medium.png" 
            width={400} 
            height={155} 
            alt="logo"
            style={imageStyle}
          />
        </div>
      </div>
    </div>
  )
}
