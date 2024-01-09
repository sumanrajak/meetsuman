import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SplitType from 'split-type'
import hero from '../assets/Suman/hero.jpg'
import { gsap, CSSPlugin, Expo, } from 'gsap'
import { motion } from 'framer-motion'

const Home = () => {
 

  const init = () => {
    const titles = gsap.utils.toArray('.identity')
    const tl = gsap.timeline({})
    titles.forEach((title) => {
      const splitTitle = new SplitType(title)
      tl.from(splitTitle.chars, {
        opacity: 0,
        y: 80,
        rotateX: -90,
        stagger:.02
      },
        "<").to(splitTitle.chars, {
          opacity: 0,
          y: -80,
          rotateX: 90,
          stagger:.02

        },
          "<1").repeat(-1)

    })
  }

  useEffect(() => {
    document.getElementById('Suman').style.opacity = '1';
    init()

    // document.getElementById('Suman').innerHTML = "Hi meet Suman";
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
    ).fromTo(".button", {
      opacity: 0, x: 100,
    }, {
      opacity: 1,
      x: 0,
      delay: .4,
      stagger: 0.05,
      duration: 1,
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
      <div className="container">
        <div className="homeText" id="Suman">
          <h1 className='Suman' >Hi meet Suman </h1>
          {/* <p>photographer</p> */}
          <div className="identities">
            <div className="identity">FRONT-END DEVELOPER</div>
            <div className="identity">BACK-END DEVELOPER</div>
            <div className="identity">INNOVATOR</div>
            <div className="identity">PHOTOGHRAPHER</div>
            <div className="identity">PROBLEM SOLVER</div>
          </div>
          <div className="button">
            <Link to="/about" className="button but">About Me</Link>
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

export default Home