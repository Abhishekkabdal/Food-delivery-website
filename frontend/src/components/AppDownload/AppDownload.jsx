import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div>
      <div className="app-download" id="app-download">
        <p>For Better Experience Download <br/>Tomato App</p>
        <div className="app-download-platforms">
            <a href="https://play.google.com/store/games?hl=en&gl=US" target='blank'><img src={assets.play_store} alt="" /></a>
            <a href="https://www.apple.com/in/" target='blank'><img src={assets.app_store} alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default AppDownload
