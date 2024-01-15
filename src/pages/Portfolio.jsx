import gsap from 'gsap';
import { useEffect, useState } from 'react';
import AOS from 'aos';

const Portfolio = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  AOS.init();

  useEffect(() => {
    const importImages = async () => {
      try {
        const imageImports = [
          import('../assets/photos/1.jpeg'),
          import('../assets/photos/2.jpeg'),
          import('../assets/photos/3.jpeg'),
          import('../assets/photos/4.jpeg'),
          import('../assets/photos/5.jpeg'),
          import('../assets/photos/6.jpeg'),
          import('../assets/photos/7.jpeg'),
          import('../assets/photos/8.jpeg'),
          import('../assets/photos/9.jpeg'),
          import('../assets/photos/10.jpeg'),
          import('../assets/photos/11.jpeg'),
          import('../assets/photos/12.jpeg'),
        ];
  
        const loadedImages = await Promise.all(imageImports.map((imagePromise) => imagePromise.then((module) => ({
          src: module.default,
          // alt: `Image ${loadedImages.length + 1}`,
        }))));
  
        setImages(loadedImages);
        setLoading(false);
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
      {loading ? (
        <div className='phy-header suman' id='Suman'>
          <svg viewBox='0 0 450 80' className='svgg'>
            <text y='50'>LOADING</text>
          </svg>
        </div>
      ) : (
        <div className='photo-gallery photo-container'>
          {columns?.map((column, columnIndex) => (
            <div key={columnIndex} className='column'  >
              {column.map((image, index) => (
                <div key={index} className='photo' data-aos="fade-up" data-aos-duration="2000">
                  <img loading='lazy' src={image.src} alt={image.alt} className='photos' />
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Portfolio;