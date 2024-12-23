import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './HeaderSection.module.css'
import logo from '../../assets/images/logo.svg'
import { NAVIGATION_LINKS } from '../utils'

const HeaderSection = () => {
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
          {
            NAVIGATION_LINKS.map(({ id, name }) => (
              <Link className={styles.navs} key={id} to='/'>{name}</Link>
            ))
          }
        </div>
        <div onClick={() => setClick(!click)} className={styles.hammenu}>
          <div className={`${click && "first"}`}></div>
          <div className={`${click && 'second'}`}></div>
          <div className={`${click && 'third'}`}></div>
        </div>
      </nav>
      {click ? <div className={styles.sidebar}>
        {
          NAVIGATION_LINKS.map(({ id, name }) => (
            <Link className={styles.navs} key={id} to='/'>{name}</Link>
          ))
        }
      </div> : null}
    </header>
  )
}

export default HeaderSection