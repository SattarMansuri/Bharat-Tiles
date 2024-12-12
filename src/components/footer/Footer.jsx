import React from 'react'
import styles from './Footer.module.css'
import Colors from '../small components/Colors'
import { ALL_LISTS, COLORS, FIFTH_LIST, FIRST_LIST, FOURTH_LIST, SECOND_LIST, SIXTH_LIST, THIRD_LIST } from '../utils'
import Lists from '../small components/Lists'
import ParaSmall from '../small components/ParaSmall'
import logo from '../../assets/images/logo.svg'
import darkLogo from '../../assets/images/logo-dark.svg'

const Footer = () => {
  return (
    <div className={styles.led}>
      <footer className={styles.footer}>
        <div className={styles.colors}>
          <div className={styles.logo}>
            <img src={logo} alt='Bharat flooring and tiles logo' />
          </div>
          {
            COLORS.map(({ id, name, color, bgCol }) => (
              <Colors key={id} name={name} color={color} bgCol={bgCol} />
            ))
          }
        </div>
        <div className={styles.dark}>
          <img src={darkLogo} alt="Bharat flooring and tiles logo" />
        </div>
        <div className={styles.navigations}>
          <ul>
            {
              FIRST_LIST.map(({ id, name }) => (
                <Lists key={id} name={name} />
              ))
            }
          </ul>
          <ul>
            {
              SECOND_LIST.map(({ id, name }) => (
                <Lists key={id} name={name} />
              ))
            }
          </ul>
          <ul>
            {
              THIRD_LIST.map(({ id, name }) => (
                <Lists key={id} name={name} />
              ))
            }
          </ul>
          <ul>
            {
              FOURTH_LIST.map(({ id, name }) => (
                <Lists key={id} name={name} />
              ))
            }
          </ul>
          <ul>
            {
              FIFTH_LIST.map(({ id, name }) => (
                <Lists key={id} name={name} />
              ))
            }
          </ul>
          <ul>
            {
              SIXTH_LIST.map(({ id, name }) => (
                <Lists key={id} name={name} />
              ))
            }
          </ul>
        </div>
        <div className={styles.colList}>
          <ul>
            {
              ALL_LISTS.map(({ id, name }) => (
                <Lists key={id} name={name} />
              ))
            }
          </ul>
        </div>
        <ParaSmall para={'Copyright - Bharat Floorings and Tiles © 2024 All images and text are copyrighted unless otherwise specified.'} />
      </footer>
    </div>
  )
}

export default Footer