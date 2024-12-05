import React from 'react'
import styles from './ManufacturingCard2.module.css'
import ParaSmall from '../small components/ParaSmall'

const ManufacturingCard2 = ({ sr, name, para, image }) => {
  return (
    <div className={styles.card}>
      <div>
        <div className={styles.upper}>
          <h3> {sr} </h3> <span>{name}</span>
        </div>
        <ParaSmall para={para} />
      </div>
      <img src={image} alt={`${name} image`} />
    </div>
  )
}

export default ManufacturingCard2