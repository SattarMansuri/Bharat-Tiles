import React, { useEffect, useState } from 'react'
import styles from './Years.module.css'
import logo from '../../assets/images/100-years.svg'
import IntroSpan from '../small components/IntroSpan'
import Heading from '../small components/Heading'
import Featured from '../featured component/Featured'

const Years = () => {
  return (
    <section className={styles.yearsSection}>
      <div className="lines">
        <div className={`${styles.verticalLine} line`}></div>
        <div className={`${styles.verticalLine} line`}></div>
        <div className={`${styles.verticalLine} line`}></div>
        <div className={`${styles.verticalLine} line`}></div>
      </div>
      <div className={styles.years}>
        <Featured name={'Alenteho by Isprava, Goa. Interior'} design={'FADD Studio Home Villa'} publish={'Featured in Vogue magazine, Feb 2023'} flexDirection={'column-reverse'} />
        <Heading heading={`We blend computer-aided design with craftsmanship and the end result is a tailor-made custom tile which will last for generations.
        Already 100 years and counting...`} />
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <IntroSpan leftText={'4899 projects'} midText={'+3 million tiles placed'} rightText={`100 years, 7 months, 6 days, 12 hours and 13 minutes`} />
      </div>
    </section>
  )
}

export default Years