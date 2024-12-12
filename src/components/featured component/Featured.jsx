import React from 'react'
import styles from './Featured.module.css'
import gallery1 from '../../assets/images/gallery1.svg'
import gallery2 from '../../assets/images/gallery2.svg'
import gallery3 from '../../assets/images/gallery3.svg'
import { RiArrowRightLine } from "react-icons/ri";

const Featured = ({ name, design, flexDirection, alignItems, publish }) => {
  return (
    <div className={styles.featured}>
      <div style={{ flexDirection: flexDirection }} className={styles.featuredDiv}>
        <div className={styles.featuredImg}>
          <img src={gallery1} alt="" />
          <img src={gallery2} alt="" />
          <img src={gallery3} alt="" />
        </div>
        <div className={styles.bottom}>
          <p>{name}</p>
          <p>{design}</p>
        </div>
      </div>
      <div style={{ alignItems: alignItems }} className={styles.featuredText}>
        <div className={styles.bottom}>
          <p>{publish}</p>
        </div>
      </div>
      <div style={{ alignItems: alignItems }} className={styles.featuredText}>
        <div className={styles.bottom}>
          <button>View Project <RiArrowRightLine className={styles.arrow} /></button>
        </div>
      </div>
    </div>
  )
}

export default Featured