import React from 'react'
import styles from './ProductsSection.module.css'
import ProductsCard from '../Products Card/ProductsCard'
import { PRODUCTS } from '../utils'
import IntroSpan from '../Small Components/IntroSpan'
import { IoArrowForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import Heading from '../Small Components/Heading'
import ParaSmall from '../Small Components/ParaSmall'
import menu from '../../assets/images/menu.svg'

const ProductsSection = ({ heading, para }) => {
  return (
    <section>
      <div className="lines">
        <div className={`${styles.verticalLine} line`}></div>
        <div className={`${styles.verticalLine} line`}></div>
        <div className={`${styles.verticalLine} line`}></div>
        <div className={`${styles.verticalLine} line`}></div>
      </div>
      <div className={styles.products}>
        <div className={styles.upper}>
          <IntroSpan leftText={'69 products'} midText={'30 colors'} rightText={'100 years'} />
          <div className={styles.mid}>
            <Heading heading={heading} />
            <ParaSmall para={para} />
            <button>
              View all products < IoArrowForwardSharp className={styles.btnArrow} />
            </button>
          </div>
        </div>
        <div className={styles.allproducts}>
          {PRODUCTS.map(({ id, image, head }) => (
            <ProductsCard key={id} image={image} head={head} />
          ))}
          <div className={styles.menu}>
            <img src={menu} alt="" />
            <h1>
              View all
              <FaArrowRight className={styles.arrow} />
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection