import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    
      <div className="footer id" id='footer'>
        <div className="footer-content">
          <div className="footer-content-left">
            
            <h2 >Let us Help</h2>
            <ul>
              <li>Help Center </li>
              <li>Contact us</li>
              <li>Track My Order</li>
              <li>Return My Order</li>
              <li>Request a Product</li>
              <li>Report a Bug</li>
              <li>Book an Audio Tour</li>
              
            </ul>
            <div className="social-icons">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
            </div>
          </div>
          <div className="footer-cent1">
            <h2 >Our Policies</h2>
            <ul>
              <li>Shipping & Delivery</li>
              <li>Returns, Refunds & Cancellations</li> 
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-cent2">
            <h2 >Community</h2>
            <ul>
              <li>The Indian Audiophile Forum</li>
              <li>Blog</li>
              <li>Artists</li>
              <li>Headphone Zone Merchandise</li>
              <li>Trade-Up Program</li>
            </ul>
          </div>
          <div className="footer-right">
            <h2 >About</h2>
            Dhun Mart is India's #1 audiophile store and the purveyors of the world's finest headphones since 2011. Music is at the core of what we do; and it's our aim to help you rediscover your music and help you enjoy the riffs, basslines and solos that were always there, but never heard.
          </div>
          
        </div>
        <p className='copy'>© 2024, Dhun Mart. Owned, Operated & Funded by Proud Indians
Everything on this website has been made with a lot of love and hard work. <br /> If you copy anything we will hunt you down. We mean it.</p>
      </div>
    
  )
}

export default Footer
