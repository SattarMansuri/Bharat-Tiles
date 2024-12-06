import React from 'react'
import styles from './WorkBench.module.css'
import tile from '../../assets/images/tile.svg'
import workBench from '../../assets/images/work-bench.png'
import Heading from '../small components/Heading'
import ParaBig from '../small components/ParaBig'
import ParaSmall from '../small components/ParaSmall'

const WorkBench = () => {
  return (
    <section className={styles.workbench}>
      <div className={styles.work}>
        <Heading heading={'Workbench'} />
      </div>
      <div className={styles.workshop}>
        <Heading heading={'Workshop'} />
      </div>
      <div className={styles.moto}>
        <ParaBig para={'We encourage our customers to look at our designer tile collections, play with the colours and patterns, and come up with unique handmade tile selections.'} />
      </div>
      <div className={styles.updiv}>
        <span>Change tile</span>
        <div className={styles.imagediv}>
          <img src={tile} alt="" />
          <button>Continue in Workshop</button>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.left}>
          <img src={workBench} alt="" />
        </div>
        <div className={styles.right}>
          <div className={styles.para}>
            <ParaSmall para={'Anuiom (Type D)'} />
            <ParaSmall para={'Anulom is our stunning hexagonal rhythm 3D Tile Collection, where the artistry of design meets the allure of dimensionality, creating a mesmerizing visual experience for your spaces.'} />
          </div>
          <div className={styles.mid}>
            <img src={tile} alt="" />
          </div>
          <div className={styles.size}>
            <div>
              <ParaSmall para={'Size'} />
              <ParaSmall para={'20 cm x 20 cm'} />
            </div>
            <div>
              <ParaSmall para={'Thickness'} />
              <ParaSmall para={'Flooring - 23mm - 25mm '} />
              <ParaSmall para={' Cladding - 16mm - 18mm'} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lower}>
        <div className={styles.colors}>
          <div style={{ backgroundColor: '#236A9A' }}></div>
          <div style={{ backgroundColor: '#DF998F' }}></div>
          <div style={{ backgroundColor: '#5BA9C9' }}></div>
          <div style={{ backgroundColor: '#FFFFFF' }}></div>
          <div style={{ backgroundColor: '#B64357' }}></div>
        </div>
        <span>Change tile</span>
        <button>Continue in Workshop</button>
      </div>
    </section >
  )
}

export default WorkBench