import React from 'react'
import BVContent from '../BV'
// import MVContent from '../MV'
import {BrowserView, MobileView} from 'react-device-detect'
import Footer from '../../footer'

export default function Index() {
  return (
    <div>
      <BrowserView>
        <div>
            <BVContent/>
        </div>
        <div>
            <Footer/>
        </div>
      </BrowserView>

      <MobileView>
      
      </MobileView>
    </div>
  )
}
