import gsap from 'gsap';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import image1 from '../assets/photos/1.jpeg';
import image2 from '../assets/photos/2.jpeg';
import image3 from '../assets/photos/3.jpeg';
import image4 from '../assets/photos/4.jpeg';
import image5 from '../assets/photos/5.jpeg';
import image6 from '../assets/photos/6.jpeg';
import image7 from '../assets/photos/7.jpeg';
import image8 from '../assets/photos/8.jpeg';
import image9 from '../assets/photos/9.jpeg';
import image10 from '../assets/photos/10.jpeg';
import image11 from '../assets/photos/11.jpeg';
import image12 from '../assets/photos/12.jpeg';

const Portfolio = () => {
  const [images, setImages] = useState([]);
  AOS.init();

  useEffect(() => {
    const importImages = async () => {
      try {
        const loadedImages = [
          { src: image1, alt: 'Image 1' },
          { src: image2, alt: 'Image 2' },
          { src: image3, alt: 'Image 3' },
          { src: image4, alt: 'Image 4' },
          { src: image5, alt: 'Image 5' },
          { src: image6, alt: 'Image 6' },
          { src: image7, alt: 'Image 7' },
          { src: image8, alt: 'Image 8' },
          { src: image9, alt: 'Image 9' },
          { src: image10, alt: 'Image 10' },
          { src: image11, alt: 'Image 11' },
          { src: image12, alt: 'Image 12' },
        ];
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
      });
    }
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
    <div className="" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <div className='phy-header suman' id='Suman'>
        <svg viewBox='0 0 450 80' className='svgg'>
          <text y='50'>Photography</text>
        </svg>
      </div>
      <div className="button" >
        <a href="https://www.instagram.com/its_sumann?igsh=OWRod3lmNTBxOWFp" target="_blank" className="button but"> View more work </a>
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
