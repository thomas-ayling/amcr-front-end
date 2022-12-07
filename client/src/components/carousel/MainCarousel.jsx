import "../carousel/Carousel.css"
import { useEffect, useState } from "react";




function MainCarousel({images}) {
    const[current, setCurrent] = useState(0);

    const [autoPlay, setAutoPlay] = useState(true);
    let timeOut = null;
    
    useEffect(() =>{ // eslint-disable-next-line 
     timeOut =  autoPlay && setTimeout(() => {
            slideRight();

        }, 5000);
    }
    )

    const slideRight = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    }
    
    
    console.log(current, timeOut);
    return (
    <div className="carousel-background">
    <div className="carousel"  onMouseEnter={() => {setAutoPlay(false);
        clearTimeout(timeOut);  

     
    }} onMouseLeave={() => {setAutoPlay(true)}}> 
    
        <div className="carousel_wrapper">
        {images.map((image, index)=>{
            return( <div key={index} className={index===current ? "carousel_card carousel_card-active" : "carousel_card"} >
                <img className="card_image" src={image.image} alt =""/>
                
                {/* <div className="card_text">{image.overview.substring(0, 200)}</div> */}

                <div className="card_overlay">
                
                   
                    {/* <h3 className="card_text">{image.overview}</h3> */}
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
                return(<div key={index} className={index===current ? "carousel_card_textbox carousel_card-active" : "carousel_card_textbox"}>
                
                <div className="card_text"> 
                <h1>{image.title}</h1>
                <h2 className ="card_title2">{image.overview.substring(0, 100)}</h2>
                <a className="link_text" href={image.target} rel="noreferrer">Find out more </a>
                {/* <a href="" rel="noreferrer">{image.target}FAQ</a> */}
                
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