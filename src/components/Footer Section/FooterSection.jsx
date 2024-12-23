import React from 'react'
import styles from './FooterSection.module.css'
import Colors from '../Small Components/Colors'
import Lists from '../Small Components/Lists'
import ParaSmall from '../Small Components/ParaSmall'
import logo from '../../assets/images/logo.svg'
import darkLogo from '../../assets/images/logo-dark.svg'

const FooterSection = ({ colors, list1, list2, list3, list4, list5, list6, allList }) => {
  return (
    <footer className={styles.main}>
      <div className={styles.footer}>
        <div className={styles.colors}>
          <div className={styles.logo}>
            <img src={logo} alt='Bharat flooring and tiles logo' />
          </div>
          {
            colors.map(({ id, name, color, bgCol }) => (
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
              list1.map(({ id, name }) => (
                <Lists key={id} name={name} />
              ))
            }
          </ul>
          <ul>
            {
              list2.map(({ id, name }) => (
                <Lists key={id} name={name} />
              ))
            }
          </ul>
          <ul>
            {
              list3.map(({ id, name }) => (
                <Lists key={id} name={name} />
              ))
            }
          </ul>
          <ul>
            {
              list4.map(({ id, name }) => (
                <Lists key={id} name={name} />
              ))
            }
          </ul>
          <ul>
            {
              list5.map(({ id, name }) => (
                <Lists key={id} name={name} />
              ))
            }
          </ul>
          <ul>
            {
              list6.map(({ id, name }) => (
                <Lists key={id} name={name} />
              ))
            }
          </ul>
        </div>
        <div className={styles.colList}>
          <ul>
            {
              allList.map(({ id, name }) => (
                <Lists key={id} name={name} />
              ))
            }
          </ul>
        </div>
        <ParaSmall para={'Copyright - Bharat Floorings and Tiles © 2024 All images and text are copyrighted unless otherwise specified.'} />
      </div>
    </footer>
  )
}

export default FooterSection