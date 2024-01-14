import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SplitType from 'split-type'
import hero from '../assets/Suman/about.jpg'
import { gsap } from 'gsap'
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
      " .header",
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        delay: .2,
        stagger: 0.05,
        duration: 1,
        ease: 'power4.out',
      }
    ).fromTo(
      chars,
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        delay: 0,
        stagger: 0.05,
        ease: 'power4.out',
      }
    ).fromTo(".aboutlines", {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      delay: 0,
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
    document.querySelectorAll(".heroImage").forEach(function (element) {
      var animation = gsap.timeline({ paused: true });
      animation.to(element, { scale: 1.3, duration: .5, x: 90, ease: "power1.inOut" })


      element.addEventListener("mouseenter", function () { animation.play(); });
      element.addEventListener("mouseleave", function () { animation.reverse(); });
    });

  }, [])

  return (
    <div>
      <div className="container  ">
        <div className='cont-header header ' id='header' style={{ left: "0", }}>
          <svg viewBox="0 0 450 80" className='svgg' style={{ font: " bold 68px Century Gothic, Arial" }}>
            <text y="50">About</text>
          </svg>
        </div>
        <div className="homeText center " id="Suman">
          <h1 className='Suman currr'  > Suman Rajak </h1>
          <div className='about' >
            {texts.map((text, index) => (
              <div key={`text${index + 1}`} className='aboutlines currr' style={{ fontWeight: '800' }}>
                {text}
              </div>
            ))}


          </div>
          <div className="" style={{ display: "flex", gap: "2vw" }}>
            <div className="button">

              <Link to="/experience" className="button but"> My Work</Link>
            </div>
            <div className="button">

              <a href="https://drive.google.com/drive/folders/1cc1LlZa2h78jhowvJ7j4piJsNz5Elb3h?usp=sharing" className="button but" target="_blank"> Resume</a>
            </div>
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