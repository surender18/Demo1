import React from 'react'
import './Header.css'
import Carousel from 'react-bootstrap/Carousel';

const Header=()=> {
  return (
    <div className='head-carousel'>
       <Carousel className='carousel'>
      <Carousel.Item className='carousel-item'>


       <img className='item-3'  src=' https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-HiFiMAN-Edition-XS-homepage-banner-1_4882ebed-3682-4755-9345-8583aef016c5.jpg?v=1714743143&width=1400
' alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
        <img src="https://www.headphonezone.in/cdn/shop/files/UA4-Website.jpg?v=1714743305&width=1600" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
        <img src="https://www.headphonezone.in/cdn/shop/files/Kefine-Delci-Website.jpg?v=1714742914&width=2000" alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Header
