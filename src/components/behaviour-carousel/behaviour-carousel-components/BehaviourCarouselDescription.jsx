import React from 'react';

const BehaviourCarouselDescription = ({ current, currentUrl, windowWidth, dataArray }) => {
  const behaviourCarouselDescription = dataArray.map((element, index) => {
    /* Index here is used to generate key as the array here is static */
    return (
      <>
        <>
          <div className={index === current ? 'behaviour-image-slide behaviour-image-active' : 'behaviour-image-slide'} key={index}>
            {index === current && (
              <a href={windowWidth < 1100 ? null : currentUrl}>
                <img className='behaviour-image' src={element.image} />
              </a>
            )}
          </div>
          <div className={index === current ? 'behaviour-description-slide behaviour-description-active' : 'behaviour-description-slide'} key={index}>
            {index === current && <div className='behaviour-description'>{element.description}</div>}
          </div>
        </>
        <div className={index === current ? 'behaviour-title-slide behaviour-title-active' : 'behaviour-title-slide'} key={index}>
          {index === current && <h3 className='behaviour-title'>{element.title}</h3>}
        </div>
      </>
    );
  });
  return behaviourCarouselDescription;
};

export default BehaviourCarouselDescription;
