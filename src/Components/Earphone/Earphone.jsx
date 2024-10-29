// import React from 'react'
// import './Earphone.css'
// const Earphone = () => {
//   return (
//    <div className='earphone-section'>
//     <div className="earphone-content">
//         <h2 className='earphone-head'>Explore Deals on Wired Earphones</h2>
//         <div className='card-section'>
//         <div className="card-1">
//             <img src="https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-KZ-ZVX-Gallary-05.jpg?v=1684824647&width=800" alt="" />
//             <img src="            https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-KZ-ZVX-Gallary-02.jpg?v=1684824647&width=800
// " id='img2' alt="" />
//             <div className="card-1details">
//             <p>Earphone 1</p>
//             <p>Specifications</p>
//             <p>15$</p>
//             </div>
//         </div>
//         <div className="card-1">
//             <img src="https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-Kiwi-Ears-Dolce-04.jpg?v=1694696459&width=800" alt="" />
//             <img src="           https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-Kiwi-Ears-Dolce-01.jpg?v=1694696440&width=800
// " id='img2' />
//             <div className="card-1details">
//             <p>Earphone 1</p>
//             <p>Specifications</p>
//             <p>price</p>
//             </div>
//         </div>


//         <div className="card-1">
//             <img src=" https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-CCA-Polaris-01.jpg?v=1699427077&width=800" alt="" />
//             <img src="         https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-CCA-POLARIS-1160-1160.jpg?v=1699095100&width=800
          
// " id='img2' alt="" />
//             <div className="card-1details">
//             <p>Earphone 1</p>
//             <p>Specifications</p>
//             <p>price</p>
//             </div>
//         </div>
//         <div className="card-1">
//             <img src="https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-ORIVETI-OH700VB-001.jpg?v=1703334895&width=800" alt="" />
//             <img src="          https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-ORIVETI-OH700VB-003.jpg?v=1703334895&width=800
// " id='img2' alt="" />
//             <div className="card-1details">
//             <p>Earphone 1</p>
//             <p>Specifications</p>
//             <p>price</p>
//             </div>
//         </div>
//         <div className="card-1">
//             <img src="https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-Kiwi-Ears-Melody-01.jpg?v=1699094525&width=800" alt="" />
//             <img src="           https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-Kiwi-Ears-Melody-03.jpg?v=1699094547&width=800
// " id='img2' alt="" />
//             <div className="card-1details">
//             <p>Earphone 1</p>
//             <p>Specifications</p>
//             <p>price</p>
//             </div>
//         </div>
//         <div className="card-1">
//             <img src="https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-FiiO-FH3-04.jpg?v=1624598778&width=800" alt="" />
//             <img src="            https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-FiiO-FH3-01.jpg?v=1624598778&width=800
// " id='img2' alt="" />
//             <div className="card-1details">
//             <p>Earphone 1</p>
//             <p>Specifications</p>
//             <p>price</p>
//             </div>
//         </div>
//         <div className="card-1">
//             <img src="https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-ORIVETI-OD200-06.jpg?v=1698320080&width=800" alt="" />
//             <img src="            https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-ORIVETI-OD200-05.jpg?v=1698320080&width=800
// " id='img2' alt="" />
//             <div className="card-1details">
//             <p>Earphone 1</p>
//             <p>Specifications</p>
//             <p>price</p>
//             </div>
//         </div>
//         <div className="card-1">
//             <img src="https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-LETSHUOER-S15-02.jpg?v=1702013442&width=800" alt="" />
//             <img src="           https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-LETSHUOER-S15-01.jpg?v=1702013441&width=800
// " id='img2' alt="" />
//             <div className="card-1details">
//             <p>Earphone 1</p>
//             <p>Specifications</p>
//             <p>price</p>
//             </div>
//         </div>
//         </div>
//     </div>

//    </div>
      
    
//   )
// }

// export default Earphone

import React, { useContext } from 'react'
import './Earphone.css'
import context from 'react-bootstrap/esm/AccordionContext'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
const Earphone = ({id,name,image,price,description}) => {

  const {cartItems,addToCart,removeFromCart}= useContext(StoreContext);
  return (
    <div className='earphone-item'>
        <div className="earphone-img-container">
            <img className="earphone-img" src={image}  />
            {!cartItems[id]
            ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt='' />
                :<div className='item-counter'>
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
            
        </div>
        }
        </div>
        <div className="earphone-info">
            <p>{name}</p>
        </div>
        <p className="earphone-desc">{description}</p>
        <p className="earphone-price">${price}</p>
      
    </div>
   
  )
}

export default Earphone
