import React from 'react'
import BVContent from '../BV'
// import MVContent from '../MV'
import {BrowserView, MobileView} from 'react-device-detect'


export default function Index() {
  return (
    <div>
      <BrowserView>
        <div>
            <BVContent/>
        </div>
      </BrowserView>

      <MobileView>
      
      </MobileView>
    </div>
  )
}
