import React from 'react'

const Loader = ({display}) => {
  return (
    display && <div className='loader'></div>
  )
}

export default Loader