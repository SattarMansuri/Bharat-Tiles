import React from 'react'
import styles from './Design.module.css'

const Design = ({ image1, image2, image3 }) => {
  return (
    <section className={styles.designs}>
      <div className={styles.left}>
        <img src={image1} alt="" />
      </div>
      <div className={styles.right}>
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
      </div>
    </section>
  )
}

export default Design