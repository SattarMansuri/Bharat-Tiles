import React from 'react'
import './small-comp.css'

const IntroSpan = ({ leftText, midText, rightText }) => {
  return (
    <div className='intro-span'>
      <span>{leftText}</span>
      <span>{midText}</span>
      <span>{rightText}</span>
    </div>
  )
}

export default IntroSpan