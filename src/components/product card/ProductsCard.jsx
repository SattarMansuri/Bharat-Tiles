import React, { useState } from 'react'
import styles from './ProductsCard.module.css'
import { RiArrowRightLine } from "react-icons/ri";
import product1 from '../../assets/images/product-img1.png'
import product2 from '../../assets/images/product-img2.png'
import product3 from '../../assets/images/product-img3.png'
import product4 from '../../assets/images/product-img4.png'
import ParaSmall from '../small components/ParaSmall';

const ProductsCard = ({ image, head }) => {
  return (
    <div className={styles.card}>
      <div className={styles.mainImage}><img src={image} alt="" /></div>
      <div className={styles.info}>
        <div className={styles.designsInfo}>
          <span>18 designs</span>
          <span>13 colors</span>
        </div>
        <h2>Designer tile</h2>
        <div className={styles.images}>
          <img src={product1} alt="design image" />
          <img src={product2} alt="design image" />
          <img src={product3} alt="design image" />
          <img src={product4} alt="design image" />
        </div>
        <ParaSmall para={'From exquisite handcrafted cement tiles that bring timeless beauty to your space, to elegant terrazzo floors that exude grandeur, our collection of decorative concrete, outdoor floors, micro cement overlays, wallpapers, bespoke products, and more, offers limitless design possibilities. Let your imagination soar as you discover the perfect flooring solution that transforms ordinary spaces into extraordinary works of art.'} />
      </div>
      <h1>{head}
        <RiArrowRightLine className={styles.arrow} />
      </h1>
      <div className={styles.designs}>
        <span>18 designs</span>
        <span>13 colors</span>
      </div>
    </div>
  )
}

export default ProductsCard
