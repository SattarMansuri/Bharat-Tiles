import React, { useEffect, useRef } from 'react'
import styles from './ManufacturingSection.module.css'
import IntroSpan from '../Small Components/IntroSpan'
import { MANUFACTURING } from '../utils'
import Heading from '../Small Components/Heading'
import ParaSmall from '../Small Components/ParaSmall'
import ManufacturingCard1 from '../Manufacturing Cards/ManufacturingCard1'
import ManufacturingCard2 from '../Manufacturing Cards/ManufacturingCard2'
import FooterImage from '../Small Components/FooterImage'

const ManufacturingSection = ({ heading, paraHead1, para1, paraHead2, para2, manufacturing }) => {
  const sectionRef = useRef()

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 900) {
        if (sectionRef.current) {
          const rect = sectionRef.current.getBoundingClientRect();
          if (rect.top <= 0) {
            sectionRef.current.style.overflowY = 'scroll'
          }
          else if (rect.top > 0) {
            sectionRef.current.style.overflow = 'hidden'
          };
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section>
      <div className="lines">
        <div className={`${styles.verticalLine} line`}></div>
        <div className={`${styles.verticalLine} line`}></div>
        <div className={`${styles.verticalLine} line`}></div>
        <div className={`${styles.verticalLine} line`}></div>
      </div>
      <div ref={sectionRef} className={styles.main}>
        <div className={styles.scrolling}>
          <div className={styles.upper}>
            <IntroSpan leftText={'6 steps'} midText={'4 hours'} rightText={'Handmade'} />
            <Heading heading={heading} />
            <div className={styles.info}>
              <div>
                <ParaSmall para={paraHead1} />
                <ParaSmall para={para1} />
              </div>
              <div>
                <ParaSmall para={paraHead2} />
                <ParaSmall para={para2} />
              </div>
            </div>
          </div>
          <div className={styles.card1}>
            {
              manufacturing.filter((el) => el.name === 'Blending').map(({ id, name, para, image, margin }) => (
                <ManufacturingCard1 key={id} sr={id} name={name} para={para} image={image} margin={margin} />
              ))
            }
          </div>
          <div className={styles.card2}>
            {
              manufacturing.filter((el) => el.name === 'Molding').map(({ id, name, para, image, margin }) => (
                <ManufacturingCard1 key={id} sr={id} name={name} para={para} image={image} margin={margin} />
              ))
            }
          </div>
          <div className={styles.card3}>
            {
              manufacturing.filter((el) => el.name === 'Compressing').map(({ id, name, para, image, margin }) => (
                <ManufacturingCard1 key={id} sr={id} name={name} para={para} image={image} margin={margin} />
              ))
            }
          </div>
          <div className={styles.card4}>
            {
              manufacturing.filter((el) => el.name === 'Hardening').map(({ id, name, para, image, margin }) => (
                <ManufacturingCard1 key={id} sr={id} name={name} para={para} image={image} margin={margin} />
              ))
            }
          </div>
          <div className={styles.card5}>
            {
              manufacturing.filter((el) => el.name === 'Hydrolysis').map(({ id, name, para, image, margin }) => (
                <ManufacturingCard1 key={id} sr={id} name={name} para={para} image={image} margin={margin} />
              ))
            }
          </div>
          <div className={styles.card6}>
            {
              manufacturing.filter((el) => el.name === 'Drying').map(({ id, name, para, image, margin }) => (
                <ManufacturingCard1 key={id} sr={id} name={name} para={para} image={image} margin={margin} />
              ))
            }
          </div>
          <FooterImage />
        </div>
        <div className={styles.sliding}>
          <div className={styles.upper}>
            <IntroSpan leftText={'6 steps'} midText={'4 hours'} rightText={'Handmade'} />
            <Heading heading={'Manufacturing process'} />
            <div className={styles.info}>
              <div>
                <ParaSmall para={paraHead1} />
                <ParaSmall para={para1} />
              </div>
              <div>
                <ParaSmall para={paraHead2} />
                <ParaSmall para={para2} />
              </div>
            </div>
          </div>
          < div className={styles.mid} >
            {
              manufacturing.map(({ id, name, para, image, }) => (
                <ManufacturingCard2 className={`${styles}.card${id}`} key={id} sr={id} name={name} para={para} image={image} />
              ))
            }
          </div >
          <FooterImage />
        </div>
      </div>
    </section >
  )
}

export default ManufacturingSection