import React from 'react'
import './Midpage.css'
const Midpage = () => {
  return (
    <div className='Head'>
        <div className="head-right">
       <video className='vid' width="900" height="700"  autoPlay  loop  muted src="https://videos.pexels.com/video-files/7727173/7727173-hd_1920_1080_25fps.mp4"></video>
        
        </div>
        <div className="head-left">
            <h2 className='head-1'>Like You,<span>We Love Music</span> </h2>
            <p>And we believe a Headphone is more than just an instrument for sound. <br /> It’s the key to a mind-blowing moment of emotion,<br /> bringing you closer to your favourite artist, <br /> and yourself.</p>

        </div>
      
    </div>
  )
}

export default Midpage
