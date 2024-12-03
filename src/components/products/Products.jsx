import React from 'react'
import styles from './Products.module.css'
import ProductsCard from '../product card/ProductsCard'
import { PRODUCTS } from '../utils'

const Products = () => {
  return (
    <div className={styles.products}>
      <div className={styles.upper}>
        <span>69 products</span>
        <span>30colors</span>
        <span>100 years</span>
      </div>
      <div className={styles.mid}>
        <h1>Products</h1>
        <p>
          From exquisite handcrafted cement tiles that bring timeless beauty to your space, to elegant terrazzo floors that exude grandeur, our collection of decorative concrete, outdoor floors, micro cement overlays, wallpapers, bespoke products, and more, offers limitless design possibilities. Let your imagination soar as you discover the perfect flooring solution that transforms ordinary spaces into extraordinary works of art.
        </p>
        <button>
          View all products
        </button>
      </div>
      <div className={styles.allproducts}>
        {PRODUCTS.map(({ id, image, head }) => (
          <ProductsCard key={id} image={image} head={head} />
        ))}
      </div>
    </div>
  )
}

export default Products