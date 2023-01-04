import React from "react";

const ImageLink = ( {current, currentUrl, dataArray}) => {
    const imageSlider = dataArray.map((e, i) => {
        <div className={i === current ? 'cs-header-carousel_card cs-header-carousel_card-active' : 'cs-header-carousel_card'} key={i}>
            {i === current &&(
                <a href={currentUrl} >
                <img className='cs-header-carousel_image' src={e.image} alt=''/>
                </a>
            )}
        </div>

    });

return imageSlider;
};

export default ImageLink;