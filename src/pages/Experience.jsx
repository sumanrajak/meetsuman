import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { gsap, CSSPlugin, Expo, } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from "react-icons/fa";
import Scroll from '../components/Scroll';
import { MdArrowUpward } from "react-icons/md";
import { Link } from 'react-router-dom';


gsap.registerPlugin(ScrollTrigger)
const Experience = () => {
  const wraper = useRef()
  const container = useRef()
  AOS.init();
  function scrolltop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // document.body.scrollTop = 0; // For Safari
    // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  useEffect(() => {
    document.getElementById('Suman').style.opacity = '1';

    gsap.set(" .Suman ", { opacity: 0, y: 100 });
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
    )

    let ctx = gsap.context(() => {

      const sections = gsap.utils.toArray("section");
      const mask = document.querySelector(".mask");
      let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          scrub: 1,
          end: "+=5000",
          snap: 1 / (sections.length - 1),
          // markers: true

        }
      });
      gsap.to(mask, {
        width: "100%",
        scrollTrigger: {
          trigger: wraper.current,
          start: "top left",
          scrub: 1
        }
      });
      sections.forEach((section) => {
        let text = section.querySelectorAll(".anim");
        if (text.length === 0) return
        gsap.from(text, {
          y: -130,
          opacity: 0,
          duration: 2,
          ease: "elastic",
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: "left center",
            // markers: true
          }
        });
      });
    }, wraper)

    return () => ctx.revert();
  }, [])

  return (
    <div>
      <div className="exp-wrapper" ref={wraper}>
        <div className='exp-header Suman' id='Suman'>
          <svg viewBox="0 0 450 80" className='svgg'>
            <text y="50">Experience</text>
          </svg>
        </div>
        <div className='proj-header' data-aos="fade-left" data-aos-duration="3000"> <svg viewBox="0 0 450 80" className='svgg'>
          <text y="50">Projects</text>
        </svg></div>

        <div className="exp-container scrollx" ref={container}>
          <svg className="timeline" viewBox="0 0 900 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z" fill="#D9D9D9" />
            <mask id="mask0_0_1" style={{ maskTtype: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="900" height="10">
              <path d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_0_1)">
              <rect className="mask" y="-49" height="99" fill="black" />
            </g>
          </svg>
          <section className="sec1 pin Suman" id='Suman' style={{ opacity: 0 }}>
            <span className="exp-time" >Software Engineer</span>
            <h1 className="exp-company" >Softway</h1>
            <div className="col uman" >
              <p className='exp-text'>Developed robust application architecture for web-based enterprise software. Contributed significantly to three diverse projects, showcasing adaptability.</p>
              <p className='exp-text'>Tech Stack: React.js, Electron.js, JavaScript, Node.js, AWS.</p>
              <p className='exp-text'>June 2021 - Present, Bangalore</p>
            </div>
          </section>
          <section className="sec2 pin">
            <span className="anim exp-time">FULL-STACK DEVELOPER INTERN</span>
            <h1 className="anim">Infoware India Pvt Ltd</h1>

            <div className="col anim">
              <p className='exp-text'>
                developed React and node full-stack applications with the team, efficiently deploying code to production and releasing stable releases on the schedule.                </p>
              {/* <p className='exp-text'>Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent arcu leo lectus pellentesque. Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis risus amet urna. Urna egestas lorem.</p> */}
              <p className='exp-text'>March 2021 - May 2021, Ahmadabad</p>
            </div>
          </section>
          <section className="sec3 pin">
            <span className="anim exp-time">REACT DEVELOPER INTERN</span>
            <h1 className="anim">CREESYNC SOFTWARE TECHNOLOGIES</h1>

            <div className="col anim">
              <p className='exp-text'>
                Developed reusable components in React, implemented automated unit tests using React-testing-library, and utilized components throughout the application.              </p>
              <p className='exp-text '>November 2020 - March 2021, Noida</p>
            </div></section>
        </div>


      </div>
      <div className="projects ">
        <div className="scroll-up" onClick={scrolltop} data-aos="fade-left" data-aos-duration="3000">
          <MdArrowUpward />
        </div>
        <div className="personal-proj">
          <div className="project" data-aos="fade-up" data-aos-duration="3000">
            <div className="p-head">Kemakon</div>
            <div className="p-body">
              <div className="p-line">A full stack  ecomerce website </div>
              <div className="p-line">react,mongo db, node.js,express.js</div>
            </div>
            <div className="p-link"><FaGithub /> <FaExternalLinkAlt />
            </div>
          </div>
          <div className="project" data-aos="fade-down" data-aos-duration="3000">
            <div className="p-head">Boom Meet</div>
            <div className="p-body">
              <div className="p-line">A full stack  video conference app </div>
              <div className="p-line">node.js,express.js,ejs,socket.io</div>
            </div>
            <div className="p-link"><FaGithub /> <FaExternalLinkAlt />
            </div>
          </div><div className="project" data-aos="fade-up" data-aos-duration="3000">
            <div className="p-head">Hola</div>
            <div className="p-body">
              <div className="p-line">A full stack MERN project for chat </div>
              <div className="p-line">react,mongo db, node.js,express.js</div>
            </div>
            <div className="p-link"><FaGithub /> <FaExternalLinkAlt />
            </div>
          </div>
        </div>
        <div className="button-w" data-aos="fade-up" data-aos-duration="3000">
          <Link to="/contact" className="button-w but">Lets Connect!</Link>
        </div>
        <div className="skills">
          <div className="text-scroller">
            <div className="scroller-left">
              <div className="werdr"> #React.js #MongoDB #Electron.js #ReactNative #HTML #Node.js #CSS #HTTPS #Web #coding #MYSQL #AWS #Graphql</div>
            </div>
            <div className="scroller-right">
              <div className="werd">#S3 #EC2 #AppSync #GSAP #DynamoDB #javascript #Python #Express.js #Photography #Figma #Design #Agile  #MERN #DBMS</div>
            </div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Experience