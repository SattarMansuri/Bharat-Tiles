import React from 'react'
import styles from './WorkBench.module.css'
import tile from '../../assets/images/tile.svg'
import workBench from '../../assets/images/work-bench.png'

const WorkBench = () => {
  return (
    <div className={styles.workbench}>
      <h1 className={styles.work}>Workbench</h1>
      <h1 className={styles.workshop}>Workshop</h1>
      <p>We encourage our customers to look at our designer tile collections, play with the colours and patterns, and come up with unique handmade tile selections.</p>
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
            <p>Anuiom (Type D)</p>
            <p>Anulom is our stunning hexagonal rhythm 3D Tile Collection, where the artistry of design meets the allure of dimensionality, creating a mesmerizing visual experience for your spaces. </p>
          </div>
          <div className={styles.mid}>
            <img src={tile} alt="" />
          </div>
          <div className={styles.para}>
            <p>
              Size <br />
              20 cm x 20 cm
            </p>
            <p>
              Thickness <br />
              Flooring - 23mm - 25mm <br />
              Cladding - 16mm - 18mm
            </p>
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
    </div>
  )
}

export default WorkBench