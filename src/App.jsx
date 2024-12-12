import './App.css'
import Design from './components/designs/Design'
import Home from './components/home/Home'
import Intro from './components/intro/Intro'
import Products from './components/products/Products'
import WorkBench from './components/workbench/WorkBench'
import Years from './components/years/Years'
import image1 from './assets/images/image1.png'
import image2 from './assets/images/image2.png'
import image3 from './assets/images/image3.png'
import image4 from './assets/images/image4.png'
import image5 from './assets/images/image5.png'
import image6 from './assets/images/image6.png'
import Project from './components/small components/Project'
import Manufacturing from './components/manufacturing/Manufacturing'
import Footer from './components/footer/Footer'
import PreLoading from './components/small components/PreLoading'
import { useEffect, useState } from 'react'



function App() {
  const [load, setLoad] = useState(false)
  useEffect(() => {
    setLoad(true)
    setTimeout(() => {
      setLoad(false)
    }, 3000)
  }, [])
  return (
    <>
      {
        load ? <PreLoading /> :
          <>
            <Home />
            <Intro />
            <Design image1={image1} image2={image2} image3={image3} />
            <Years />
            <WorkBench />
            <Products />
            <Design image1={image4} image2={image5} image3={image6} />
            <Project />
            <Manufacturing /><br />
            <Footer />
          </>
      }
    </>
  )
}

export default App
