import { useEffect, useState } from 'react'
import { gsap, Expo, } from 'gsap'
import SplitType from 'split-type'

const Loading = ({ changeLoading }) => {

    const [counter, setcounter] = useState(0)
    useEffect(() => {
        const reveal = () => {
            const tl = gsap.timeline({
                onComplete: () => {
                    console.log("completed");
                    changeLoading(false)
                }
            })
            tl.to(".follow", {
                width: "100%",
                duration: 1.2,
                delay: 0.7,
                ease: Expo.easeInOut,
            }).to(".hide", {
                opacity: 0,
                duration: 0.3,
            }).to(".hide", {
                display: "none",
                duration: 0.3
            }).to(".follow", {
                height: "100%",
                duration: 0.4,
                delay: 0.1,
                ease: Expo.easeInOut,
            }).to(".back", {
                height: "100%",
                width: "100%",
                duration: 0.4,
                delay: 0.3,
                ease: Expo.easeInOut,
    
            })
    
    
        }
        const myInterval = setInterval(() => {
            // const tl=gsap.timeline()
            // tl.to(".loadingtext", {scrambleText:{text:"Loading.", chars:"lowerCase", speed:0.3, newClass:"orange", revealDelay:0.5, tweenLength:false}})
            const ourText = new SplitType('.loadingtext', { types: 'chars' })
            const chars = ourText.chars
            gsap.fromTo(
                chars,
                {
                    y: 100,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.05,
                    ease: 'power4.out',
                }
            )
            // gsap.to(
            //     chars,
            //     0.1,
            //     {
            //       x: "-30",
            //       ease: "power2.inOut",
            //       yoyo: true,
            //       stagger: 0.07,
            //       repeat: -1
            //     }
            //   );
            setcounter((prevCounter) => {
                if (prevCounter < 100) {
                    return prevCounter + 1;
                } else {
                    clearInterval(myInterval);
                    setcounter(100);
                    reveal();
                }
            });
        }, 25);

    }, [changeLoading])

    


    return (
        <div className='loading'>
            <div className="follow"></div>
            <div className="progressBar hide" style={{ width: counter + "%" }}></div>
            <div className='count hide'>{counter}%</div>
            <div className="loadingtext"> LOADING...</div>
            <div className="back"></div>

        </div>
    )
}

export default Loading