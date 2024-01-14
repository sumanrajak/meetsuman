import { Route, Routes, } from 'react-router-dom';
import Navbar from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import './App.css'
import Portfolio from './pages/Portfolio';
import Loading from './pages/Loading';
import { useState } from 'react';
import AnimatedCursor from "react-animated-cursor"
// import Footer from './components/Footer';

function App() {
  const [isLoaded, setisLoaded] = useState(true)
  const changeLoading = (isloading) => {
    setisLoaded(isloading)
  }
  return (
    <div>
      {isLoaded ? <Loading changeLoading={changeLoading} ></Loading> :
        <>
        {
          window.innerWidth <= 912?<></>:
          <AnimatedCursor
            color="0,0,0"
            innerSize={10}
            outerSize={12}
            innerScale={1}
            outerScale={7}
            outerAlpha={.1}
            showSystemCursor={true}
            // innerStyle={{
            //   mixBlendMode: 'difference'
            // }}
              outerStyle={{
                mixBlendMode: 'multiply'               
                 // backgroundBlendMode: 'luminosity'
            // backgroundColor: "white"
              }}
            clickables={[
              'a',
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              'label[for]',
              'select',
              'textarea',
              'button',
              '.link',
              {
                target: '.currr',
                options: {
                  innerSize: 10,
                  outerSize: 30,
                  color: 'f,f,f',
                  outerAlpha: 0.3,
                  innerScale: 0.7,
                  outerScale: 5
                }
              }
            ]}
          />
        }
        
          <Navbar />
          {/* <AnimatedCursor
      innerSize={10}
      outerSize={30}
      color='0,0,0'
      outerAlpha={0.2}
      innerScale={0.2}
      hasBlendMode={true}

      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        {
          target: '.custom',
          options: {
            innerSize: 12,
            outerSize: 12,
            color: 'f,f,f',
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 5
          }
        }
      ]}
      outerStyle={{
        mixBlendMode: 'exclusion'
      }}
    />     */}
          

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/photography" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          {/* <Footer></Footer> */}
        </>}


    </div>
  )
}

export default App
