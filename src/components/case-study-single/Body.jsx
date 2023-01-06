import React from 'react';

const Body = ({ data }) => {
  const bodyRows = data.map((item, index) => {
    return (
      <div className={`cssp-body-row cssp-${index % 2 === 0 ? 'regular' : 'reversed'}-row`} key={index}>
        <img className='cssp-body-img' src={item.imageLink} />
        <p className='cssp-body-text'>{item.markdownText}</p>
      </div>
    );
  });

  return (
    <>
      <div className='cssp-body-wrapper'>
        <div className='cssp-body'>
          {bodyRows}
          {/* <img src={data[0].imageLink} /> */}
        </div>
      </div>
    </>
  );
};

export default Body;
