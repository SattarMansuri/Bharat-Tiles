import React from 'react'
import styles from './ManufacturingCard1.module.css'
import molding from '../../assets/images/molding.png'

const ManufacturingCard1 = ({ sr, name, para, image, margin }) => {
  return (
    <div className={styles.main}>
      <div style={{ marginLeft: margin }} className={styles.card}>
        <div className={styles.left}>
          <div className={styles.outerline}></div>
          <div className={styles.innerline}></div>
          <div className={styles.heading}>
            <h3>{sr}</h3>
            <div className={styles.info}>
              <span>{name}</span>
              <p>
                {para}
              </p>
            </div>
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