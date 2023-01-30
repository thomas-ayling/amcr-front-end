const BehaviourCarouselDescription = ({ current, currentUrl, windowWidth, dataArray }) => {
  const element = dataArray[current];

  return (
    <div>
      {windowWidth >= 1100 && (
        <a href={currentUrl}>
          <img className='behaviour-image' src={element.image} alt={element.title} />
        </a>
      )}
      {windowWidth < 1100 && <img className='behaviour-image' src={element.image} alt={element.title} />}

      <div className='behaviour-description'>{element.description}</div>
      <h3 className='behaviour-title'>{element.title}</h3>
    </div>
  );
};

export default BehaviourCarouselDescription;
