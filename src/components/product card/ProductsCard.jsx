import React from 'react'
import styles from './ProductsCard.module.css'
import { FaArrowRight } from "react-icons/fa6";

const ProductsCard = ({ image, head }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt="" />
      <h1>{head} <FaArrowRight className={styles.arrow} /></h1>
      <div>
        <span>18 designs</span>
        <span>13 colors</span>
      </div>
    </div>
  )
}

export default ProductsCard