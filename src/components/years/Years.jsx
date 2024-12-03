import React from 'react'
import styles from './Years.module.css'
import Featured2 from '../featured component 2/Featured2'
import logo from '../../assets/images/100-years.svg'

const Years = () => {
  return (
    <div className={styles.years}>
      <Featured2 name={'Alenteho by Isprava, Goa. Interior'} design={'FADD Studio Home Villa'} feature={'Vogue magazine, Feb 2023'} />
      <h1>
        We blend computer-aided design with craftsmanship and the end result is a tailor-made custom tile which will last for generations.
        Already 100 years and counting...
      </h1>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.last}>
        <span>4899 projects</span>
        <span>+3 million tiles placed</span>
        <span>100 years, 7 months, 6days, 12 hours and 13 minutes</span>
      </div>
    </div>
  )
}

export default Years