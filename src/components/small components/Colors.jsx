import React, { useState } from 'react'
import './small-comp.css'

const Colors = ({ color, bgCol, name }) => {
  const [showName, setShowName] = useState(false)
  return (
    <div onMouseEnter={() => setShowName(true)} onMouseLeave={() => setShowName(false)} style={{ color: color, backgroundColor: bgCol }} className='colors'>
      <span className='color-text'>{showName ? name : null}</span>
    </div>
  )
}

export default Colors