// import React from 'react'
import { gsap } from 'gsap'
import { useEffect } from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { IoMailOpenOutline } from "react-icons/io5";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {

  const form = useRef();
  const shakeDiv = () => {
    const divToShake = document.getElementById('contact-container2'); // Replace 'yourDivId' with the actual ID of your div

    gsap.fromTo(
      divToShake,
      { x: -10 }, 
      {
        x: 10, 
        duration: 0.05, 
        repeat: 10, 
        yoyo: true, 
        ease: 'power1.inOut',
      }
    );
   

  };
  const sendEmail = (e) => {
    e.preventDefault();

    toast("SENDING..... ", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    emailjs.sendForm('service_vkz12pz', 'template_d6rpee6', form.current, 'SgMc6tlzYhXOIjGsK')
      .then((result) => {
          console.log(result.text);
          shakeDiv()
          toast.success("MESSAGE SENT SUCCESSFULLY!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          form.current.reset();

      }, (error) => {
          console.log(error.text);
          toast.error("MESSAGE NOT SENT ", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          toast.info("PLEASE MAIL ME @sumanrajak2001@gmail.com ", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
      });


  };

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
        duration: 1,

        stagger: 0.05,
        ease: 'power4.out',
      }
    ).fromTo(".contact-container2", {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      delay: .2,
      stagger: 0.05,
      ease: 'power4.out',
    }).fromTo(".delay", {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      delay: .2,
      stagger: 0.05,
      ease: 'power4.out',
    })
  }, [])

  return (
    <div className="background">
      <ToastContainer position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" />

      <div className='cont-header Suman' id='Suman'>
        <svg viewBox="0 0 450 80" className='svgg' style={{ font: " bold 68px Century Gothic, Arial" }}>
          <text y="50">Contact</text>
        </svg>
      </div>

      {/* <div className="bg-svg">
<IoMailOpenOutline />

</div> */}
      {/* <div className="skills">
          <div className="text-scroller">
            <div className="scroller-left" >
              <div className="werdr">
              Let’s talk about a project, collaboration or an idea you may have</div>
            </div>
            
          </div>
        </div> */}
      <div className="contact-container2" id="contact-container2">

        <div className="screen" id='contact'>
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
                <span>LET&apos;S</span>
                <span>CONNECT</span>

              </div>
              <div className="app-contact delay">

              </div>

              <div className="app-contact delay">
                <div className='contact-icons delay'>
                  <a href='https://www.instagram.com/its_sumann?igsh=OWRod3lmNTBxOWFp' target="_blank" className='c-icons'>
                    <IoLogoInstagram />
                  </a>
                  <a href='https://www.linkedin.com/in/suman-rajak-730021196/' target="_blank" className='c-icons'>
                    <CiLinkedin />
                  </a>
                  {/* <a href='' className='c-icons'>
              <FaGithub />
            </a> */}
                  <a href="mailto:sumanrajak2001@gmail.com"  className='c-icons'>

                    <IoMailOpenOutline />
                  </a>

                </div>
                <a href="tel:+917001396147" className='c-icons'> +91 7001 396 147</a>
                <div className="">
                  <a href="mailto:sumanrajak2001@gmail.com" className='c-icons' >

                    sumanrajak2001@gmail.com</a>
                </div>

              </div>
            </div>
            <div className="screen-body-item delay">
              <form ref={form} onSubmit={sendEmail}>

                <div className="app-form">
                  <div className="app-form-group">
                    <input className="app-form-control" placeholder="NAME" name="user_name"  required/>
                  </div>
                  <div className="app-form-group">
                    <input className="app-form-control" placeholder="EMAIL" type="email" name="user_email"  required/>
                  </div>
                  <div className="app-form-group">
                    <input className="app-form-control" placeholder="CONTACT NO" name="user_no" required />
                  </div>
                  <div className="app-form-group message">
                    <input className="app-form-control" placeholder="MESSAGE" name="message" required />
                  </div>
                  <div className="app-form-group buttons delay">
                    <button className="app-form-button" type="submit" value="Send">SEND</button>
                  </div>


                </div></form>
            </div>
          </div>
        </div>


      </div>

    </div>

  )
}

export default Contact