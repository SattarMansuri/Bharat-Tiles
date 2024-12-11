import React from 'react'
import styles from './Intro.module.css'
import tiles from '../../assets/images/bharat-tiles.png'
import IntroSpan from '../small components/IntroSpan'
import Heading from '../small components/Heading'
import ParaBig from '../small components/ParaBig'
import ParaSmall from '../small components/ParaSmall'

const Intro = () => {
  return (
    <section className={styles.intro}>
      <IntroSpan leftText={'Who we are'} rightText={'100 years old'} />
      <div className={styles.main}>
        <div className={styles.left}>
          <Heading heading={'Bharat Flooring and Tiles'} />
          <div className={styles.paraBig}>
            <ParaBig para={'For over a century, Bharat Floorings & Tiles has been the epitome of quality in handmade tile manufacturers in India.'} />
          </div>
          <div className={styles.paraSmall}>
            <ParaSmall para={`Our dedicated commitment to innovation ensures you're choosing the best handcrafted cement tiles in the market. Heritage buildings and prestigious locations across the country boast Bharat Floorings & Tiles that have maintained their original charm despite decades of heavy use - a testament to our quality, durability and handmade tiles texture.`} />
          </div>
        </div>
        <div className={styles.right}>
          <img src={tiles} alt="" />
          <ParaSmall para={'A century year old technique which is still relevant'} />
        </div>
      </div>
    </section>
  )
}

export default Intro