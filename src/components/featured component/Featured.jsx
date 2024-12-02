import React from 'react'
import styles from './Featured.module.css'
import gallery1 from '../../assets/images/gallery1.svg'
import gallery2 from '../../assets/images/gallery2.svg'
import gallery3 from '../../assets/images/gallery3.svg'
import { FaArrowRight } from "react-icons/fa6";

const Featured = () => {
  return (
    <div className={styles.featured}>
      <div className={styles.featuredDiv}>
        <div className={styles.featuredImg}>
          <img src={gallery1} alt="" />
          <img src={gallery2} alt="" />
          <img src={gallery3} alt="" />
        </div>
        <div className={styles.bottom}>
          <p>LUXOTEL, Art Gallery Goa</p>
          <p>Designed by Xyz, Firdaus Designer</p>
        </div>
      </div>
      <div className={styles.featuredText}>
        <div className={styles.bottom}>
          <p>Featured in Vogue magazine, Feb 2023</p>
        </div>
      </div>
      <div className={styles.featuredText}>
        <div className={styles.bottom}>
          <button>View Project <FaArrowRight /></button>
        </div>
      </div>
    </div>
  )
}

export default Featured