import React, { useEffect, useState } from 'react'
import styles from './IntroSection2.module.css'
import logo from '../../assets/images/100-years.svg'
import IntroSpan from '../Small Components/IntroSpan'
import Heading from '../Small Components/Heading'
import Featured from '../Featured Component/Featured'

const IntroSection2 = ({ heading }) => {
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
        <Heading heading={heading} />
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <IntroSpan leftText={'4899 projects'} midText={'+3 million tiles placed'} rightText={`100 years, 7 months, 6 days, 12 hours and 13 minutes`} />
      </div>
    </section>
  )
}

export default IntroSection2