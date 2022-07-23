import Image from 'next/future/image'
import React from 'react'
import Search from '../../search'

export default function index() {
  return (
    <div className="Home-BV">
        <div>
          <Search/>
        </div>
        <div className="banner">
          <Image 
            src={"/Images/banner.svg"} 
            width={700} 
            height={600}
          />
        </div>
        
    </div>
  )
}
