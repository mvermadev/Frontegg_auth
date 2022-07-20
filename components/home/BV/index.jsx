import Image from 'next/image'
import React from 'react'
import Search from '../../search'

export default function index() {
  return (
    <div className="Home-BV">
        <div>
          <Search/>
        </div>
        <div className="banner">
          <Image src={"/Images/banner.svg"} width={1300} height={1000}/>
        </div>
        
    </div>
  )
}
