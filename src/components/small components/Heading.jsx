import React from 'react'
import './small-comp.css'

const Heading = ({ heading }) => {
  return (
    <h2 className='heading-comp'>
      {heading}
    </h2>
  )
}

export default Heading