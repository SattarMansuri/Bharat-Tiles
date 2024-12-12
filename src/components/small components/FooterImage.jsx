import React from 'react'
import Heading from './Heading'
import arrow from '../../assets/images/arrow.svg'

const FooterImage = () => {
  return (
    <div className='footer-image'>
      <div>
        <Heading heading={'BFT Home'} /> <img id='footer-img' src={arrow} alt="arrow image" />
      </div>
    </div>
  )
}

export default FooterImage