import React from 'react'
import Header from '../../Components/Header/Header'
import Headphone from '../../Components/Headphone/Headphone'
import Earphone from '../../Components/Earphone/Earphone'
import Speaker from '../../Components/Speakers/Speaker'
import Midpage from '../../Components/Midpage/Midpage'
import Appdownload from '../../Components/Appdownload/Appdownload'
import Earphonedisplay  from '../../Components/Earphonedisplay/Earphonedisplay';
const Home = () => {
  return (
    <div>
     <Header/>
     <Earphonedisplay />
     {/* <Headphone />
     <Earphone />
     <Speaker /> */}
     <Midpage />
     <Appdownload />

     

    </div>
  )
}

export default Home
