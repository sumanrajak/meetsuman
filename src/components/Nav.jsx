// Nav.js

import  { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { IoLogoInstagram } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import svgg from "/s.svg";
import { gsap } from 'gsap'

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenu, setisMenu] = useState(false)
  const location = useLocation();
  // const [curloc, setcurloc] = useState('/')

  useEffect(() => {
    setIsMobile(window.innerWidth <= 912);
  

  }, [location])


  useEffect(() => {
    if (isMenu) document.getElementById('mobileNav').style.display = 'block';
    else {
      setTimeout(() => {
        document.getElementById('mobileNav').style.display = 'none';

      }, 400);
    }
    const tl = gsap.timeline({})
    tl.fromTo(
      " .sumanlogo",
      {
        x: 100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        delay: 1,
        stagger: 0.05,
        ease: 'power4.out',
      }
    )

  }, [isMenu])

  return (
    <nav>
      {/* <div className="cursor"></div> */}
      <motion.div className='navbar'
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeOut", duration: .9 }}
      >
        <div className='navTitle ' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img src={svgg} style={{ height: "4vh", width: "auto" }}></img>
          <Link className='Link sumanlogo' to="/">Suman</Link>
        </div>
        {isMobile ? <>
          <CiMenuFries onClick={() => setisMenu(!isMenu)}
            style={{ cursor: "pointer", marginRight: "10px", fontSize: "3.5vh" }} />
          <motion.div className="mobileNav"
            id='mobileNav'
            initial={{ width: "0%" }}
            animate={{ width: isMenu ? "100%" : "0%" }}
            transition={{ ease: "easeOut", duration: .4 }}
          >
            <div className='cross'>
              <RxCross2 onClick={() => setisMenu(!isMenu)}
                style={{ cursor: "pointer", marginRight: "10px" }} />

            </div>
            <div className={` ${isMenu ? 'show-text' : ''} mobileNavTitle`}  >
              <Link className='Link' to="/about" onClick={() => setisMenu(!isMenu)} >About Me</Link>
            </div>
            <div className={`mobileNavTitle ${isMenu ? 'show-text' : ''}`}>
              <Link className='Link' to="/experience" onClick={() => setisMenu(!isMenu)}>Experience</Link>
            </div>
            <div className={`mobileNavTitle ${isMenu ? 'show-text' : ''}`}>
              <Link className='Link' to="/photography" onClick={() => setisMenu(!isMenu)}>Photography</Link>
            </div>
            <div className={`mobileNavTitle ${isMenu ? 'show-text' : ''}`}>
              <Link className='Link' to="/contact" onClick={() => setisMenu(!isMenu)}>Contact</Link>
            </div>
            <div className={`mobileNavTitle ${isMenu ? 'show-text' : ''} social`}>
              <a href='https://www.instagram.com/its_sumann?igsh=OWRod3lmNTBxOWFp' target="_blank" >
                <IoLogoInstagram />
              </a>
              <a href='https://www.linkedin.com/in/suman-rajak-730021196/' target="_blank" >
                <CiLinkedin />
              </a>
              <a href='https://github.com/sumanrajak' target="_blank" >
                <FaGithub />
              </a>
            </div>
          </motion.div>
        </> : <>
          <div className="" id='mobileNav'></div>
          <div className='navTitle'>
            <Link className='Link' to="/about" style={{ textDecoration: location.pathname == "/about" ? "line-through" : "none" }}>About Me
            
            </Link>
          </div>
          <div className='navTitle'>
            <Link className='Link' to="/experience" style={{ textDecoration: location.pathname == "/experience" ? "line-through" : "none" }}>Experience</Link>
          </div>
          <div className='navTitle'>
            <Link className='Link' to="/photography" style={{ textDecoration: location.pathname == "/photography" ? "line-through" : "none" }}>Photography</Link>
          </div>
          <div className='navTitle'>
            <Link className='Link' to="/contact" style={{ textDecoration: location.pathname == "/contact" ? "line-through" : "none" }}>Contact</Link>
          </div>

          <div className='navTitle social'>
            <a href='https://www.instagram.com/its_sumann?igsh=OWRod3lmNTBxOWFp' target="_blank" >
              <IoLogoInstagram />
            </a>
            <a href='https://www.linkedin.com/in/suman-rajak-730021196/' target="_blank" >
              <CiLinkedin />
            </a>
            <a href='https://github.com/sumanrajak' target="_blank" >
              <FaGithub />
            </a>
          </div>
        </>

        }

      </motion.div>
    </nav>
  );
};

export default Nav;
