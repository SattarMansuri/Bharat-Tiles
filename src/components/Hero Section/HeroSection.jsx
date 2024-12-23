import React, { useState } from 'react'
import styles from './HeroSection.module.css'
import Featured from '../Featured Component/Featured'
import Header from '../Header Section/HeaderSection'

const HeroSection = () => {
  return (
    <section className={styles.home}>
      <Header />
      <div className={styles.change}>
        <h3>100 years of</h3>
        <h1>
          <span>INNOVATION</span>
          <span>CRAFTMANSHIP</span>
          <span>EXCELLENCE</span>
        </h1>
      </div>
      <div className={styles.lower}>
        <Featured name={'LUXOTEL, Art Gallery Goa'} design={'Designed by Xyz, Firduas Designer'} publish={'Featured in Vogue magazine, Feb 2023'} alignItems={'last baseline'} color={'#fff'} />
      </div>
    </section>
  )
}

export default HeroSection