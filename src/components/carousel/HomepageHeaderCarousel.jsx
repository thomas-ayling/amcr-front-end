import "../carousel/HomepageHeaderCarousel.css"
import { useEffect, useState } from "react";

function HomepageHeaderCarousel({images}) {
    const[current, setCurrent] = useState(0);

    const [autoPlay, setAutoPlay] = useState(true);
    let timeOut = null;
    
    useEffect(() =>{ // eslint-disable-next-line 
     timeOut =  autoPlay && setTimeout(() => {
            slideRight();

            }, 5000);
        } //timer function- disables error as timer doesn't need to be stored
    )

    const slideRight = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    } // slide right and current checks what image it is on - it will go back to one if it reaches the end
    
    
    // console.log(current, timeOut); //for testing purposes
    
    return (
        <div className="hph-carousel-background">
          <div className="hph-carousel"  onMouseEnter={() => {setAutoPlay(false); //checks 
            clearTimeout(timeOut);  

     
            }} onMouseLeave={() => {setAutoPlay(true)}}> 
    
            <div className="hph-carousel_wrapper">
             {images.map((image, index)=>{
                return( <div key={index} className={index===current ? "hph-carousel_card hph-carousel_card-active" : "hph-carousel_card"} >
                <div className="homepage-header-carouselTitle"><p>GlobalLogic UK&I</p></div>
                <img className="hph-card_image"src={image.image} alt =""/>
                <div className="hph-card_overlay">
                    </div>
                         <div className="hph-carousel_pagination">
                             {images.map((_,index)=>{
                                return(
                                <div key={index}
                                    className={index === current ? "hph-pagination_dot hph-pagination_dot-active" : "hph-pagination_dot"
                                    }
                                    
                                onClick={() => setCurrent(index) && clearTimeout(timeOut)}
                              
                                ></div>
                                
                                )
                        })}
                        </div>
                   
                    </div>
  

            )})}


            </div>
                
        </div>

        
    </div>
  )
  
}

export default HomepageHeaderCarousel