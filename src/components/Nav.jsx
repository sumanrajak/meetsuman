// Nav.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { IoLogoInstagram } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenu, setisMenu] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth <= 912);

  }, [])
  useEffect(() => {
    if (isMenu) document.getElementById('mobileNav').style.display = 'block';
    else {
      setTimeout(() => {
        document.getElementById('mobileNav').style.display = 'none';

      }, 400);}

  }, [isMenu])

  return (
    <nav>
      <motion.div className='navbar'
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeOut", duration: .9 }}
      >
        <div className='navTitle'>
          <Link className='Link' to="/">Suman</Link>
        </div>
        {isMobile ? <>
        <CiMenuFries onClick={() => setisMenu(!isMenu)}
          style={{ cursor: "pointer", marginRight: "10px", fontSize: "3.5vh" }}/>
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
              <Link className='Link' to="/about" onClick={() => setisMenu(!isMenu)}>About Me</Link>
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
              <a href=''>
                <IoLogoInstagram />
              </a>
              <a href=''>
                <CiLinkedin />
              </a>
              <a href=''>
                <FaGithub />
              </a>
            </div>
          </motion.div>
        </> : <>
        <div className="" id='mobileNav'></div>
          <div className='navTitle'>
            <Link className='Link' to="/about">About Me</Link>
          </div>
          <div className='navTitle'>
            <Link className='Link' to="/experience">Experience</Link>
          </div>
          <div className='navTitle'>
            <Link className='Link' to="/photography">Photography</Link>
          </div>
          <div className='navTitle'>
            <Link className='Link' to="/contact">Contact</Link>
          </div>

          <div className='navTitle social'>
            <a href=''>
              <IoLogoInstagram />
            </a>
            <a href='https://www.linkedin.com/in/suman-rajak-730021196/'>
              <CiLinkedin />
            </a>
            <a href='https://github.com/sumanrajak'>
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
