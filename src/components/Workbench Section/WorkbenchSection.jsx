import React from 'react'
import styles from './WorkBenchSection.module.css'
import tile from '../../assets/images/tile.svg'
import workBench from '../../assets/images/work-bench.png'
import Heading from '../Small Components/Heading'
import ParaBig from '../Small Components/ParaBig'
import ParaSmall from '../Small Components/ParaSmall'
import { IoArrowForwardSharp } from "react-icons/io5";

const WorkbenchSection = ({ heading1, heading2, paraBig, paraSmall1, paraSmall2 }) => {
  return (
    <section>
      <div className="lines">
        <div className={`${styles.verticalLine} line`}></div>
        <div className={`${styles.verticalLine} line`}></div>
        <div className={`${styles.verticalLine} line`}></div>
        <div className={`${styles.verticalLine} line`}></div>
      </div>
      <div className={styles.workbench}>
        <div className={styles.work}>
          <Heading heading={heading1} />
        </div>
        <div className={styles.workshop}>
          <Heading heading={heading2} />
        </div>
        <div className={styles.moto}>
          <ParaBig para={paraBig} />
        </div>
        <div className={styles.updiv}>
          <span>Change tile</span>
          <div className={styles.imagediv}>
            <img src={tile} alt="" />
            <button>Continue in Workshop <IoArrowForwardSharp className={styles.arrow} /></button>
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.left}>
            <img src={workBench} alt="" />
          </div>
          <div className={styles.right}>
            <div className={styles.para}>
              <ParaSmall para={paraSmall1} />
              <ParaSmall para={paraSmall2} />
            </div>
            <div className={styles.mid}>
              <img src={tile} alt="tile image" />
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
          <button>Continue in Workshop <IoArrowForwardSharp className={styles.arrow} /></button>
        </div>
      </div>
    </section >
  )
}

export default WorkbenchSection