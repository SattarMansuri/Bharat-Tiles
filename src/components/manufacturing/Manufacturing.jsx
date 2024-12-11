import React from 'react'
import styles from './Manufacturing.module.css'
import IntroSpan from '../small components/IntroSpan'
import { MANUFACTURING } from '../utils'
import sofa from '../../assets/images/footer-img.png'
import arrow from '../../assets/images/arrow.svg'
import Heading from '../small components/Heading'
import ParaSmall from '../small components/ParaSmall'
import ManufacturingCard1 from '../manufacturing cards/ManufacturingCard1'
import ManufacturingCard2 from '../manufacturing cards/ManufacturingCard2'

const Manufacturing = () => {
  return (
    <section className={styles.main}>
      <div className={styles.upper}>
        <IntroSpan leftText={'6 steps'} midText={'4 hours'} rightText={'Handmade'} />
        <Heading heading={'Manufacturing process'} />
        <div className={styles.info}>
          <div>
            <ParaSmall para={'Output is a beautiful tile that lasts forever'} />
            <ParaSmall para={`Over the decades Bharat has laid some of the best-known floors in India’s landmark buildings: from palaces of Maharajas and Raj Bhavans to prominent residences, hotels, hospitals, clubs, offices, factories, co-operative housing societies, educational and religious institutions, airports, railways etc.`} />
          </div>
          <div>
            <ParaSmall para={'Each step has to be done well'} />
            <ParaSmall para={`The best European technologies were brought and modified to create a unique product suited to Indian conditions. Recognising that a good floor is only achieved with a good product that is installed correctly and maintained properly, the company has sister companies which do high quality installation of all types of floorings, a range of civil work, floor maintenance and general cleaning.`} />
          </div>
        </div>
      </div>
      <div className={styles.scrolls}>
        <div className={styles.mid}>
          {
            MANUFACTURING.map(({ id, name, para, image }) => (
              <ManufacturingCard1 className={`${styles}.card${id}`} key={id} sr={id} name={name} para={para} image={image} />
            ))
          }
        </div>
        <div className={styles.mid2}>
          {
            MANUFACTURING.map(({ id, name, para, image }) => (
              <ManufacturingCard2 className={`${styles}.card${id}`} key={id} sr={id} name={name} para={para} image={image} />
            ))
          }
        </div>
        <div className={styles.lower}>
          <img src={sofa} alt="" />
          <div className={styles.btn}>
            <h2>
              BFT Home  <img src={arrow} className={styles.arrow} />
            </h2>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Manufacturing