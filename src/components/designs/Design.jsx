import React from 'react'
import styles from './Design.module.css'
import image1 from '../../assets/images/image1.png'
import image2 from '../../assets/images/image2.png'
import image3 from '../../assets/images/image3.png'

const Design = () => {
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