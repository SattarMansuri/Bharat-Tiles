import React from 'react'
import styles from './IntroSection1.module.css'
import IntroSpan from '../Small Components/IntroSpan'
import Heading from '../Small Components/Heading'
import ParaBig from '../Small Components/ParaBig'
import ParaSmall from '../Small Components/ParaSmall'
import manufacturing from '../../assets/videos/Manufacturing.mp4'

const IntroSection1 = ({ heading, paraBig, paraSmall, paraFooter }) => {
  return (
    <section>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className={styles.intro}>
        <IntroSpan leftText={'Who we are'} rightText={'100 years old'} />
        <div className={styles.main}>
          <div className={styles.left}>
            <Heading heading={heading} />
            <div className={styles.paraBig}>
              <ParaBig para={paraBig} />
            </div>
            <div className={styles.paraSmall}>
              <ParaSmall para={paraSmall} />
            </div>
          </div>
          <div className={styles.right}>
            <video className={styles.manufacturingVideo} controls src={manufacturing} type="video/mp4" />
            <ParaSmall para={paraFooter} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroSection1