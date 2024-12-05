import React from 'react'
import styles from './ManufacturingCard1.module.css'
import ParaSmall from '../small components/ParaSmall'

const ManufacturingCard1 = ({ sr, name, para, image }) => {
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <div className={styles.left}>
          <div className={styles.outerline}></div>
          <div className={styles.innerline}></div>
          <div className={styles.cardinfo}>
            <div className={styles.heading}>
              <h3>{sr}</h3> <span>{name}</span>
            </div>
            <ParaSmall para={para} />
          </div>
        </div>
        <div className={styles.right}>
          <img src={image} alt={`${name}-image`} />
        </div>
      </div>
    </div>
  )
}

export default ManufacturingCard1