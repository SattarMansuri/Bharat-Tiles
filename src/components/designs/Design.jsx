import React, { useEffect, useRef, useState } from 'react'
import styles from './Design.module.css'

const Design = ({ image1, image2, image3 }) => {
  const [image, setImage] = useState(image1)
  const image1Ref = useRef()
  const image2Ref = useRef()
  const image3Ref = useRef()

  const clickhandle = (e) => {
    if (e.target.alt === 'interior image 1') {
      setImage(image1)
      image1Ref.current.style.filter = 'grayscale(0)'
      image2Ref.current.style.filter = 'grayscale(100%)'
      image3Ref.current.style.filter = 'grayscale(100%)'
    }
    if (e.target.alt === 'interior image 2') {
      setImage(image2)
      image1Ref.current.style.filter = 'grayscale(100%)'
      image2Ref.current.style.filter = 'grayscale(0)'
      image3Ref.current.style.filter = 'grayscale(100%)'
    }
    if (e.target.alt === 'interior image 3') {
      setImage(image3)
      image1Ref.current.style.filter = 'grayscale(100%)'
      image2Ref.current.style.filter = 'grayscale(100%)'
      image3Ref.current.style.filter = 'grayscale(0)'
    }
  }
  useEffect(() => {
    image2Ref.current.style.filter = 'grayscale(100%)'
    image3Ref.current.style.filter = 'grayscale(100%)'
  }, [])
  return (
    <section className={styles.designs}>
      <div className={styles.left}>
        <img src={image} alt="" />
      </div>
      <div className={styles.right}>
        <img ref={image1Ref} onClick={(e) => clickhandle(e)} src={image1} alt="interior image 1" />
        <img ref={image2Ref} onClick={(e) => clickhandle(e)} src={image2} alt="interior image 2" />
        <img ref={image3Ref} onClick={(e) => clickhandle(e)} src={image3} alt="interior image 3" />
      </div>
    </section>
  )
}

export default Design