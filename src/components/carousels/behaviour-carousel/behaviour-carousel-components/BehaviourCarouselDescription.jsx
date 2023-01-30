const BehaviourCarouselDescription = ({ current, currentUrl, windowWidth, dataArray }) => {
  const element = dataArray[current];

  return (
    <div>
      <a href={windowWidth >= 1100 ? currentUrl : undefined}>
        <img className='behaviour-image' src={element.image} alt={element.title} />
      </a>
      <div className='behaviour-description'>{element.description}</div>
      <h3 className='behaviour-title'>{element.title}</h3>
    </div>
  );
};

export default BehaviourCarouselDescription;
