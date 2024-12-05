import React, { useState } from 'react'
import styles from './Header.module.css'
import logo from '../../assets/images/logo.svg'

const Header = () => {
  const [click, setClick] = useState(false)
  return (
    <header>
      <nav className={styles.header}>
        <div className={styles.logo}>
          <div>
            <img src={logo} alt="Bharat Flooring and Tiles logo" />
          </div>
        </div>
        <div className={styles.navigations}>
          <a>Products
            <div className={styles.one}></div>
          </a>
          <a>Services</a>
          <a>About
            <div className={styles.one}></div>
          </a>
          <a>Inspiration
            <div className={styles.one}></div>
          </a>
        </div>
        <div onClick={() => setClick(!click)} className={styles.hammenu}>
          <div className={`${click && "first"}`}></div>
          <div className={`${click && 'second'}`}></div>
          <div className={`${click && 'third'}`}></div>
        </div>
      </nav>
      {click ? <div className={styles.sidebar}>
        <a>Products</a>
        <a>Services</a>
        <a>About</a>
        <a>Inspiration</a>
      </div> : null}
    </header>
  )
}

export default Header