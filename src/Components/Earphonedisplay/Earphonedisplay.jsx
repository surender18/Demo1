import React ,{useContext}from 'react'
import './Earphonedisplay.css'
import { ear_list } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import Earphone from '../Earphone/Earphone'
const Earphonedisplay = () => {
    const {ear_list} = useContext(StoreContext)

  return (
    <div className='Earphone-disp' id='Earphone-disp'>
        <h2>Explore Deals on Wired Earphones</h2>
        <div className="earphone-display-list">
            {ear_list.map((item,index)=>{
                return <Earphone key={index} id={item.item_id} name={item.item_name} description={item.item_desc} price={item.item_price} image={item.image} />
            })}
        </div>
    </div>
  )
}

export default Earphonedisplay
