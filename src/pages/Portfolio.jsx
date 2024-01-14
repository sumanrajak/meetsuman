import gsap from 'gsap';
import  { useEffect, useState } from 'react';
import AOS from 'aos';

const Portfolio = () => {
  const [images, setImages] = useState([]);
  AOS.init();

  useEffect(() => {
    const importImages = async () => {
      try {
        const importPromises = Array.from({ length: 12 }, (_, index) =>
          import(`../assets/photos/${index + 1}.jpeg`).then((module) => ({
            src: module.default,
            alt: `Image ${index + 1}`,
          }))
        );
        const loadedImages = await Promise.all(importPromises);
        setImages(loadedImages);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    importImages();

  }, []);

  useEffect(() => {
    if (images.length > 0) {
      const tl = gsap.timeline({});
      tl.fromTo(
        '.suman',
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          delay: 0.4,
          stagger: 0.05,
          ease: 'power4.out',
        }
      ).fromTo(".button", {
        opacity: 0, x: 100,
      }, {
        opacity: 1,
        x: 0,
        stagger: 0.05,
        ease: 'power4.out',
      })
    }
    // document.querySelectorAll(".photos").forEach(function(element) {
    //   var animation = gsap.timeline({ paused: true });
    //   animation.to(element, {scale: 1.3, duration: .5,x: 0, ease: "power1.inOut"});
    //   element.addEventListener("mouseenter", function () {animation.play();});
    //   element.addEventListener("mouseleave", function () {animation.reverse();});
    // });
  }, [images]);

  const chunkedImages = (arr, size) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArray.push(arr.slice(i, i + size));
    }
    return chunkedArray;
  };

  const columns = chunkedImages(images, 4);

  return (
    <div className="" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <div className='phy-header suman' id='Suman'>
        <svg viewBox='0 0 450 80' className='svgg'>
          <text y='50'>Photography</text>
        </svg>
      </div>
      <div className="button" >
          <a to="https://www.instagram.com/its_sumann?igsh=OWRod3lmNTBxOWFp"  target="_blank" className="button but"> View more work </a>
        </div>
      {images.length > 0 ? <div className='photo-gallery photo-container'>
        {columns?.map((column, columnIndex) => (
          <div key={columnIndex} className='column' data-aos="fade-up" data-aos-duration="2000" >
            {column.map((image, index) => (
              <div key={index} className='photo' data-aos="fade-up" data-aos-duration="2000">
                <img loading='lazy' src={image.src} alt={image.alt} className='photos' />
              </div>
            ))}
          </div>
        ))}
       
      </div> : <div className='phy-header suman' id='Suman'>
        <svg viewBox='0 0 450 80' className='svgg'>
          <text y='50'>LOADING</text>
        </svg>
      </div>}
   
    </div>
  );
};

export default Portfolio;
