import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <h2>Download APP</h2>
        <div className='row1'>

        </div>
        <div className="app-download-plateform">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />

        </div>
      
    </div>
  )
}

export default AppDownload
