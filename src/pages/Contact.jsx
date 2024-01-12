import React from 'react'
import hero from '../assets/Suman/sumanbg.png'
import { gsap, CSSPlugin, Expo, } from 'gsap'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";

const Contact = () => {


  useEffect(() => {
    document.getElementById('Suman').style.opacity = '1';
    document.getElementById('contact').style.opacity = '1';

    const tl = gsap.timeline({})
    tl.fromTo(
      " .Suman",
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        delay: .4,
        stagger: 0.05,
        ease: 'power4.out',
      }
    ).fromTo(".contact-container2", {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      delay: .4,
      stagger: 0.05,
      ease: 'power4.out',
    }).fromTo(".delay", {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      delay: .4,
      stagger: 0.05,
      ease: 'power4.out',
    })
  }, [])
  
  return (
    <div className="background">
  <div className='cont-header Suman' id='Suman'>
          <svg viewBox="0 0 450 80" className='svgg' style={{font:" bold 68px Century Gothic, Arial"}}>
            <text y="50">Contact</text>
          </svg>
        </div>
  <div className="contact-container2">
  
    <div className="screen"  id='contact'>
      <div className="screen-header">
        <div className="screen-header-left">
          <div className="screen-header-button close"></div>
          <div className="screen-header-button maximize"></div>
          <div className="screen-header-button minimize"></div>
        </div>
        <div className="screen-header-right">
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
        </div>
      </div>
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title delay">
            <span>LET'S</span>
            <span>CONNECT</span>
            
          </div>
          <div className="app-contact delay">
         
          </div>

          <div className="app-contact delay">
          <div className='contact-icons delay'>
            <a href='' className='c-icons'>
              <IoLogoInstagram />
            </a>
            <a href='https://www.linkedin.com/in/suman-rajak-730021196/' className='c-icons'>
              <CiLinkedin />
            </a>
            {/* <a href='' className='c-icons'>
              <FaGithub />
            </a> */}
            <a href='' className='c-icons'>

            <IoMailOpenOutline />
            </a>

          </div>
            CONTACT INFO : +91 7001 396 147
            
            </div>
        </div>
        <div className="screen-body-item delay">
          <div className="app-form">
            <div className="app-form-group">
              <input className="app-form-control" placeholder="NAME"  />
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="EMAIL"/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="CONTACT NO"/>
            </div>
            <div className="app-form-group message">
              <input className="app-form-control" placeholder="MESSAGE"/>
            </div>
            <div className="app-form-group buttons delay">
              <button className="app-form-button">SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  </div>

</div>

  )
}

export default Contact