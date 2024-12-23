import React from 'react'
import styles from './ManufacturingCard2.module.css'
import ParaSmall from '../Small Components/ParaSmall'

const ManufacturingCard2 = ({ sr, name, para, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.upper}>
        <div className={styles.outerline}>
          <div className={styles.innerline}>
          </div>
        </div>
        <div className={styles.head}>
          <h3> {sr} </h3> <span>{name}</span>
        </div>
      </div>
      <ParaSmall para={para} />
      <img src={image} alt={`${name} image`} />
    </div >
  )
}

export default ManufacturingCard2