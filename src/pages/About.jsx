import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SplitType from 'split-type'
import hero from '../assets/Suman/about.jpg'
import { gsap, CSSPlugin, Expo, } from 'gsap'
import { motion } from 'framer-motion'

const About = () => {
  const texts = [
    "Welcome to my digital space!",
    "I'm a dynamic software developer with a passion for crafting innovative solutions through code.",
    "With expertise in JavaScript, Node.js, and React.js,",
    "I thrive on tackling challenges and ensuring seamless user experiences.",
    "Beyond code, I'm dedicated to continuous learning and contributing to impactful projects.",
    "Let's create something extraordinary together!"
  ];


  useEffect(() => {
    
    document.getElementById('Suman').style.opacity = '1';
    const ourText = new SplitType('.Suman', { types: 'chars' })
    const chars = ourText.chars
    gsap.set(chars, { opacity: 0, y: 100 });
    const tl = gsap.timeline({})
    tl.fromTo(
      chars,
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
    ).fromTo(".aboutlines", {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      delay: .4,
      stagger: 0.05,
      ease: 'power4.out',
    }).fromTo(".button", {
      opacity: 0, x: 100,
    }, {
      opacity: 1,
      x: 0,
      stagger: 0.05,
      ease: 'power4.out',
    })
    document.querySelectorAll(".heroImage").forEach(function(element) {
      var animation = gsap.timeline({ paused: true });
      animation.to(element, {scale: 1.3, duration: .5,x: 90, ease: "power1.inOut"});
      element.addEventListener("mouseenter", function () {animation.play();});
      element.addEventListener("mouseleave", function () {animation.reverse();});
    });

  }, [])

  return (
    <div>
      <div className="container  ">
      
        <div className="homeText center" id="Suman">
          <h1 className='Suman' > Suman Rajak </h1>
          <div className='about' >
          {texts.map((text, index) => (
        <div key={`text${index + 1}`} className='aboutlines' style={{ fontWeight: '800' }}>
          {text}
        </div>
      ))}


            {/* <div className='aboutlines' style={{ fontWeight: '800' }}>
              Welcome to my digital space!
            </div>
            <div className='aboutlines'>I'm a dynamic software developer with a passion for crafting innovative solutions through code.
            </div>
            <div className='aboutlines'>With expertise in JavaScript, Node.js, and React.js,
            </div>
            <div className='aboutlines'> I thrive on tackling challenges and ensuring seamless user experiences.
            </div><div className='aboutlines'> Beyond code, I'm dedicated to continuous learning and contributing to impactful projects.
            </div><div className='aboutlines'> Let's create something extraordinary together!</div> */}
          </div>
          <div className="button">

            <Link to="/experience" className="button but"> My Work</Link>
          </div>
        </div>
        < motion.div className="imageWraper"
          initial={{ y: 1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.2, delay: 0.4 }}>
          {/* <div className="overlay"></div> */}
          <img className="heroImage" src={hero}></img>
        </motion.div>
        
      </div>

    </div>
  )
}

export default About