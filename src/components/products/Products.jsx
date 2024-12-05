import React from 'react'
import styles from './Products.module.css'
import ProductsCard from '../product card/ProductsCard'
import { PRODUCTS } from '../utils'
import IntroSpan from '../small components/IntroSpan'
import { IoArrowForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import Heading from '../small components/Heading'
import ParaSmall from '../small components/ParaSmall'
import menu from '../../assets/images/menu.svg'

const Products = () => {
  return (
    <div className={styles.products}>
      <div className={styles.upper}>
        <IntroSpan leftText={'69 products'} midText={'30colors'} rightText={'100 years'} />
        <div className={styles.mid}>
          <Heading heading={'Products'} />
          <ParaSmall para={'From exquisite handcrafted cement tiles that bring timeless beauty to your space, to elegant terrazzo floors that exude grandeur, our collection of decorative concrete, outdoor floors, micro cement overlays, wallpapers, bespoke products, and more, offers limitless design possibilities. Let your imagination soar as you discover the perfect flooring solution that transforms ordinary spaces into extraordinary works of art.'} />
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
  )
}

export default Products