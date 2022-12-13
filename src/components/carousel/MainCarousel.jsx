import "../carousel/MainCarousel.css"
import { useEffect, useState } from "react";






function MainCarousel({images}) {
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
    
    
    console.log(current, timeOut); //for testing purposes
    
    return (
        <div className="carousel-background">
            <div className="carousel"  onMouseEnter={() => {setAutoPlay(false); //checks 
            clearTimeout(timeOut);  

     
            }} onMouseLeave={() => {setAutoPlay(true)}}> 
    
            <div className="carousel_wrapper">
             {images.map((image, index)=>{
                return( <div key={index} className={index===current ? "carousel_card carousel_card-active" : "carousel_card"} >
                <img className="card_image"src={image.image} alt =""/>
                <div className="card_overlay">
                    </div>
                         <div className="carousel_pagination">
                             {images.map((_,index)=>{
                                return(
                                <div key={index}
                                    className={index === current ? "pagination_dot pagination_dot-active" : "pagination_dot"
                                    }
                                    
                                onClick={() => setCurrent(index) && clearTimeout(timeOut)}
                              
                                ></div>
                                
                                )
                        })}
                        </div>
                   
                    </div>
  

            )})}


            </div>
                <div className="carousel_wrapper_second">
                    {images.map((image, index)=>{
                    return(<div key={index} className={index===current ? "carousel_card_textbox2 carousel_card_textbox-active" : "carousel_card_textbox2"}>
                
                    <div className="card_text"> 
                    <h1>{image.title}</h1>
                    <h2 className ="card_title2">{image.overview.substring(0, 300)}</h2>
                    <h2>+44 (0)161 407 0069</h2>
                    <a className="link_text" href={image.target} rel="noreferrer">View Map </a>
              
                
                </div>
            </div>) 


            }
            
            )
            
            }
        </div>
        </div>

        
    </div>
  )
  
}

export default MainCarousel