import React from 'react'
import styles from './Intro.module.css'
import tiles from '../../assets/images/bharat-tiles.png'

const Intro = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.introSpan}>
        <span>Who we are</span>
        <span>100 years old</span>
      </div>
      <div className={styles.main}>
        <div className={styles.left}>
          <h1>
            Bharat Flooring and Tiles
          </h1>
          <p className={styles.paraBig}>
            For over a century, Bharat Floorings & Tiles has been the epitome of quality in handmade tile manufacturers in India.
          </p>
          <p className={styles.paraSmall}>
            Our dedicated commitment to innovation ensures you're choosing the best handcrafted cement tiles in the market. Heritage buildings and prestigious locations across the country boast Bharat Floorings & Tiles that have maintained their original charm despite decades of heavy use - a testament to our quality, durability and handmade tiles texture.
          </p>
        </div>
        <div className={styles.right}>
          <img src={tiles} alt="" />
          <p>A century year old technique which is still relevant</p>
        </div>
      </div>
    </section>
  )
}

export default Intro