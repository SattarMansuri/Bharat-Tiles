import React, { useState } from 'react'
import styles from './Home.module.css'
import logo from '../../assets/images/logo.svg'
import Featured from '../featured component/Featured'

const Home = () => {
  const [click, setClick] = useState(false)
  return (
    <header className={styles.home}>
      <nav className={styles.header}>
        <div className={styles.logo}>
          <div>
            <img src={logo} alt="" />
          </div>
        </div>
        <div className={styles.navigations}>
          <a>Products</a>
          <a>Services</a>
          <a>About</a>
          <a>Inspiration</a>
        </div>
        <div onClick={() => setClick(!click)} className={styles.hammenu}>
          <div className={`${click && "first"}`}></div>
          <div className={`${click && 'second'}`}></div>
          <div className={`${click && 'third'}`}></div>
        </div>
      </nav>
      <div className={styles.change}>
        <h2>100 years of</h2>
        <h1>
          <span>INNOVATION</span>
          <span>CRAFTMANSHIP</span>
          <span>EXCELLENCE</span>
        </h1>
      </div>
      <Featured />
      {click ? <div className={styles.sidebar}>
        <a>Products</a>
        <a>Services</a>
        <a>About</a>
        <a>Inspiration</a>
      </div> : null}
    </header>
  )
}

export default Home